import {
  TREND_DEFAULT_RESULT_COUNT,
  TREND_MAX_RANK,
  TREND_MONTHLY_START_PERIOD,
  TREND_PAGE_SIZE,
  TREND_TOTAL_PAGES,
  buildTrendSheetUrl,
  getTrendTotalPages,
  getLatestCollectibleTrendPeriod,
  listMonthlyPeriods,
  normalizeExcludedTerms,
  normalizeTrendResultCount,
  normalizeTrendSpreadsheetId,
  serializeTrendFilter,
  type TrendAdminBoard,
  type TrendAgeCode,
  type TrendCollectionRun,
  type TrendCollectionTask,
  type TrendCollectionTaskSource,
  type TrendDeviceCode,
  type TrendGenderCode,
  type TrendKeywordSnapshot,
  type TrendProfile,
  type TrendProfileInput,
  type TrendResultCount,
  type TrendAnalysisCard,
  type TrendAnalysisSummary,
  type TrendRunDetail
} from "../../shared/src/index";
import { applyBrandExclusion, buildTrendAnalysis } from "./trend-analysis";

type Json = string | number | boolean | null | Json[] | { [key: string]: Json };

interface Env {
  DB: D1Database;
  APP_NAME?: string;
  GOOGLE_SHEETS_SERVICE_ACCOUNT_EMAIL?: string;
  GOOGLE_SHEETS_PRIVATE_KEY?: string;
}

interface RawCategoryNode {
  cid: number;
  name: string;
  fullPath: string;
  level: number;
  leaf: boolean;
}

interface RawCategoryResponse extends RawCategoryNode {
  childList: RawCategoryNode[];
}

interface NaverKeywordRankItem {
  rank: number;
  keyword: string;
  linkId: string;
}

interface NaverKeywordRankPage {
  ranks: NaverKeywordRankItem[];
}

interface ApiError {
  ok: false;
  code: string;
  message: string;
}

const NAVER_BASE_URL = "https://datalab.naver.com";
const NAVER_CATEGORY_PAGE_URL = `${NAVER_BASE_URL}/shoppingInsight/sCategory.naver`;
const NAVER_BROWSER_USER_AGENT =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36";
const DEFAULT_OPERATOR_ID = "haniroom-trend-operator";
const JSON_HEADERS = {
  "content-type": "application/json; charset=utf-8",
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET,POST,DELETE,OPTIONS",
  "access-control-allow-headers": "content-type"
};
const SHEETS_SCOPE = "https://www.googleapis.com/auth/spreadsheets";
const PROCESS_BATCH_MAX_TASKS = 8;
const PROCESS_BATCH_MAX_WALL_MS = 25_000;
let schemaReadyPromise: Promise<void> | null = null;

type NaverSessionRef = {
  jar?: Map<string, string>;
};

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    await ensureSchema(env.DB);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: JSON_HEADERS });
    }

    const url = new URL(request.url);
    const pathname = url.pathname;

    try {
      if (request.method === "GET" && pathname === "/v1/health") {
        return respondJson({ ok: true, service: env.APP_NAME ?? "hanirum-sourcing-trend-api" });
      }

      if (request.method === "GET" && pathname === "/v1/sourcing/admin/review-board") {
        return respondJson(buildEmptySourcingBoard());
      }

      if (request.method === "GET" && pathname === "/v1/trends/admin/board") {
        const board = await getTrendAdminBoard(env.DB);

        if (await shouldKickQueuedProcessing(env.DB)) {
          ctx.waitUntil(processQueuedRunBatch(env));
        }

        return respondJson({ ok: true, board });
      }

      if (request.method === "GET" && pathname === "/v1/trends/profiles") {
        return respondJson({ ok: true, profiles: await listTrendProfiles(env.DB) });
      }

      if (request.method === "POST" && pathname === "/v1/trends/profiles") {
        const body = (await request.json()) as TrendProfileInput;
        return respondJson(await createTrendProfile(env.DB, body));
      }

      if (request.method === "POST" && pathname === "/v1/trends/collect") {
        const body = (await request.json()) as TrendProfileInput;
        const response = await startTrendCollection(env.DB, body);

        if (response.ok && (response.run.status === "queued" || response.run.status === "running")) {
          ctx.waitUntil(processQueuedRunBatch(env, { runId: response.run.id }));
        }

        return respondJson(response);
      }

      const categoryMatch = pathname.match(/^\/v1\/trends\/categories\/([^/]+)$/);
      if (request.method === "GET" && categoryMatch) {
        const cid = Number(categoryMatch[1]);
        const nodes = await fetchCategoryChildren(cid);
        return respondJson({ ok: true, nodes });
      }

      const runMatch = pathname.match(/^\/v1\/trends\/runs\/([^/]+)$/);
      if (request.method === "GET" && runMatch) {
        const response = await getTrendRun(env.DB, runMatch[1]);

        if (response.ok && (await shouldKickQueuedProcessing(env.DB, runMatch[1]))) {
          ctx.waitUntil(processQueuedRunBatch(env, { runId: runMatch[1] }));
        }

        return respondJson(response);
      }

      const cancelMatch = pathname.match(/^\/v1\/trends\/runs\/([^/]+)\/cancel$/);
      if (request.method === "POST" && cancelMatch) {
        return respondJson(await cancelTrendRun(env.DB, cancelMatch[1]));
      }

      const deleteMatch = pathname.match(/^\/v1\/trends\/runs\/([^/]+)$/);
      if (request.method === "DELETE" && deleteMatch) {
        return respondJson(await deleteTrendRun(env.DB, deleteMatch[1]));
      }

      const runSnapshotsMatch = pathname.match(/^\/v1\/trends\/runs\/([^/]+)\/snapshots$/);
      if (request.method === "GET" && runSnapshotsMatch) {
        const period = url.searchParams.get("period")?.trim() ?? "";
        const page = Math.max(1, Number(url.searchParams.get("page") ?? "1") || 1);
        return respondJson(await getTrendRunSnapshotsPage(env.DB, runSnapshotsMatch[1], period, page));
      }

      const retryMatch = pathname.match(/^\/v1\/trends\/runs\/([^/]+)\/retry-failures$/);
      if (request.method === "POST" && retryMatch) {
        return respondJson(await retryFailedTasks(env.DB, retryMatch[1]));
      }

      const backfillMatch = pathname.match(/^\/v1\/trends\/profiles\/([^/]+)\/backfill$/);
      if (request.method === "POST" && backfillMatch) {
        return respondJson(await startBackfill(env.DB, backfillMatch[1]));
      }

      const syncMatch = pathname.match(/^\/v1\/trends\/profiles\/([^/]+)\/sync-sheet$/);
      if (request.method === "POST" && syncMatch) {
        return respondJson(await syncProfileToSheets(env, syncMatch[1]));
      }

      if (request.method === "POST" && pathname === "/v1/trends/worker/process-next") {
        return respondJson(await processQueuedRunBatch(env));
      }

      return respondJson<ApiError>(
        {
          ok: false,
          code: "NOT_FOUND",
          message: "요청한 API 경로를 찾을 수 없습니다."
        },
        404
      );
    } catch (error) {
      return respondJson<ApiError>(
        {
          ok: false,
          code: "UNEXPECTED_ERROR",
          message: error instanceof Error ? error.message : "예상하지 못한 오류가 발생했습니다."
        },
        500
      );
    }
  },

  async scheduled(_event: ScheduledEvent, env: Env, ctx: ExecutionContext) {
    await ensureSchema(env.DB);
    ctx.waitUntil(processQueuedRunBatch(env, { maxTasks: PROCESS_BATCH_MAX_TASKS * 2, maxWallMs: 55_000 }));
  }
};

function respondJson<T extends Json | Record<string, unknown>>(payload: T, status = 200) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: JSON_HEADERS
  });
}

function buildEmptySourcingBoard() {
  return {
    ok: true,
    board: {
      generatedAt: nowIso(),
      metrics: [
        { id: "runs", label: "활성 런", value: "0건", hint: "공개 배포에서는 트렌드 기능만 활성화했습니다.", tone: "stable" },
        { id: "queue", label: "검토 큐", value: "0건", hint: "소싱 운영 큐는 아직 비활성화입니다.", tone: "stable" },
        { id: "mailbox", label: "메일 연결", value: "준비 중", hint: "추가 백엔드 연동 후 활성화됩니다.", tone: "attention" }
      ],
      reviewQueue: [],
      recentRuns: []
    }
  };
}

async function getTrendAdminBoard(db: D1Database): Promise<TrendAdminBoard> {
  const profiles = await listTrendProfiles(db);
  const runs = await all<TrendCollectionRunRow>(
    db,
    `SELECT *
     FROM trend_runs
     ORDER BY CASE status
       WHEN 'running' THEN 0
       WHEN 'queued' THEN 1
       WHEN 'completed' THEN 2
       WHEN 'cancelled' THEN 3
       WHEN 'failed' THEN 4
       ELSE 5
     END,
     updated_at DESC
     LIMIT 8`
  );
  const runDetails = await Promise.all(runs.map((run) => buildRunBoardDetail(db, mapRun(run))));
  const totalSnapshots = await scalar<number>(db, "SELECT COUNT(*) FROM trend_snapshots WHERE rank <= ?", [TREND_MAX_RANK]);
  const failedTasks = await scalar<number>(db, "SELECT COUNT(*) FROM trend_tasks WHERE status = 'failed'", []);
  const queuedRuns = await scalar<number>(
    db,
    "SELECT COUNT(*) FROM trend_runs WHERE status IN ('queued', 'running')",
    []
  );
  const latestSync = profiles
    .map((profile) => profile.lastSyncedAt)
    .filter((value): value is string => Boolean(value))
    .sort((left, right) => right.localeCompare(left))[0];

  return {
    generatedAt: nowIso(),
    metrics: [
      {
        id: "profiles",
        label: "활성 프로필",
        value: `${profiles.filter((profile) => profile.status === "active").length}개`,
        hint: "수집 가능한 필터 프로필 개수",
        tone: "stable"
      },
      {
        id: "runs",
        label: "대기/실행 런",
        value: `${queuedRuns}건`,
        hint: "cron worker가 처리할 백필 런 상태",
        tone: queuedRuns > 0 ? "progress" : "stable"
      },
      {
        id: "snapshots",
        label: "누적 수집",
        value: `${Number(totalSnapshots ?? 0).toLocaleString("ko-KR")}건`,
        hint: "2021-01부터 누적된 월별 인기검색어 캐시",
        tone: "stable"
      },
      {
        id: "failures",
        label: "실패 태스크",
        value: `${failedTasks}건`,
        hint: latestSync ? `마지막 동기화 기록 ${latestSync}` : "현재는 시트 동기화를 숨겨두었습니다.",
        tone: Number(failedTasks ?? 0) > 0 ? "attention" : "stable"
      }
    ],
    profiles,
    runs: runDetails
  };
}

