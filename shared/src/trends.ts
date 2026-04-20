export type TrendTimeUnit = "date" | "week" | "month";
export type TrendDeviceCode = "pc" | "mo";
export type TrendGenderCode = "f" | "m";
export type TrendAgeCode = "10" | "20" | "30" | "40" | "50" | "60";
export type TrendResultCount = 20 | 40;

export type TrendProfileStatus = "active" | "paused";
export type TrendCollectionRunStatus = "queued" | "running" | "completed" | "failed" | "cancelled";
export type TrendCollectionTaskStatus = "pending" | "running" | "completed" | "failed" | "cancelled";
export type TrendCollectionTaskSource = "cache" | "naver";
export type TrendSyncStatus = "idle" | "syncing" | "synced" | "failed";

export interface TrendCategoryNode {
  cid: number;
  name: string;
  fullPath: string;
  level: number;
  leaf: boolean;
}

export interface TrendProfileInput {
  name: string;
  categoryCid: number;
  categoryPath: string;
  categoryDepth: number;
  timeUnit: TrendTimeUnit;
  devices: TrendDeviceCode[];
  genders: TrendGenderCode[];
  ages: TrendAgeCode[];
  spreadsheetId: string;
  resultCount?: TrendResultCount;
  excludeBrandProducts?: boolean;
  customExcludedTerms?: string[];
}

export interface TrendProfile extends TrendProfileInput {
  id: string;
  slug: string;
  status: TrendProfileStatus;
  startPeriod: string;
  endPeriod: string;
  lastCollectedPeriod?: string;
  lastSyncedAt?: string;
  syncStatus: TrendSyncStatus;
  latestRunId?: string;
  resultCount: TrendResultCount;
  excludeBrandProducts: boolean;
  customExcludedTerms: string[];
  createdAt: string;
  updatedAt: string;
}

export interface TrendCollectionTask {
  id: string;
  runId: string;
  profileId: string;
  period: string;
  status: TrendCollectionTaskStatus;
  completedPages: number;
  totalPages: number;
  retryCount: number;
  source?: TrendCollectionTaskSource;
  startedAt?: string;
  completedAt?: string;
  nextAttemptAt?: string;
  failureReason?: string;
  failureSnippet?: string;
  updatedAt: string;
}

export interface TrendCollectionRun {
  id: string;
  profileId: string;
  status: TrendCollectionRunStatus;
  requestedBy: string;
  runType: "backfill";
  startPeriod: string;
  endPeriod: string;
  totalTasks: number;
  completedTasks: number;
  failedTasks: number;
  totalSnapshots: number;
  sheetUrl?: string;
  startedAt?: string;
  completedAt?: string;
  cancelledAt?: string;
  failureReason?: string;
  createdAt: string;
  updatedAt: string;
}

export interface TrendKeywordSnapshot {
  id: string;
  profileId: string;
  runId: string;
  taskId: string;
  period: string;
  rank: number;
  keyword: string;
  linkId: string;
  categoryCid: number;
  categoryPath: string;
  devices: TrendDeviceCode[];
  genders: TrendGenderCode[];
  ages: TrendAgeCode[];
  brandExcluded?: boolean;
  collectedAt: string;
}

export type TrendAnalysisCardKind =
  | "steady"
  | "seasonal"
  | "monthly"
  | "event"
  | "caution"
  | "recent";

export interface TrendAnalysisSeriesPoint {
  period: string;
  value: number;
}

export interface TrendAnalysisKeyword {
  keyword: string;
  confidence: number;
  confidenceLabel: "high" | "medium" | "low";
  rationale: string;
  latestScore: number;
  delta: number;
  momentum: number;
  seasonalIndex: number;
  appearanceCount: number;
  recommendedPeriods: string[];
  recommendedMonths: string[];
  cautionMonths: string[];
  sparkline: TrendAnalysisSeriesPoint[];
}

export interface TrendAnalysisCard {
  kind: TrendAnalysisCardKind;
  title: string;
  description: string;
  items: TrendAnalysisKeyword[];
}