async function buildRunBoardDetail(db: D1Database, run: TrendCollectionRun): Promise<TrendRunDetail> {
  const profileRow = await one<TrendProfileRow>(db, "SELECT * FROM trend_profiles WHERE id = ?", [run.profileId]);
  const profile = mapProfile(profileRow!);
  const tasks = (
    await all<TrendTaskRow>(db, "SELECT * FROM trend_tasks WHERE run_id = ? ORDER BY period ASC", [run.id])
  ).map(mapTask);
  const latestCompletedPeriod =
    [...new Set(tasks.filter((task) => task.status === "completed").map((task) => task.period))].sort((left, right) => right.localeCompare(left))[0] ??
    ((await scalar<string>(
      db,
      "SELECT period FROM trend_snapshots WHERE profile_id = ? AND rank <= ? ORDER BY period DESC LIMIT 1",
      [profile.id, profile.resultCount]
    )) ??
      undefined);
  const previewRows = latestCompletedPeriod
    ? (
        await all<TrendSnapshotRow>(
          db,
          "SELECT * FROM trend_snapshots WHERE profile_id = ? AND period = ? AND rank <= ? ORDER BY rank ASC LIMIT ?",
          [profile.id, latestCompletedPeriod, profile.resultCount, TREND_PAGE_SIZE]
        )
      ).map(mapSnapshot)
    : [];
  const snapshotsPreview = profile.excludeBrandProducts
    ? previewRows.filter((snapshot) => !snapshot.brandExcluded)
    : previewRows;
  const runningTask =
    [...tasks].find((task) => task.status === "running") ??
    [...tasks].find((task) => task.status === "pending");
  const cacheCompletedTasks = tasks.filter((task) => task.status === "completed" && task.source === "cache").length;
  const naverCompletedTasks = tasks.filter((task) => task.status === "completed" && task.source === "naver").length;
  const processingMode =
    run.status === "completed"
      ? "idle"
      : runningTask?.source === "cache"
        ? "cache"
        : runningTask?.source === "naver"
          ? "naver"
          : cacheCompletedTasks > naverCompletedTasks
            ? "cache"
            : "naver";
  const completedDurations = tasks
    .filter((task) => task.status === "completed" && task.startedAt && task.completedAt)
    .map((task) => Math.max(1, (new Date(task.completedAt!).getTime() - new Date(task.startedAt!).getTime()) / 1000));
  const averageTaskSeconds = completedDurations.length
    ? Math.round(completedDurations.reduce((sum, value) => sum + value, 0) / completedDurations.length)
    : 8;
  const remainingTasks = Math.max(0, run.totalTasks - run.completedTasks);
  const etaMinutes = run.status === "completed" || remainingTasks === 0 ? 0 : Math.max(1, Math.ceil((remainingTasks * averageTaskSeconds) / 60));
  const estimatedCompletionAt =
    etaMinutes > 0 ? new Date(Date.now() + etaMinutes * 60_000).toISOString() : run.completedAt;
  const currentPage = runningTask
    ? Math.min(
        runningTask.totalPages,
        Math.max(1, runningTask.completedPages + (runningTask.status === "running" && runningTask.completedPages < runningTask.totalPages ? 1 : 0))
      )
    : undefined;
  const expectedPeriods = listMonthlyPeriods(profile.startPeriod, profile.endPeriod);
  const completedPeriodCount = new Set(tasks.filter((task) => task.status === "completed").map((task) => task.period)).size;

  return {
    ...run,
    profile,
    tasks,
    snapshotsPreview,
    currentPeriod: runningTask?.period,
    currentPage,
    latestCompletedPeriod,
    remainingTasks,
    cacheCompletedTasks,
    naverCompletedTasks,
    processingMode,
    averageTaskSeconds,
    etaMinutes,
    estimatedCompletionAt,
    canCancel: run.status === "queued" || run.status === "running",
    canDelete: true,
    analysisReady: run.status === "completed" && completedPeriodCount >= expectedPeriods.length,
    analysisCards: []
  };
}

async function listTrendProfiles(db: D1Database): Promise<TrendProfile[]> {
  const rows = await all<TrendProfileRow>(db, "SELECT * FROM trend_profiles ORDER BY updated_at DESC");
  return rows.map(mapProfile);
}

async function createTrendProfile(db: D1Database, input: TrendProfileInput) {
  const normalizedInput = normalizeTrendProfileInput(input);

  if (normalizedInput.timeUnit !== "month") {
    return {
      ok: false as const,
      code: "TIME_UNIT_NOT_SUPPORTED",
      message: "v1에서는 월간만 지원합니다."
    };
  }

  const latestCollectiblePeriod = getLatestCollectibleTrendPeriod();
  const now = nowIso();
  const slugBase = slugifyTrendName(normalizedInput.name);
  let slug = slugBase;
  let suffix = 2;

  while (await one(db, "SELECT id FROM trend_profiles WHERE slug = ?", [slug])) {
    slug = `${slugBase}-${suffix}`;
    suffix += 1;
  }

  const profile: TrendProfile = {
    id: crypto.randomUUID(),
    slug,
    status: "active",
    startPeriod: TREND_MONTHLY_START_PERIOD,
    endPeriod: latestCollectiblePeriod,
    lastCollectedPeriod: undefined,
    lastSyncedAt: undefined,
    syncStatus: "idle",
    latestRunId: undefined,
    resultCount: normalizedInput.resultCount,
    excludeBrandProducts: normalizedInput.excludeBrandProducts,
    customExcludedTerms: normalizedInput.customExcludedTerms ?? [],
    createdAt: now,
    updatedAt: now,
    name: normalizedInput.name.trim(),
    categoryCid: Number(normalizedInput.categoryCid),
    categoryPath: normalizedInput.categoryPath.trim(),
    categoryDepth: Number(normalizedInput.categoryDepth),
    timeUnit: "month",
    devices: normalizedInput.devices ?? [],
    genders: normalizedInput.genders ?? [],
    ages: normalizedInput.ages ?? [],
    spreadsheetId: normalizeTrendSpreadsheetId(normalizedInput.spreadsheetId)
  };

  await run(
    db,
    `INSERT INTO trend_profiles (
      id, slug, name, status, start_period, end_period, last_collected_period, last_synced_at, sync_status, latest_run_id,
      created_at, updated_at, category_cid, category_path, category_depth, time_unit,
      devices_json, genders_json, ages_json, spreadsheet_id, result_count, exclude_brand_products, custom_excluded_terms_json
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      profile.id,
      profile.slug,
      profile.name,
      profile.status,
      profile.startPeriod,
      profile.endPeriod,
      profile.lastCollectedPeriod ?? null,
      profile.lastSyncedAt ?? null,
      profile.syncStatus,
      profile.latestRunId ?? null,
      profile.createdAt,
      profile.updatedAt,
      profile.categoryCid,
      profile.categoryPath,
      profile.categoryDepth,
      profile.timeUnit,
      json(profile.devices),
      json(profile.genders),
      json(profile.ages),
      profile.spreadsheetId,
      profile.resultCount,
      profile.excludeBrandProducts ? 1 : 0,
      json(profile.customExcludedTerms)
    ]
  );

  return {
    ok: true as const,
    profile
  };
}

async function startTrendCollection(db: D1Database, input: TrendProfileInput) {
  const normalizedInput = normalizeTrendProfileInput(input);

  if (normalizedInput.timeUnit !== "month") {
    return {
      ok: false as const,
      code: "TIME_UNIT_NOT_SUPPORTED",
      message: "v1에서는 월간만 지원합니다."
    };
  }

  const existingProfileRow = await one<TrendProfileRow>(
    db,
    `SELECT *
     FROM trend_profiles
     WHERE category_cid = ?
       AND time_unit = 'month'
       AND devices_json = ?
       AND genders_json = ?
       AND ages_json = ?
       AND result_count = ?
       AND exclude_brand_products = ?
       AND custom_excluded_terms_json = ?
     ORDER BY updated_at DESC
     LIMIT 1`,
    [
      Number(normalizedInput.categoryCid),
      json(normalizedInput.devices),
      json(normalizedInput.genders),
      json(normalizedInput.ages),
      normalizedInput.resultCount,
      normalizedInput.excludeBrandProducts ? 1 : 0,
      json(normalizedInput.customExcludedTerms ?? [])
    ]
  );

  let profileId = existingProfileRow?.id;
  let profile = existingProfileRow ? mapProfile(existingProfileRow) : null;

  if (!profileId) {
    const created = await createTrendProfile(db, {
      ...normalizedInput
    });

    if (!created.ok) {
      return created;
    }

    profileId = created.profile.id;
    profile = created.profile;
  }

  const latestCollectiblePeriod = getLatestCollectibleTrendPeriod();
  const now = nowIso();

  if (profile && profile.endPeriod !== latestCollectiblePeriod) {
    await run(db, "UPDATE trend_profiles SET end_period = ?, updated_at = ? WHERE id = ?", [
      latestCollectiblePeriod,
      now,
      profile.id
    ]);
    profile = {
      ...profile,
      endPeriod: latestCollectiblePeriod,
      updatedAt: now
    };
  }

  const activeRun = await one<TrendCollectionRunRow>(
    db,
    `SELECT *
     FROM trend_runs
     WHERE profile_id = ?
       AND status IN ('queued', 'running')
     ORDER BY updated_at DESC
     LIMIT 1`,
    [profileId]
  );

  if (activeRun) {
    return {
      ok: true as const,
      reusedCachedResult: false,
      run: await buildRunDetail(db, mapRun(activeRun))
    };
  }

  if (profile) {
    const reusableRun = await findReusableCompletedRun(db, profile);

    if (reusableRun) {
      return {
        ok: true as const,
        reusedCachedResult: true,
        run: await buildRunDetail(db, reusableRun)
      };
    }
  }

  const started = await startBackfill(db, profileId);
  return started.ok
    ? {
        ...started,
        reusedCachedResult: false
      }
    : started;
}

async function findReusableCompletedRun(db: D1Database, profile: TrendProfile): Promise<TrendCollectionRun | null> {
  const latestCollectiblePeriod = getLatestCollectibleTrendPeriod();
  const periods = listMonthlyPeriods(profile.startPeriod, latestCollectiblePeriod);
  const completedRows = await all<{ period: string; count: number }>(
    db,
    "SELECT period, COUNT(*) as count FROM trend_snapshots WHERE profile_id = ? AND rank <= ? GROUP BY period",
    [profile.id, profile.resultCount]
  );
  const completedMap = new Map(completedRows.map((row) => [row.period, Number(row.count) >= profile.resultCount]));

  if (!periods.length || periods.some((period) => !completedMap.get(period))) {
    return null;
  }

  const reusableRunRow = await one<TrendCollectionRunRow>(
    db,
    `SELECT *
     FROM trend_runs
     WHERE profile_id = ?
       AND status = 'completed'
     ORDER BY updated_at DESC
     LIMIT 1`,
    [profile.id]
  );

  if (!reusableRunRow) {
    return null;
  }

  const existingTaskRows = await all<{ period: string }>(db, "SELECT period FROM trend_tasks WHERE run_id = ?", [reusableRunRow.id]);
  const existingPeriods = new Set(existingTaskRows.map((row) => row.period));
  const missingPeriods = periods.filter((period) => !existingPeriods.has(period));
  const now = nowIso();

  if (missingPeriods.length) {
    const inserts = missingPeriods.map((period) =>
      db
        .prepare(
          `INSERT INTO trend_tasks (
            id, run_id, profile_id, period, status, completed_pages, total_pages, retry_count,
            source, started_at, completed_at, failure_reason, failure_snippet, updated_at
          ) VALUES (?, ?, ?, ?, 'completed', ?, ?, 0, 'cache', ?, ?, NULL, NULL, ?)`
        )
        .bind(
          crypto.randomUUID(),
          reusableRunRow.id,
          profile.id,
          period,
          getTrendTotalPages(profile.resultCount),
          getTrendTotalPages(profile.resultCount),
          now,
          now,
          now
        )
    );
    await batchInChunks(db, inserts, 50);
  }

  await run(
    db,
    `UPDATE trend_runs
     SET status = 'completed',
         start_period = ?,
         end_period = ?,
         total_tasks = ?,
         completed_tasks = ?,
         failed_tasks = 0,
         total_snapshots = ?,
         cancelled_at = NULL,
         failure_reason = NULL,
         updated_at = ?
     WHERE id = ?`,
    [
      profile.startPeriod,
      latestCollectiblePeriod,
      periods.length,
      periods.length,
      periods.length * profile.resultCount,
      now,
      reusableRunRow.id
    ]
  );

  const refreshed = await one<TrendCollectionRunRow>(db, "SELECT * FROM trend_runs WHERE id = ?", [reusableRunRow.id]);
  return refreshed ? mapRun(refreshed) : null;
}

async function getTrendRun(db: D1Database, runId: string) {
  const row = await one<TrendCollectionRunRow>(db, "SELECT * FROM trend_runs WHERE id = ?", [runId]);

  if (!row) {
    return {
      ok: false as const,
      code: "TREND_RUN_NOT_FOUND",
      message: "runId에 해당하는 트렌드 수집 런이 없습니다."
    };
  }

  return {
    ok: true as const,
    run: await buildRunDetail(db, mapRun(row))
  };
}

async function cancelTrendRun(db: D1Database, runId: string) {
  const runRow = await one<TrendCollectionRunRow>(db, "SELECT * FROM trend_runs WHERE id = ?", [runId]);

  if (!runRow) {
    return {
      ok: false as const,
      code: "TREND_RUN_NOT_FOUND",
      message: "runId에 해당하는 트렌드 수집 런이 없습니다."
    };
  }

  if (!["queued", "running"].includes(runRow.status)) {
    return {
      ok: true as const,
      run: await buildRunDetail(db, mapRun(runRow))
    };
  }

  const now = nowIso();
  const partialTaskRows = await all<TrendTaskRow>(
    db,
    "SELECT * FROM trend_tasks WHERE run_id = ? AND status IN ('pending', 'running')",
    [runId]
  );
  const partialTaskIds = partialTaskRows.map((task) => task.id);

  if (partialTaskIds.length) {
    await batchInChunks(
      db,
      partialTaskIds.map((taskId) =>
        db.prepare("DELETE FROM trend_snapshots WHERE run_id = ? AND task_id = ?").bind(runId, taskId)
      ),
      50
    );
  }

  await run(
    db,
    `UPDATE trend_tasks
     SET status = 'cancelled',
         completed_pages = 0,
         completed_at = NULL,
         failure_reason = COALESCE(failure_reason, '사용자가 취합을 중지했습니다.'),
         failure_snippet = COALESCE(failure_snippet, 'cancelled by operator'),
         updated_at = ?
     WHERE run_id = ? AND status IN ('pending', 'running')`,
    [now, runId]
  );

  const cancelledTotals = await one<{ total: number; completed: number; failed: number; snapshots: number }>(
    db,
    `SELECT
       COUNT(*) as total,
       SUM(CASE WHEN status = 'completed' THEN 1 ELSE 0 END) as completed,
       SUM(CASE WHEN status = 'failed' THEN 1 ELSE 0 END) as failed,
       (SELECT COUNT(*) FROM trend_snapshots WHERE run_id = ?) as snapshots
     FROM trend_tasks
     WHERE run_id = ?`,
    [runId, runId]
  );

  await run(
    db,
    `UPDATE trend_runs
     SET status = 'cancelled',
         total_tasks = ?,
         completed_tasks = ?,
         failed_tasks = ?,
         total_snapshots = ?,
         cancelled_at = ?,
         completed_at = NULL,
         failure_reason = NULL,
         updated_at = ?
     WHERE id = ?`,
    [
      Number(cancelledTotals?.total ?? 0),
      Number(cancelledTotals?.completed ?? 0),
      Number(cancelledTotals?.failed ?? 0),
      Number(cancelledTotals?.snapshots ?? 0),
      now,
      now,
      runId
    ]
  );

  const refreshed = await one<TrendCollectionRunRow>(db, "SELECT * FROM trend_runs WHERE id = ?", [runId]);

  return {
    ok: true as const,
    run: await buildRunDetail(db, mapRun(refreshed!))
  };
}

async function deleteTrendRun(db: D1Database, runId: string) {
  const runRow = await one<TrendCollectionRunRow>(db, "SELECT * FROM trend_runs WHERE id = ?", [runId]);

  if (!runRow) {
    return {
      ok: false as const,
      code: "TREND_RUN_NOT_FOUND",
      message: "runId에 해당하는 트렌드 수집 런이 없습니다."
    };
  }

  const partialTaskRows = await all<TrendTaskRow>(
    db,
    "SELECT * FROM trend_tasks WHERE run_id = ? AND status != 'completed'",
    [runId]
  );
  const partialTaskIds = partialTaskRows.map((task) => task.id);

  if (partialTaskIds.length) {
    await batchInChunks(
      db,
      partialTaskIds.map((taskId) =>
        db.prepare("DELETE FROM trend_snapshots WHERE run_id = ? AND task_id = ?").bind(runId, taskId)
      ),
      50
    );
  }

  await run(db, "DELETE FROM trend_tasks WHERE run_id = ?", [runId]);
  await run(db, "DELETE FROM trend_runs WHERE id = ?", [runId]);
  await run(db, "UPDATE trend_profiles SET latest_run_id = NULL, updated_at = ? WHERE latest_run_id = ?", [nowIso(), runId]);

  return {
    ok: true as const,
    deletedRunId: runId
  };
}

function normalizeTrendProfileInput(input: TrendProfileInput): TrendProfileInput {
  const normalizedTerms = normalizeExcludedTerms(input.customExcludedTerms ?? []);

  return {
    ...input,
    name: input.name.trim() || input.categoryPath.trim() || "한이룸 트렌드 분석",
    devices: [...(input.devices ?? [])].sort(),
    genders: [...(input.genders ?? [])].sort(),
    ages: [...(input.ages ?? [])].sort(),
    spreadsheetId: normalizeTrendSpreadsheetId(input.spreadsheetId ?? ""),
    resultCount: normalizeTrendResultCount(input.resultCount),
    excludeBrandProducts: Boolean(input.excludeBrandProducts),
    customExcludedTerms: normalizedTerms
  };
}

async function getTrendRunSnapshotsPage(db: D1Database, runId: string, requestedPeriod: string, requestedPage: number) {
  const runRow = await one<TrendCollectionRunRow>(db, "SELECT * FROM trend_runs WHERE id = ?", [runId]);

  if (!runRow) {
    return {
      ok: false as const,
      code: "TREND_RUN_NOT_FOUND",
      message: "runId에 해당하는 트렌드 수집 런이 없습니다."
    };
  }

  const profileRow = await one<TrendProfileRow>(db, "SELECT * FROM trend_profiles WHERE id = ?", [runRow.profile_id]);

  if (!profileRow) {
    return {
      ok: false as const,
      code: "TREND_PROFILE_NOT_FOUND",
      message: "runId에 연결된 분석 조건을 찾지 못했습니다."
    };
  }

  const profile = mapProfile(profileRow);
  const brandWhere = profile.excludeBrandProducts ? "AND brand_excluded = 0" : "";

  const latestStoredPeriod =
    (await scalar<string>(
      db,
      `SELECT period FROM trend_snapshots WHERE profile_id = ? AND rank <= ? ${brandWhere} ORDER BY period DESC LIMIT 1`,
      [profile.id, profile.resultCount]
    )) ?? "";
  const period = requestedPeriod || latestStoredPeriod;

  if (!period) {
    return {
      ok: false as const,
      code: "TREND_SNAPSHOTS_NOT_READY",
      message: "아직 조회 가능한 월별 인기검색어 스냅샷이 없습니다."
    };
  }

  const totalItems = await scalar<number>(
    db,
    `SELECT COUNT(*) FROM trend_snapshots WHERE profile_id = ? AND period = ? AND rank <= ? ${brandWhere}`,
    [profile.id, period, profile.resultCount]
  );

  if (!totalItems) {
    return {
      ok: false as const,
      code: "TREND_PERIOD_NOT_FOUND",
      message: "선택한 월의 인기검색어 스냅샷을 찾지 못했습니다."
    };
  }

  const totalPages = Math.max(1, Math.ceil(totalItems / TREND_PAGE_SIZE));
  const page = Math.min(Math.max(1, requestedPage), totalPages);
  const offset = (page - 1) * TREND_PAGE_SIZE;
  const items = (
    await all<TrendSnapshotRow>(
      db,
      `SELECT * FROM trend_snapshots WHERE profile_id = ? AND period = ? AND rank <= ? ${brandWhere} ORDER BY rank ASC LIMIT ? OFFSET ?`,
      [profile.id, period, profile.resultCount, TREND_PAGE_SIZE, offset]
    )
  ).map(mapSnapshot);

  return {
    ok: true as const,
    period,
    page,
    totalPages,
    totalItems,
    items
  };
}

async function retryFailedTasks(db: D1Database, runId: string) {
  const runRow = await one<TrendCollectionRunRow>(db, "SELECT * FROM trend_runs WHERE id = ?", [runId]);

  if (!runRow) {
    return {
      ok: false as const,
      code: "TREND_RUN_NOT_FOUND",
      message: "runId에 해당하는 트렌드 수집 런이 없습니다."
    };
  }

  const now = nowIso();

  await run(
    db,
    `UPDATE trend_tasks
     SET status = 'pending',
         retry_count = retry_count + 1,
         completed_pages = 0,
         started_at = NULL,
         completed_at = NULL,
         failure_reason = NULL,
         failure_snippet = NULL,
         updated_at = ?
     WHERE run_id = ? AND status = 'failed'`,
    [now, runId]
  );

  await run(
    db,
    `UPDATE trend_runs
     SET status = 'queued', failed_tasks = 0, failure_reason = NULL, completed_at = NULL, updated_at = ?
     WHERE id = ?`,
    [now, runId]
  );

  return {
    ok: true as const,
    run: await buildRunDetail(db, mapRun((await one<TrendCollectionRunRow>(db, "SELECT * FROM trend_runs WHERE id = ?", [runId]))!))
  };
}

async function startBackfill(db: D1Database, profileId: string) {
  const profileRow = await one<TrendProfileRow>(db, "SELECT * FROM trend_profiles WHERE id = ?", [profileId]);

  if (!profileRow) {
    return {
      ok: false as const,
      code: "TREND_PROFILE_NOT_FOUND",
      message: "profileId에 해당하는 트렌드 프로필이 없습니다."
    };
  }

  let profile = mapProfile(profileRow);
  const latestCollectiblePeriod = getLatestCollectibleTrendPeriod();
  const now = nowIso();

  if (profile.endPeriod !== latestCollectiblePeriod) {
    await run(db, "UPDATE trend_profiles SET end_period = ?, updated_at = ? WHERE id = ?", [
      latestCollectiblePeriod,
      now,
      profileId
    ]);
    profile = {
      ...profile,
      endPeriod: latestCollectiblePeriod,
      updatedAt: now
    };
  }

  const periods = listMonthlyPeriods(profile.startPeriod, latestCollectiblePeriod);
  const completedRows = await all<{ period: string; count: number }>(
    db,
    "SELECT period, COUNT(*) as count FROM trend_snapshots WHERE profile_id = ? AND rank <= ? GROUP BY period",
    [profileId, profile.resultCount]
  );
  const completedMap = new Map(completedRows.map((row) => [row.period, Number(row.count) >= profile.resultCount]));
  const pendingRows = await all<{ period: string }>(
    db,
    "SELECT DISTINCT period FROM trend_tasks WHERE profile_id = ? AND status IN ('pending', 'running')",
    [profileId]
  );
  const pendingPeriods = new Set(pendingRows.map((row) => row.period));
  const targetPeriods = periods.filter((period) => !completedMap.get(period) && !pendingPeriods.has(period));
  const cachedPlans: Array<{ period: string; taskId: string; ranks: NaverKeywordRankItem[] }> = [];
  const uncachedPeriods: string[] = [];

  for (const period of targetPeriods) {
    const cachedRanks = await readCachedMonthlyRanks(db, profile, period);

    if (cachedRanks) {
      cachedPlans.push({
        period,
        taskId: crypto.randomUUID(),
        ranks: cachedRanks
      });
    } else {
      uncachedPeriods.push(period);
    }
  }

  const totalTasks = cachedPlans.length + uncachedPeriods.length;
  const completedTasks = cachedPlans.length;

  const runRecord: TrendCollectionRun = {
    id: crypto.randomUUID(),
    profileId,
    status: uncachedPeriods.length ? "queued" : "completed",
    requestedBy: DEFAULT_OPERATOR_ID,
    runType: "backfill",
    startPeriod: profile.startPeriod,
    endPeriod: latestCollectiblePeriod,
    totalTasks,
    completedTasks,
    failedTasks: 0,
    totalSnapshots: completedTasks * profile.resultCount,
    sheetUrl: undefined,
    startedAt: completedTasks > 0 ? now : undefined,
    completedAt: uncachedPeriods.length ? undefined : now,
    cancelledAt: undefined,
    failureReason: undefined,
    createdAt: now,
    updatedAt: now
  };

  await run(
    db,
    `INSERT INTO trend_runs (
      id, profile_id, status, requested_by, run_type, start_period, end_period, total_tasks,
      completed_tasks, failed_tasks, total_snapshots, sheet_url, started_at, completed_at, cancelled_at, failure_reason, created_at, updated_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      runRecord.id,
      runRecord.profileId,
      runRecord.status,
      runRecord.requestedBy,
      runRecord.runType,
      runRecord.startPeriod,
      runRecord.endPeriod,
      runRecord.totalTasks,
      runRecord.completedTasks,
      runRecord.failedTasks,
      runRecord.totalSnapshots,
      runRecord.sheetUrl ?? null,
      runRecord.startedAt ?? null,
      runRecord.completedAt ?? null,
      runRecord.cancelledAt ?? null,
      runRecord.failureReason ?? null,
      runRecord.createdAt,
      runRecord.updatedAt
    ]
  );

  if (cachedPlans.length > 0) {
    const cachedTaskStatements = cachedPlans.map((plan) =>
      db
        .prepare(
          `INSERT INTO trend_tasks (
            id, run_id, profile_id, period, status, completed_pages, total_pages, retry_count,
            source, started_at, completed_at, failure_reason, failure_snippet, updated_at
          ) VALUES (?, ?, ?, ?, 'completed', ?, ?, 0, 'cache', ?, ?, NULL, NULL, ?)`
        )
        .bind(
          plan.taskId,
          runRecord.id,
          profileId,
          plan.period,
          getTrendTotalPages(profile.resultCount),
          getTrendTotalPages(profile.resultCount),
          now,
          now,
          now
        )
    );
    await batchInChunks(db, cachedTaskStatements, 50);

    const cachedSnapshotStatements: D1PreparedStatement[] = [];
    for (const plan of cachedPlans) {
      await run(db, "DELETE FROM trend_snapshots WHERE profile_id = ? AND period = ?", [profileId, plan.period]);
      cachedSnapshotStatements.push(
        ...plan.ranks.map((rank) =>
          db
            .prepare(
              `INSERT INTO trend_snapshots (
                id, profile_id, run_id, task_id, period, rank, keyword, link_id, category_cid, category_path,
                devices_json, genders_json, ages_json, collected_at, brand_excluded
              ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
            )
            .bind(
              crypto.randomUUID(),
              profile.id,
              runRecord.id,
              plan.taskId,
              plan.period,
              rank.rank,
              rank.keyword,
              rank.linkId,
              profile.categoryCid,
              profile.categoryPath,
              json(profile.devices),
              json(profile.genders),
              json(profile.ages),
              now,
              applyBrandExclusion(rank.keyword, profile.excludeBrandProducts ? profile.customExcludedTerms : []) ? 1 : 0
            )
        )
      );
    }
    await batchInChunks(db, cachedSnapshotStatements, 50);
  }

  if (uncachedPeriods.length > 0) {
    const inserts = uncachedPeriods.map((period) =>
      db
        .prepare(
          `INSERT INTO trend_tasks (
            id, run_id, profile_id, period, status, completed_pages, total_pages, retry_count,
            source, started_at, completed_at, failure_reason, failure_snippet, updated_at
          ) VALUES (?, ?, ?, ?, 'pending', 0, ?, 0, NULL, NULL, NULL, NULL, NULL, ?)`
        )
        .bind(crypto.randomUUID(), runRecord.id, profileId, period, getTrendTotalPages(profile.resultCount), now)
    );
    await batchInChunks(db, inserts, 50);
  }

  await run(db, "UPDATE trend_profiles SET latest_run_id = ?, last_collected_period = COALESCE(?, last_collected_period), updated_at = ? WHERE id = ?", [
    runRecord.id,
    cachedPlans.length && !uncachedPeriods.length ? latestCollectiblePeriod : cachedPlans.at(-1)?.period ?? null,
    now,
    profileId
  ]);

  return {
    ok: true as const,
    run: await buildRunDetail(db, runRecord)
  };
}

async function syncProfileToSheets(env: Env, profileId: string) {
  const profileRow = await one<TrendProfileRow>(dbFor(env), "SELECT * FROM trend_profiles WHERE id = ?", [profileId]);

  if (!profileRow) {
    return {
      ok: false as const,
      code: "TREND_PROFILE_NOT_FOUND",
      message: "profileId에 해당하는 트렌드 프로필이 없습니다."
    };
  }

  const profile = mapProfile(profileRow);
  const snapshots = await all<TrendSnapshotRow>(
    dbFor(env),
    "SELECT * FROM trend_snapshots WHERE profile_id = ? ORDER BY period ASC, rank ASC",
    [profileId]
  );
  const sheetUrl = await syncProfileSheets(env, profile, snapshots.map(mapSnapshot));
  const now = nowIso();

  await run(dbFor(env), "UPDATE trend_profiles SET sync_status = 'synced', last_synced_at = ?, updated_at = ? WHERE id = ?", [
    now,
    now,
    profileId
  ]);

  return {
    ok: true as const,
    sheetUrl
  };
}

async function processQueuedRunBatch(
  env: Env,
  options: { runId?: string; maxTasks?: number; maxWallMs?: number } = {}
) {
  const maxTasks = options.maxTasks ?? PROCESS_BATCH_MAX_TASKS;
  const maxWallMs = options.maxWallMs ?? PROCESS_BATCH_MAX_WALL_MS;
  const startedAt = Date.now();
  const sessionRef: NaverSessionRef = {};
  const results: Json[] = [];

  for (let index = 0; index < maxTasks; index += 1) {
    if (Date.now() - startedAt >= maxWallMs) {
      break;
    }

    const result = await processNextQueuedRun(env, {
      runId: options.runId,
      sessionRef
    });
    results.push(result as Json);

    if (!result.processed) {
      break;
    }

    if (options.runId) {
      const runRow = await one<TrendCollectionRunRow>(dbFor(env), "SELECT * FROM trend_runs WHERE id = ?", [options.runId]);
      if (!runRow || !["queued", "running"].includes(runRow.status)) {
        break;
      }
    }
  }

  return {
    ok: true as const,
    processed: results.some((result) => Boolean((result as { processed?: boolean }).processed)),
    processedTasks: results.filter((result) => Boolean((result as { processed?: boolean }).processed)).length,
    durationMs: Date.now() - startedAt,
    results
  };
}

async function shouldKickQueuedProcessing(db: D1Database, runId?: string) {
  const processableRuns = await scalar<number>(
    db,
    runId
      ? `SELECT COUNT(*)
         FROM trend_runs tr
         WHERE tr.id = ?
           AND tr.status IN ('queued', 'running')
           AND EXISTS (SELECT 1 FROM trend_tasks tt WHERE tt.run_id = tr.id AND tt.status = 'pending')
           AND NOT EXISTS (SELECT 1 FROM trend_tasks tt WHERE tt.run_id = tr.id AND tt.status = 'running')`
      : `SELECT COUNT(*)
         FROM trend_runs tr
         WHERE tr.status IN ('queued', 'running')
           AND EXISTS (SELECT 1 FROM trend_tasks tt WHERE tt.run_id = tr.id AND tt.status = 'pending')
           AND NOT EXISTS (SELECT 1 FROM trend_tasks tt WHERE tt.run_id = tr.id AND tt.status = 'running')`,
    runId ? [runId] : []
  );

  return Number(processableRuns ?? 0) > 0;
}

async function processNextQueuedRun(
  env: Env,
  options: { runId?: string; sessionRef?: NaverSessionRef } = {}
) {
  const db = dbFor(env);
  const candidateRunRow = await one<TrendCollectionRunRow>(
    db,
    options.runId
      ? `SELECT * FROM trend_runs
         WHERE id = ?
           AND status IN ('queued', 'running')
           AND id IN (SELECT run_id FROM trend_tasks WHERE status = 'pending')
         LIMIT 1`
      : `SELECT * FROM trend_runs
         WHERE status IN ('queued', 'running')
           AND id IN (SELECT run_id FROM trend_tasks WHERE status = 'pending')
         ORDER BY updated_at DESC
         LIMIT 1`,
    options.runId ? [options.runId] : []
  );

  if (!candidateRunRow) {
    return {
      ok: true as const,
      processed: false
    };
  }

  const nextTaskRow = await one<TrendTaskRow>(
    db,
    "SELECT * FROM trend_tasks WHERE run_id = ? AND status = 'pending' ORDER BY period ASC LIMIT 1",
    [candidateRunRow.id]
  );

  if (!nextTaskRow) {
    return {
      ok: true as const,
      processed: false
    };
  }

  const profileRow = await one<TrendProfileRow>(db, "SELECT * FROM trend_profiles WHERE id = ?", [candidateRunRow.profile_id]);

  if (!profileRow) {
    const now = nowIso();
    await run(
      db,
      "UPDATE trend_tasks SET status = 'failed', failure_reason = ?, failure_snippet = ?, updated_at = ? WHERE id = ?",
      ["Trend profile is missing.", "Missing profile", now, nextTaskRow.id]
    );
    await refreshRunState(db, candidateRunRow.id);

    return {
      ok: false as const,
      processed: true,
      code: "TREND_PROFILE_NOT_FOUND",
      message: "Trend profile is missing.",
      runId: candidateRunRow.id,
      taskId: nextTaskRow.id,
      period: nextTaskRow.period
    };
  }

  const now = nowIso();
  await run(
    db,
    "UPDATE trend_runs SET status = 'running', started_at = COALESCE(started_at, ?), updated_at = ? WHERE id = ?",
    [now, now, candidateRunRow.id]
  );
  await run(
    db,
    "UPDATE trend_tasks SET status = 'running', started_at = ?, updated_at = ? WHERE id = ?",
    [now, now, nextTaskRow.id]
  );

  const profile = mapProfile(profileRow);

  try {
    const cachedRanks = await readCachedMonthlyRanks(db, profile, nextTaskRow.period);
    const source: TrendCollectionTaskSource = cachedRanks ? "cache" : "naver";

    await run(db, "UPDATE trend_tasks SET source = ?, updated_at = ? WHERE id = ?", [source, nowIso(), nextTaskRow.id]);

    if (!cachedRanks && !options.sessionRef?.jar) {
      options.sessionRef = options.sessionRef ?? {};
      options.sessionRef.jar = await bootstrapSession();
    }

    const ranks =
      cachedRanks ??
      (await collectMonthlyRanks({
        categoryCid: profile.categoryCid,
        period: nextTaskRow.period,
        devices: profile.devices,
        genders: profile.genders,
        ages: profile.ages,
        resultCount: profile.resultCount,
        sessionJar: options.sessionRef?.jar,
        onPageCollected: async (page) => {
          await run(
            db,
            "UPDATE trend_tasks SET completed_pages = ?, updated_at = ? WHERE id = ?",
            [page, nowIso(), nextTaskRow.id]
          );
        }
      }));
    const latestRunRow = await one<TrendCollectionRunRow>(db, "SELECT * FROM trend_runs WHERE id = ?", [candidateRunRow.id]);
    const latestTaskRow = await one<TrendTaskRow>(db, "SELECT * FROM trend_tasks WHERE id = ?", [nextTaskRow.id]);

    if (!latestRunRow || !latestTaskRow) {
      return {
        ok: true as const,
        processed: false
      };
    }

    if (latestRunRow.status === "cancelled" || latestTaskRow.status === "cancelled") {
      await run(
        db,
        `DELETE FROM trend_snapshots
         WHERE run_id = ? AND task_id = ?`,
        [candidateRunRow.id, nextTaskRow.id]
      );

      return {
        ok: true as const,
        processed: false,
        runId: candidateRunRow.id,
        taskId: nextTaskRow.id,
        period: nextTaskRow.period
      };
    }

    const collectedAt = nowIso();

    await run(db, "DELETE FROM trend_snapshots WHERE profile_id = ? AND period = ?", [profile.id, nextTaskRow.period]);

    const snapshotStatements = ranks.map((rank) =>
      db
        .prepare(
          `INSERT INTO trend_snapshots (
            id, profile_id, run_id, task_id, period, rank, keyword, link_id, category_cid, category_path,
            devices_json, genders_json, ages_json, collected_at
            , brand_excluded
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
        )
        .bind(
          crypto.randomUUID(),
          profile.id,
          candidateRunRow.id,
          nextTaskRow.id,
          nextTaskRow.period,
          rank.rank,
          rank.keyword,
          rank.linkId,
          profile.categoryCid,
          profile.categoryPath,
          json(profile.devices),
          json(profile.genders),
          json(profile.ages),
          collectedAt,
          applyBrandExclusion(rank.keyword, profile.excludeBrandProducts ? profile.customExcludedTerms : []) ? 1 : 0
        )
    );
    await batchInChunks(db, snapshotStatements, 50);

    await run(
      db,
      `UPDATE trend_tasks
       SET status = 'completed', completed_pages = ?, source = ?, completed_at = ?, updated_at = ?
       WHERE id = ?`,
      [getTrendTotalPages(profile.resultCount), source, collectedAt, collectedAt, nextTaskRow.id]
    );

    await run(
      db,
      "UPDATE trend_profiles SET last_collected_period = ?, updated_at = ? WHERE id = ?",
      [nextTaskRow.period, collectedAt, profile.id]
    );

    await refreshRunState(db, candidateRunRow.id);

    return {
      ok: true as const,
      processed: true,
      runId: candidateRunRow.id,
      taskId: nextTaskRow.id,
      period: nextTaskRow.period
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Naver collection failed.";
    const snippet = summarizeFailureSnippet(String(error));
    const failedAt = nowIso();

    await run(
      db,
      `UPDATE trend_tasks
       SET status = 'failed', failure_reason = ?, failure_snippet = ?, updated_at = ?
       WHERE id = ?`,
      [message, snippet, failedAt, nextTaskRow.id]
    );
    await refreshRunState(db, candidateRunRow.id);
    await run(db, "UPDATE trend_profiles SET updated_at = ? WHERE id = ?", [failedAt, profile.id]);

    return {
      ok: false as const,
      processed: true,
      code: "TREND_COLLECTION_FAILED",
      message,
      runId: candidateRunRow.id,
      taskId: nextTaskRow.id,
      period: nextTaskRow.period
    };
  }
}

async function refreshRunState(db: D1Database, runId: string) {
  const currentRunRow = await one<TrendCollectionRunRow>(db, "SELECT * FROM trend_runs WHERE id = ?", [runId]);

  if (!currentRunRow) {
    throw new Error("Trend run is missing.");
  }

  if (currentRunRow.status === "cancelled") {
    return mapRun(currentRunRow);
  }

  const totalsRow = await one<{ total: number; completed: number; failed: number; snapshots: number }>(
    db,
    `SELECT
       COUNT(*) as total,
       SUM(CASE WHEN status = 'completed' THEN 1 ELSE 0 END) as completed,
       SUM(CASE WHEN status = 'failed' THEN 1 ELSE 0 END) as failed,
       (SELECT COUNT(*) FROM trend_snapshots WHERE run_id = ?) as snapshots
     FROM trend_tasks
     WHERE run_id = ?`,
    [runId, runId]
  );
  const now = nowIso();
  const total = Number(totalsRow?.total ?? 0);
  const completed = Number(totalsRow?.completed ?? 0);
  const failed = Number(totalsRow?.failed ?? 0);
  const snapshots = Number(totalsRow?.snapshots ?? 0);

  let status: TrendCollectionRun["status"] = "running";
  let completedAt: string | null = null;
  let failureReason: string | null = null;

  if (total === 0 || completed === total) {
    status = "completed";
    completedAt = now;
  } else if (completed + failed === total && failed > 0) {
    status = "failed";
    completedAt = now;
    failureReason = `${failed}개 월 수집이 실패했습니다.`;
  }

  await run(
    db,
    `UPDATE trend_runs
     SET status = ?, total_tasks = ?, completed_tasks = ?, failed_tasks = ?, total_snapshots = ?, completed_at = ?, cancelled_at = NULL, failure_reason = ?,
         confidence_score = NULL, analysis_summary_json = NULL, analysis_cards_json = NULL, analysis_cached_at = NULL,
         updated_at = ?
     WHERE id = ?`,
    [status, total, completed, failed, snapshots, completedAt, failureReason, now, runId]
  );

  const row = await one<TrendCollectionRunRow>(db, "SELECT * FROM trend_runs WHERE id = ?", [runId]);
  return mapRun(row!);
}

async function buildRunDetail(db: D1Database, run: TrendCollectionRun): Promise<TrendRunDetail> {
  const profileRow = await one<TrendProfileRow>(db, "SELECT * FROM trend_profiles WHERE id = ?", [run.profileId]);
  const profile = mapProfile(profileRow!);
  const tasks = (
    await all<TrendTaskRow>(db, "SELECT * FROM trend_tasks WHERE run_id = ? ORDER BY period ASC", [run.id])
  ).map(mapTask);
  const profileSnapshots = (
    await all<TrendSnapshotRow>(
      db,
      "SELECT * FROM trend_snapshots WHERE profile_id = ? AND rank <= ? ORDER BY period ASC, rank ASC",
      [profile.id, profile.resultCount]
    )
  ).map(mapSnapshot);
  const visibleSnapshots = profile.excludeBrandProducts
    ? profileSnapshots.filter((snapshot) => !snapshot.brandExcluded)
    : profileSnapshots;
  const latestCompletedPeriod =
    [...new Set(tasks.filter((task) => task.status === "completed").map((task) => task.period))].sort((left, right) => right.localeCompare(left))[0] ??
    [...new Set(profileSnapshots.map((snapshot) => snapshot.period))].sort((left, right) => right.localeCompare(left))[0];
  const expectedPeriods = listMonthlyPeriods(profile.startPeriod, profile.endPeriod);
  const completedPeriodCount = new Set(profileSnapshots.map((snapshot) => snapshot.period)).size;
  const snapshotsPreview = latestCompletedPeriod
    ? visibleSnapshots.filter((snapshot) => snapshot.period === latestCompletedPeriod).slice(0, TREND_PAGE_SIZE)
    : [];
  const runningTask =
    [...tasks].find((task) => task.status === "running") ??
    [...tasks].find((task) => task.status === "pending");
  const cacheCompletedTasks = tasks.filter((task) => task.status === "completed" && task.source === "cache").length;
  const naverCompletedTasks = tasks.filter((task) => task.status === "completed" && task.source === "naver").length;
  const processingMode =
    run.status === "completed"
      ? "idle"
      : runningTask?.source === "cache"
        ? "cache"
        : runningTask?.source === "naver"
          ? "naver"
          : cacheCompletedTasks > naverCompletedTasks
            ? "cache"
            : "naver";
  const completedDurations = tasks
    .filter((task) => task.status === "completed" && task.startedAt && task.completedAt)
    .map((task) => Math.max(1, (new Date(task.completedAt!).getTime() - new Date(task.startedAt!).getTime()) / 1000));
  const averageTaskSeconds = completedDurations.length
    ? Math.round(completedDurations.reduce((sum, value) => sum + value, 0) / completedDurations.length)
    : 8;
  const remainingTasks = Math.max(0, run.totalTasks - run.completedTasks);
  const etaMinutes = run.status === "completed" || remainingTasks === 0 ? 0 : Math.max(1, Math.ceil((remainingTasks * averageTaskSeconds) / 60));
  const estimatedCompletionAt =
    etaMinutes > 0 ? new Date(Date.now() + etaMinutes * 60_000).toISOString() : run.completedAt;
  const currentPage = runningTask
    ? Math.min(
        runningTask.totalPages,
        Math.max(1, runningTask.completedPages + (runningTask.status === "running" && runningTask.completedPages < runningTask.totalPages ? 1 : 0))
      )
    : undefined;
  const analysisReady = run.status === "completed" && completedPeriodCount >= expectedPeriods.length;
  const cachedAnalysis = analysisReady ? await readCachedRunAnalysis(db, run.id, expectedPeriods.length) : null;
  const analysis =
    cachedAnalysis ??
    (analysisReady
      ? await buildAndCacheRunAnalysis(db, run.id, profile, profileSnapshots)
      : null);

  return {
    ...run,
    totalSnapshots: profileSnapshots.length,
    profile,
    tasks,
    snapshotsPreview,
    currentPeriod: runningTask?.period,
    currentPage,
    latestCompletedPeriod,
    remainingTasks,
    cacheCompletedTasks,
    naverCompletedTasks,
    processingMode: cachedAnalysis ? "reused-report" : processingMode,
    averageTaskSeconds,
    etaMinutes,
    estimatedCompletionAt,
    canCancel: run.status === "queued" || run.status === "running",
    canDelete: true,
    analysisReady,
    confidenceScore: analysis?.confidenceScore,
    analysisSummary: analysis?.summary,
    analysisCards: analysis?.cards ?? []
  };
}

async function readCachedRunAnalysis(db: D1Database, runId: string, expectedObservedMonths: number) {
  const row = await one<{
    confidence_score: number | null;
    analysis_summary_json: string | null;
    analysis_cards_json: string | null;
  }>(
    db,
    "SELECT confidence_score, analysis_summary_json, analysis_cards_json FROM trend_runs WHERE id = ?",
    [runId]
  );

  if (!row?.analysis_summary_json || !row.analysis_cards_json) {
    return null;
  }

  const summary = parseJson<TrendAnalysisSummary | null>(row.analysis_summary_json, null);
  const cards = parseJson<TrendAnalysisCard[]>(row.analysis_cards_json, []);

  if (!summary || !cards.length || summary.observedMonths !== expectedObservedMonths) {
    return null;
  }

  return {
    confidenceScore: Number(row.confidence_score ?? 0),
    summary,
    cards
  };
}

async function buildAndCacheRunAnalysis(
  db: D1Database,
  runId: string,
  profile: TrendProfile,
  snapshots: TrendKeywordSnapshot[]
) {
  const analysis = buildTrendAnalysis(profile, snapshots);
  const cachedAt = nowIso();

  await run(
    db,
    `UPDATE trend_runs
     SET confidence_score = ?,
         analysis_summary_json = ?,
         analysis_cards_json = ?,
         analysis_cached_at = ?,
         updated_at = ?
     WHERE id = ?`,
    [
      analysis.confidenceScore,
      JSON.stringify(analysis.summary),
      JSON.stringify(analysis.cards),
      cachedAt,
      cachedAt,
      runId
    ]
  );

  return analysis;
}

async function fetchCategoryChildren(cid: number) {
  const jar = await bootstrapSession();
  const payload = await requestJson<RawCategoryResponse>(jar, `/shoppingInsight/getCategory.naver?cid=${cid}`);
  return (payload.childList ?? []).map((node) => ({
    cid: node.cid,
    name: node.name,
    fullPath: node.fullPath,
    level: node.level,
    leaf: node.leaf
  }));
}

async function collectMonthlyRanks(input: {
  categoryCid: number;
  period: string;
  devices: TrendDeviceCode[];
  genders: TrendGenderCode[];
  ages: TrendAgeCode[];
  resultCount: TrendResultCount;
  sessionJar?: Map<string, string>;
  onPageCollected?: (page: number) => Promise<void>;
}) {
  const jar = input.sessionJar ?? (await bootstrapSession());
  const { startDate, endDate } = monthPeriodToDateRange(input.period);
  const pages: NaverKeywordRankPage[] = [];
  const totalPages = getTrendTotalPages(input.resultCount);

  for (let page = 1; page <= totalPages; page += 1) {
    const body = new URLSearchParams({
      cid: String(input.categoryCid),
      timeUnit: "month",
      startDate,
      endDate,
      page: String(page),
      count: String(TREND_PAGE_SIZE),
      device: serializeTrendFilter(input.devices),
      gender: serializeTrendFilter(input.genders),
      age: serializeTrendFilter(input.ages)
    });

    const payload = await requestJson<NaverKeywordRankPage>(jar, "/shoppingInsight/getCategoryKeywordRank.naver", {
      method: "POST",
      body
    });

    if (!Array.isArray(payload.ranks) || payload.ranks.length === 0) {
      throw new Error(`No ranks were returned for ${input.period} page ${page}.`);
    }

    pages.push(payload);

    if (input.onPageCollected) {
      await input.onPageCollected(page);
    }

    if (page < totalPages) {
      await sleep(140 + Math.round(Math.random() * 120));
    }
  }

  return mergeKeywordRankPages(pages, input.resultCount);
}

async function readCachedMonthlyRanks(db: D1Database, profile: TrendProfile, period: string) {
  const cachedSource = await one<{ profile_id: string }>(
    db,
    `SELECT tp.id as profile_id
     FROM trend_profiles tp
     JOIN trend_snapshots ts ON ts.profile_id = tp.id
     WHERE ts.period = ?
       AND tp.category_cid = ?
       AND tp.devices_json = ?
       AND tp.genders_json = ?
       AND tp.ages_json = ?
       AND tp.result_count = ?
       AND tp.exclude_brand_products = ?
       AND tp.custom_excluded_terms_json = ?
       AND ts.rank <= ?
       AND tp.id != ?
     GROUP BY tp.id
     HAVING COUNT(*) >= ?
     ORDER BY MAX(ts.collected_at) DESC
     LIMIT 1`,
    [
      period,
      profile.categoryCid,
      json(profile.devices),
      json(profile.genders),
      json(profile.ages),
      profile.resultCount,
      profile.excludeBrandProducts ? 1 : 0,
      json(profile.customExcludedTerms),
      profile.resultCount,
      profile.id,
      profile.resultCount
    ]
  );

  if (!cachedSource?.profile_id) {
    return null;
  }

  const rows = await all<TrendSnapshotRow>(
    db,
    `SELECT *
     FROM trend_snapshots
     WHERE profile_id = ?
       AND period = ?
       AND rank <= ?
     ORDER BY rank ASC`,
    [cachedSource.profile_id, period, profile.resultCount]
  );

  if (rows.length !== profile.resultCount) {
    return null;
  }

  return rows.map((row) => ({
    rank: Number(row.rank),
    keyword: row.keyword,
    linkId: row.link_id
  }));
}

async function bootstrapSession() {
  const jar = new Map<string, string>();
  const response = await fetch(NAVER_CATEGORY_PAGE_URL, {
    headers: {
      "User-Agent": NAVER_BROWSER_USER_AGENT,
      Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7"
    }
  });

  if (!response.ok) {
    throw new Error(`Failed to bootstrap Naver session: ${response.status}`);
  }

  storeResponseCookies(jar, response);
  return jar;
}

async function requestJson<T>(
  jar: Map<string, string>,
  pathname: string,
  init: { method?: "GET" | "POST"; body?: URLSearchParams } = {}
) {
  const response = await fetch(`${NAVER_BASE_URL}${pathname}`, {
    method: init.method ?? "GET",
    headers: {
      "User-Agent": NAVER_BROWSER_USER_AGENT,
      Referer: NAVER_CATEGORY_PAGE_URL,
      "X-Requested-With": "XMLHttpRequest",
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      Cookie: Array.from(jar.entries())
        .map(([name, value]) => `${name}=${value}`)
        .join("; ")
    },
    body: init.body?.toString()
  });

  storeResponseCookies(jar, response);
  const text = await response.text();

  if (!response.ok) {
    throw new Error(`Naver request failed with status ${response.status}. ${summarizeFailureSnippet(text)}`);
  }

  if (text.trim().startsWith("<!DOCTYPE html") || text.trim().startsWith("<html")) {
    throw new Error(`Naver returned an HTML error page. ${summarizeFailureSnippet(text)}`);
  }

  return JSON.parse(text) as T;
}

function storeResponseCookies(jar: Map<string, string>, response: Response) {
  const maybeHeaders = response.headers as Headers & {
    getAll?: (name: string) => string[];
    getSetCookie?: () => string[];
  };
  const values =
    (typeof maybeHeaders.getSetCookie === "function" ? maybeHeaders.getSetCookie() : undefined) ??
    (typeof maybeHeaders.getAll === "function" ? maybeHeaders.getAll("Set-Cookie") : undefined) ??
    splitSetCookie(response.headers.get("Set-Cookie"));

  values.forEach((headerValue) => {
    const [pair] = headerValue.split(";");
    const separatorIndex = pair.indexOf("=");
    if (separatorIndex < 1) {
      return;
    }

    jar.set(pair.slice(0, separatorIndex).trim(), pair.slice(separatorIndex + 1).trim());
  });
}

function splitSetCookie(merged: string | null) {
  if (!merged) {
    return [];
  }

  return merged.split(/,(?=[^;]+=[^;]+)/g);
}

async function syncProfileSheets(env: Env, profile: TrendProfile, snapshots: TrendKeywordSnapshot[]) {
  const accessToken = await getGoogleAccessToken(env);
  const spreadsheetId = normalizeTrendSpreadsheetId(profile.spreadsheetId);
  const tabs = buildTrendSheetTabs(profile, snapshots);
  const spreadsheet = await googleApiFetch<{ sheets?: Array<{ properties?: { title?: string } }> }>(
    accessToken,
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}`
  );
  const existingTitles = new Set(
    (spreadsheet.sheets ?? []).map((sheet) => sheet.properties?.title).filter((value): value is string => Boolean(value))
  );

  const addRequests = tabs
    .filter((tab) => !existingTitles.has(tab.title))
    .map((tab) => ({
      addSheet: {
        properties: {
          title: tab.title
        }
      }
    }));

  if (addRequests.length > 0) {
    await googleApiFetch(
      accessToken,
      `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}:batchUpdate`,
      {
        method: "POST",
        body: JSON.stringify({ requests: addRequests })
      }
    );
  }

  await googleApiFetch(
    accessToken,
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values:batchClear`,
    {
      method: "POST",
      body: JSON.stringify({
        ranges: tabs.map((tab) => `${tab.title}!A1:ZZ`)
      })
    }
  );

  for (const tab of tabs) {
    await googleApiFetch(
      accessToken,
      `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${encodeURIComponent(`${tab.title}!A1`)}?valueInputOption=RAW`,
      {
        method: "PUT",
        body: JSON.stringify({
          values: tab.rows
        })
      }
    );
  }

  return buildTrendSheetUrl(spreadsheetId);
}

async function getGoogleAccessToken(env: Env) {
  const clientEmail = stripWrappingQuotes(env.GOOGLE_SHEETS_SERVICE_ACCOUNT_EMAIL?.trim() ?? "");
  const privateKey = stripWrappingQuotes(env.GOOGLE_SHEETS_PRIVATE_KEY?.trim() ?? "").replace(/\\n/g, "\n").trim();

  if (!clientEmail || !privateKey) {
    throw new Error("GOOGLE_SHEETS_SERVICE_ACCOUNT_EMAIL 과 GOOGLE_SHEETS_PRIVATE_KEY secret이 필요합니다.");
  }

  const issuedAt = Math.floor(Date.now() / 1000);
  const header = base64UrlEncode(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const payload = base64UrlEncode(
    JSON.stringify({
      iss: clientEmail,
      scope: SHEETS_SCOPE,
      aud: "https://oauth2.googleapis.com/token",
      exp: issuedAt + 3600,
      iat: issuedAt
    })
  );
  const assertion = `${header}.${payload}.${await signJwt(`${header}.${payload}`, privateKey)}`;
  const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion
    })
  });

  if (!tokenResponse.ok) {
    throw new Error(`Google token exchange failed: ${tokenResponse.status} ${await tokenResponse.text()}`);
  }

  const tokenPayload = (await tokenResponse.json()) as { access_token: string };
  return tokenPayload.access_token;
}