export interface TrendAnalysisOverviewLine {
  keyword: string;
  confidence: number;
  points: TrendAnalysisSeriesPoint[];
}

export interface TrendMonthlyPreparationBucket {
  month: string;
  label: string;
  seasonLabel: string;
  items: TrendAnalysisKeyword[];
}

export interface TrendAnalysisHeroMetric {
  id: string;
  label: string;
  keyword: string;
  confidence: number;
  confidenceLabel: "high" | "medium" | "low";
  rationale: string;
  monthLabel?: string;
  sparkline: TrendAnalysisSeriesPoint[];
}

export interface TrendAnalysisHeatmapCell {
  key: string;
  label: string;
  value: number;
}

export interface TrendAnalysisHeatmapRow {
  keyword: string;
  confidence: number;
  confidenceLabel: "high" | "medium" | "low";
  rationale: string;
  seasonRationale: string;
  timelineRationale: string;
  recommendedMonths: string[];
  cautionMonths: string[];
  periodCells: TrendAnalysisHeatmapCell[];
  seasonCells: TrendAnalysisHeatmapCell[];
  timelineStats: {
    appearanceCount: number;
    peakWindowLabel: string;
    recentDelta: number;
  };
}

export interface TrendMonthlyExplorer {
  month: string;
  label: string;
  seasonLabel: string;
  monthConfidence: number;
  recommendedKeywords: TrendAnalysisKeyword[];
  cautionKeywords: TrendAnalysisKeyword[];
  historicalMonthScores: TrendAnalysisSeriesPoint[];
}

export interface TrendKeywordDrilldownSeries {
  keyword: string;
  confidence: number;
  confidenceLabel: "high" | "medium" | "low";
  rationale: string;
  observationMonths: number;
  recentTrendValue: number;
  seasonalityScore: number;
  seasonalityScoreLabel: "high" | "medium" | "low";
  recentRetentionValue: number;
  recentTrendExplanation: string;
  seasonalityExplanation: string;
  recentRetentionExplanation: string;
  recommendedMonths: string[];
  cautionMonths: string[];
  points: TrendAnalysisSeriesPoint[];
  recentPoints: TrendAnalysisSeriesPoint[];
  seasonalityPoints: TrendAnalysisSeriesPoint[];
}

export interface TrendAnalysisSummary {
  resultCount: TrendResultCount;
  includedKeywordCount: number;
  excludedKeywordCount: number;
  observedMonths: number;
  overviewSeries: TrendAnalysisOverviewLine[];
  monthlyPreparation: TrendMonthlyPreparationBucket[];
  highlights: string[];
  heroMetrics: TrendAnalysisHeroMetric[];
  seasonalityHeatmap: TrendAnalysisHeatmapRow[];
  monthlyPlanner: TrendMonthlyExplorer[];
  cautionByMonth: TrendMonthlyPreparationBucket[];
  keywordDrilldownSeries: TrendKeywordDrilldownSeries[];
}

export interface TrendRunDetail extends TrendCollectionRun {
  profile: TrendProfile;
  tasks: TrendCollectionTask[];
  snapshotsPreview: TrendKeywordSnapshot[];
  currentPeriod?: string;
  currentPage?: number;
  latestCompletedPeriod?: string;
  remainingTasks: number;
  cacheCompletedTasks?: number;
  naverCompletedTasks?: number;
  processingMode?: "idle" | "cache" | "naver" | "reused-report";
  averageTaskSeconds?: number;
  etaMinutes?: number;
  estimatedCompletionAt?: string;
  canCancel: boolean;
  canDelete: boolean;
  analysisReady: boolean;
  confidenceScore?: number;
  analysisSummary?: TrendAnalysisSummary;
  analysisCards: TrendAnalysisCard[];
}

export interface TrendAdminMetric {
  id: string;
  label: string;
  value: string;
  hint: string;
  tone: "stable" | "attention" | "progress";
}