function stripWrappingQuotes(value: string) {
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    return value.slice(1, -1);
  }

  return value;
}

async function googleApiFetch<T>(accessToken: string, url: string, init: RequestInit = {}) {
  const response = await fetch(url, {
    ...init,
    headers: {
      authorization: `Bearer ${accessToken}`,
      "content-type": "application/json",
      ...(init.headers ?? {})
    }
  });

  if (!response.ok) {
    throw new Error(`Google Sheets API failed: ${response.status} ${await response.text()}`);
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return (await response.json()) as T;
}

async function signJwt(input: string, privateKeyPem: string) {
  const pem = privateKeyPem
    .replace("-----BEGIN PRIVATE KEY-----", "")
    .replace("-----END PRIVATE KEY-----", "")
    .replace(/\s+/g, "");
  const keyData = Uint8Array.from(atob(pem), (character) => character.charCodeAt(0));
  const cryptoKey = await crypto.subtle.importKey(
    "pkcs8",
    keyData.buffer,
    {
      name: "RSASSA-PKCS1-v1_5",
      hash: "SHA-256"
    },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign("RSASSA-PKCS1-v1_5", cryptoKey, new TextEncoder().encode(input));
  return base64UrlEncode(signature);
}

function buildTrendSheetTabs(profile: TrendProfile, snapshots: TrendKeywordSnapshot[]) {
  const periodOrder = listMonthlyPeriods(profile.startPeriod, profile.endPeriod);
  const snapshotsByPeriod = new Map<string, Map<number, TrendKeywordSnapshot>>();

  snapshots.forEach((snapshot) => {
    if (!snapshotsByPeriod.has(snapshot.period)) {
      snapshotsByPeriod.set(snapshot.period, new Map());
    }

    snapshotsByPeriod.get(snapshot.period)!.set(snapshot.rank, snapshot);
  });

  const metaRows = [
    ["field", "value"],
    ["profile_id", profile.id],
    ["name", profile.name],
    ["category_path", profile.categoryPath],
    ["category_cid", String(profile.categoryCid)],
    ["time_unit", profile.timeUnit],
    ["devices", profile.devices.join(",") || "all"],
    ["genders", profile.genders.join(",") || "all"],
    ["ages", profile.ages.join(",") || "all"],
    ["result_count", String(profile.resultCount)],
    ["exclude_brand_products", profile.excludeBrandProducts ? "yes" : "no"],
    ["custom_excluded_terms", profile.customExcludedTerms.join(",")],
    ["start_period", profile.startPeriod],
    ["end_period", profile.endPeriod],
    ["last_collected_period", profile.lastCollectedPeriod ?? ""],
    ["last_synced_at", profile.lastSyncedAt ?? ""],
    ["sheet_url", buildTrendSheetUrl(profile.spreadsheetId)]
  ];

  const rawRows = [
    ["period", "rank", "keyword", "link_id", "category_path", "device", "gender", "age", "collected_at"],
    ...snapshots
      .slice()
      .sort((left, right) => left.period.localeCompare(right.period) || left.rank - right.rank)
      .map((snapshot) => [
        snapshot.period,
        String(snapshot.rank),
        snapshot.keyword,
        snapshot.linkId,
        snapshot.categoryPath,
        snapshot.devices.join(","),
        snapshot.genders.join(","),
        snapshot.ages.join(","),
        snapshot.collectedAt
      ])
  ];

  const matrixRows = [
    ["rank", ...periodOrder],
    ...Array.from({ length: profile.resultCount }, (_, index) => {
      const rank = index + 1;

      return [String(rank), ...periodOrder.map((period) => snapshotsByPeriod.get(period)?.get(rank)?.keyword ?? "")];
    })
  ];

  return [
    { title: sanitizeSheetTabName(`meta_${profile.slug}`), rows: metaRows },
    { title: sanitizeSheetTabName(`raw_${profile.slug}`), rows: rawRows },
    { title: sanitizeSheetTabName(`matrix_${profile.slug}`), rows: matrixRows }
  ];
}

function monthPeriodToDateRange(period: string) {
  const [year, month] = period.split("-").map((value) => Number(value));
  const start = new Date(Date.UTC(year, month - 1, 1));
  const end = new Date(Date.UTC(year, month, 0));

  return {
    startDate: start.toISOString().slice(0, 10),
    endDate: end.toISOString().slice(0, 10)
  };
}

function mergeKeywordRankPages(pages: NaverKeywordRankPage[], expectedCount: TrendResultCount) {
  const merged = pages.flatMap((page) => page.ranks).sort((left, right) => left.rank - right.rank);

  if (merged.length !== expectedCount) {
    throw new Error(`Expected ${expectedCount} keywords but received ${merged.length}.`);
  }

  const uniqueRanks = new Set(merged.map((item) => item.rank));
  if (uniqueRanks.size !== expectedCount) {
    throw new Error("Duplicate ranks detected while merging keyword pages.");
  }

  if (merged[0]?.rank !== 1 || merged[merged.length - 1]?.rank !== expectedCount) {
    throw new Error("Rank range is incomplete.");
  }

  return merged;
}

function sanitizeSheetTabName(value: string) {
  return value.replace(/[\\/?*\[\]:]/g, "-").trim().slice(0, 90) || "sheet";
}

function slugifyTrendName(value: string) {
  const compact = value
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^0-9a-z\uac00-\ud7a3-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

  return compact || `trend-${Date.now()}`;
}

function nowIso() {
  return new Date().toISOString();
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function summarizeFailureSnippet(value: string) {
  return value.replace(/\s+/g, " ").trim().slice(0, 220);
}

function base64UrlEncode(value: string | ArrayBuffer) {
  const bytes = typeof value === "string" ? new TextEncoder().encode(value) : new Uint8Array(value);
  let binary = "";
  for (const byte of bytes) {
    binary += String.fromCharCode(byte);
  }
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function json(value: unknown) {
  return JSON.stringify(value);
}

function mapProfile(row: TrendProfileRow): TrendProfile {
  return {
    id: row.id,
    slug: row.slug,
    status: row.status as TrendProfile["status"],
    startPeriod: row.start_period,
    endPeriod: row.end_period,
    lastCollectedPeriod: row.last_collected_period ?? undefined,
    lastSyncedAt: row.last_synced_at ?? undefined,
    syncStatus: row.sync_status as TrendProfile["syncStatus"],
    latestRunId: row.latest_run_id ?? undefined,
    resultCount: normalizeTrendResultCount(Number(row.result_count ?? TREND_DEFAULT_RESULT_COUNT)),
    excludeBrandProducts: Boolean(Number(row.exclude_brand_products ?? 0)),
    customExcludedTerms: parseJson<string[]>(row.custom_excluded_terms_json, []),
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    name: row.name,
    categoryCid: Number(row.category_cid),
    categoryPath: row.category_path,
    categoryDepth: Number(row.category_depth),
    timeUnit: row.time_unit as TrendProfile["timeUnit"],
    devices: parseJson<TrendDeviceCode[]>(row.devices_json, []),
    genders: parseJson<TrendGenderCode[]>(row.genders_json, []),
    ages: parseJson<TrendAgeCode[]>(row.ages_json, []),
    spreadsheetId: row.spreadsheet_id
  };
}

function mapRun(row: TrendCollectionRunRow): TrendCollectionRun {
  return {
    id: row.id,
    profileId: row.profile_id,
    status: row.status as TrendCollectionRun["status"],
    requestedBy: row.requested_by,
    runType: row.run_type as TrendCollectionRun["runType"],
    startPeriod: row.start_period,
    endPeriod: row.end_period,
    totalTasks: Number(row.total_tasks),
    completedTasks: Number(row.completed_tasks),
    failedTasks: Number(row.failed_tasks),
    totalSnapshots: Number(row.total_snapshots),
    sheetUrl: row.sheet_url ?? undefined,
    startedAt: row.started_at ?? undefined,
    completedAt: row.completed_at ?? undefined,
    cancelledAt: row.cancelled_at ?? undefined,
    failureReason: row.failure_reason ?? undefined,
    createdAt: row.created_at,
    updatedAt: row.updated_at
  };
}

function mapTask(row: TrendTaskRow): TrendCollectionTask {
  return {
    id: row.id,
    runId: row.run_id,
    profileId: row.profile_id,
    period: row.period,
    status: row.status as TrendCollectionTask["status"],
    completedPages: Number(row.completed_pages),
    totalPages: Number(row.total_pages),
    retryCount: Number(row.retry_count),
    source: row.source === "cache" || row.source === "naver" ? row.source : undefined,
    startedAt: row.started_at ?? undefined,
    completedAt: row.completed_at ?? undefined,
    failureReason: row.failure_reason ?? undefined,
    failureSnippet: row.failure_snippet ?? undefined,
    updatedAt: row.updated_at
  };
}

function mapSnapshot(row: TrendSnapshotRow): TrendKeywordSnapshot {
  return {
    id: row.id,
    profileId: row.profile_id,
    runId: row.run_id,
    taskId: row.task_id,
    period: row.period,
    rank: Number(row.rank),
    keyword: row.keyword,
    linkId: row.link_id,
    categoryCid: Number(row.category_cid),
    categoryPath: row.category_path,
    devices: parseJson<TrendDeviceCode[]>(row.devices_json, []),
    genders: parseJson<TrendGenderCode[]>(row.genders_json, []),
    ages: parseJson<TrendAgeCode[]>(row.ages_json, []),
    brandExcluded: Boolean(Number(row.brand_excluded ?? 0)),
    collectedAt: row.collected_at
  };
}

function parseJson<T>(value: string | null, fallback: T): T {
  try {
    return value ? (JSON.parse(value) as T) : fallback;
  } catch {
    return fallback;
  }
}

async function run(db: D1Database, sql: string, params: unknown[] = []) {
  return db.prepare(sql).bind(...params).run();
}

async function one<T>(db: D1Database, sql: string, params: unknown[] = []) {
  const result = await db.prepare(sql).bind(...params).first<T>();
  return result ?? null;
}

async function all<T>(db: D1Database, sql: string, params: unknown[] = []) {
  const result = await db.prepare(sql).bind(...params).all<T>();
  return (result.results ?? []) as T[];
}

async function scalar<T>(db: D1Database, sql: string, params: unknown[]) {
  const row = await one<Record<string, T>>(db, sql, params);
  return row ? Object.values(row)[0] : null;
}

async function batchInChunks(db: D1Database, statements: D1PreparedStatement[], chunkSize: number) {
  for (let index = 0; index < statements.length; index += chunkSize) {
    await db.batch(statements.slice(index, index + chunkSize));
  }
}

function dbFor(env: Env) {
  return env.DB;
}

async function ensureSchema(db: D1Database) {
  if (!schemaReadyPromise) {
    schemaReadyPromise = applySchemaChanges(db).catch((error) => {
      schemaReadyPromise = null;
      throw error;
    });
  }

  return schemaReadyPromise;
}

async function applySchemaChanges(db: D1Database) {
  const profileColumns = new Set(
    (await all<{ name: string }>(db, "PRAGMA table_info(trend_profiles)")).map((column) => column.name)
  );

  if (!profileColumns.has("result_count")) {
    await run(db, "ALTER TABLE trend_profiles ADD COLUMN result_count INTEGER NOT NULL DEFAULT 20");
  }

  if (!profileColumns.has("exclude_brand_products")) {
    await run(db, "ALTER TABLE trend_profiles ADD COLUMN exclude_brand_products INTEGER NOT NULL DEFAULT 0");
  }

  if (!profileColumns.has("custom_excluded_terms_json")) {
    await run(db, "ALTER TABLE trend_profiles ADD COLUMN custom_excluded_terms_json TEXT NOT NULL DEFAULT '[]'");
  }

  const snapshotColumns = new Set(
    (await all<{ name: string }>(db, "PRAGMA table_info(trend_snapshots)")).map((column) => column.name)
  );

  if (!snapshotColumns.has("brand_excluded")) {
    await run(db, "ALTER TABLE trend_snapshots ADD COLUMN brand_excluded INTEGER NOT NULL DEFAULT 0");
  }

  const runColumns = new Set((await all<{ name: string }>(db, "PRAGMA table_info(trend_runs)")).map((column) => column.name));

  if (!runColumns.has("cancelled_at")) {
    await run(db, "ALTER TABLE trend_runs ADD COLUMN cancelled_at TEXT");
  }

  if (!runColumns.has("confidence_score")) {
    await run(db, "ALTER TABLE trend_runs ADD COLUMN confidence_score REAL");
  }

  if (!runColumns.has("analysis_summary_json")) {
    await run(db, "ALTER TABLE trend_runs ADD COLUMN analysis_summary_json TEXT");
  }

  if (!runColumns.has("analysis_cards_json")) {
    await run(db, "ALTER TABLE trend_runs ADD COLUMN analysis_cards_json TEXT");
  }

  if (!runColumns.has("analysis_cached_at")) {
    await run(db, "ALTER TABLE trend_runs ADD COLUMN analysis_cached_at TEXT");
  }

  const taskColumns = new Set((await all<{ name: string }>(db, "PRAGMA table_info(trend_tasks)")).map((column) => column.name));

  if (!taskColumns.has("source")) {
    await run(db, "ALTER TABLE trend_tasks ADD COLUMN source TEXT");
  }
}

interface TrendProfileRow {
  id: string;
  slug: string;
  name: string;
  status: string;
  start_period: string;
  end_period: string;
  last_collected_period: string | null;
  last_synced_at: string | null;
  sync_status: string;
  latest_run_id: string | null;
  created_at: string;
  updated_at: string;
  category_cid: number;
  category_path: string;
  category_depth: number;
  time_unit: string;
  devices_json: string;
  genders_json: string;
  ages_json: string;
  spreadsheet_id: string;
  result_count?: number;
  exclude_brand_products?: number;
  custom_excluded_terms_json?: string;
}

interface TrendCollectionRunRow {
  id: string;
  profile_id: string;
  status: string;
  requested_by: string;
  run_type: string;
  start_period: string;
  end_period: string;
  total_tasks: number;
  completed_tasks: number;
  failed_tasks: number;
  total_snapshots: number;
  sheet_url: string | null;
  started_at: string | null;
  completed_at: string | null;
  cancelled_at: string | null;
  confidence_score?: number | null;
  analysis_summary_json?: string | null;
  analysis_cards_json?: string | null;
  analysis_cached_at?: string | null;
  failure_reason: string | null;
  created_at: string;
  updated_at: string;
}

interface TrendTaskRow {
  id: string;
  run_id: string;
  profile_id: string;
  period: string;
  status: string;
  completed_pages: number;
  total_pages: number;
  retry_count: number;
  source?: string | null;
  started_at: string | null;
  completed_at: string | null;
  failure_reason: string | null;
  failure_snippet: string | null;
  updated_at: string;
}

interface TrendSnapshotRow {
  id: string;
  profile_id: string;
  run_id: string;
  task_id: string;
  period: string;
  rank: number;
  keyword: string;
  link_id: string;
  category_cid: number;
  category_path: string;
  devices_json: string;
  genders_json: string;
  ages_json: string;
  collected_at: string;
  brand_excluded?: number;
}