export interface TrendAdminBoard {
  generatedAt: string;
  metrics: TrendAdminMetric[];
  profiles: TrendProfile[];
  runs: TrendRunDetail[];
}

export interface TrendSheetTabPayload {
  title: string;
  rows: string[][];
}

export const TREND_MONTHLY_START_PERIOD = "2021-01";
export const TREND_TIMEZONE = "Asia/Seoul";
export const TREND_DEFAULT_RESULT_COUNT: TrendResultCount = 20;
export const TREND_RESULT_COUNT_OPTIONS: TrendResultCount[] = [20, 40];
export const TREND_MAX_RANK = 40;
export const TREND_PAGE_SIZE = 20;
export const TREND_TOTAL_PAGES = Math.ceil(TREND_MAX_RANK / TREND_PAGE_SIZE);
export const TREND_DEVICE_OPTIONS: TrendDeviceCode[] = ["pc", "mo"];
export const TREND_GENDER_OPTIONS: TrendGenderCode[] = ["f", "m"];
export const TREND_AGE_OPTIONS: TrendAgeCode[] = ["10", "20", "30", "40", "50", "60"];

export function getLatestCollectibleTrendPeriod(date = new Date(), timeZone = TREND_TIMEZONE) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit"
  }).formatToParts(date);
  const year = Number(parts.find((part) => part.type === "year")?.value ?? "1970");
  const month = Number(parts.find((part) => part.type === "month")?.value ?? "01");
  let targetYear = year;
  let targetMonth = month - 1;

  if (targetMonth === 0) {
    targetYear -= 1;
    targetMonth = 12;
  }

  return `${targetYear}-${String(targetMonth).padStart(2, "0")}`;
}

export const TREND_MONTHLY_END_PERIOD = getLatestCollectibleTrendPeriod();

export function normalizeTrendResultCount(value?: number): TrendResultCount {
  return value === 40 ? 40 : 20;
}

export function getTrendTotalPages(resultCount: TrendResultCount = TREND_DEFAULT_RESULT_COUNT) {
  return Math.max(1, Math.ceil(resultCount / TREND_PAGE_SIZE));
}

export function normalizeExcludedTerms(values: string[] = []) {
  return Array.from(
    new Set(
      values
        .map((value) => value.trim())
        .filter(Boolean)
        .map((value) => value.toLowerCase())
    )
  ).sort((left, right) => left.localeCompare(right, "ko"));
}

export function listMonthlyPeriods(startPeriod = TREND_MONTHLY_START_PERIOD, endPeriod = getLatestCollectibleTrendPeriod()) {
  const periods: string[] = [];
  const [startYear, startMonth] = startPeriod.split("-").map((value) => Number(value));
  const [endYear, endMonth] = endPeriod.split("-").map((value) => Number(value));

  let year = startYear;
  let month = startMonth;

  while (year < endYear || (year === endYear && month <= endMonth)) {
    periods.push(`${year}-${String(month).padStart(2, "0")}`);
    month += 1;

    if (month > 12) {
      month = 1;
      year += 1;
    }
  }

  return periods;
}

export function serializeTrendFilter<T extends string>(values: T[]) {
  return values.join(",");
}

export function formatTrendMatrixPeriod(period: string) {
  return period;
}

export function normalizeTrendSpreadsheetId(spreadsheetId: string) {
  const trimmed = spreadsheetId.trim();
  if (!trimmed) {
    return "";
  }

  const pathMatch = trimmed.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
  if (pathMatch?.[1]) {
    return pathMatch[1];
  }

  const queryMatch = trimmed.match(/[?&]id=([a-zA-Z0-9-_]+)/);
  if (queryMatch?.[1]) {
    return queryMatch[1];
  }

  return trimmed;
}

export function buildTrendSheetUrl(spreadsheetId: string) {
  return `https://docs.google.com/spreadsheets/d/${normalizeTrendSpreadsheetId(spreadsheetId)}`;
}
