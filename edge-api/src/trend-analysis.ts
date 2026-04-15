import {
  type TrendAnalysisHeatmapCell,
  type TrendAnalysisHeatmapRow,
  listMonthlyPeriods,
  type TrendAnalysisCard,
  type TrendAnalysisCardKind,
  type TrendAnalysisHeroMetric,
  type TrendAnalysisKeyword,
  type TrendAnalysisOverviewLine,
  type TrendAnalysisSeriesPoint,
  type TrendAnalysisSummary,
  type TrendKeywordDrilldownSeries,
  type TrendKeywordSnapshot,
  type TrendMonthlyExplorer,
  type TrendMonthlyPreparationBucket,
  type TrendProfile
} from "../../shared/src/index";

const DEFAULT_BRAND_TERMS = [
  "나이키",
  "아디다스",
  "뉴발란스",
  "유니클로",
  "자라",
  "폴로",
  "샤넬",
  "디올",
  "구찌",
  "프라다",
  "루이비통",
  "에르메스",
  "올리비아로렌",
  "써스데이아일랜드",
  "에고이스트",
  "모조에스핀",
  "듀엘",
  "온앤온",
  "시슬리",
  "리스트",
  "톰보이",
  "지고트",
  "미샤",
  "헤라",
  "설화수",
  "아이오페",
  "이니스프리",
  "에스티로더",
  "랑콤",
  "키엘",
  "닥터지",
  "메디힐",
  "토리든",
  "에스트라",
  "라네즈",
  "스파오",
  "탑텐",
  "무신사",
  "코스",
  "젝시믹스",
  "안다르",
  "오프화이트"
];

const EVENT_LABELS: Record<string, string> = {
  "01": "신년/겨울 준비",
  "02": "신학기 준비",
  "03": "봄 전환",
  "04": "봄 피크",
  "05": "가정의 달",
  "06": "초여름/휴가 준비",
  "07": "여름 휴가",
  "08": "늦여름/가을 준비",
  "09": "가을 전환",
  "10": "가을 피크",
  "11": "연말/블랙프라이데이",
  "12": "연말/겨울 피크"
};

type KeywordMetric = {
  keyword: string;
  series: number[];
  sparkline: TrendAnalysisSeriesPoint[];
  appearanceCount: number;
  overallAverage: number;
  recentAverage: number;
  baselineAverage: number;
  recentYearAverage: number;
  historicalAverage: number;
  latestScore: number;
  delta: number;
  momentum: number;
  persistence: number;
  recentPresence: number;
  seasonalIndex: number;
  seasonalityScore: number;
  repeatability: number;
  volatility: number;
  stability: number;
  confidence: number;
  confidenceLabel: "high" | "medium" | "low";
  peakMonths: string[];
  weakMonths: string[];
  peakMonthAverages: Array<{ month: string; average: number }>;
  seasonalMonthlyAverage: Record<string, number>;
  steadyScore: number;
  seasonalScore: number;
  cautionScore: number;
  recentChangeScore: number;
};

type MonthlyTarget = {
  month: string;
  label: string;
  seasonLabel: string;
  items: KeywordMetric[];
};

export function buildTrendAnalysis(profile: TrendProfile, snapshots: TrendKeywordSnapshot[]) {
  const latestPeriod = latestSnapshotPeriod(snapshots);
  const observedPeriods = latestPeriod ? listMonthlyPeriods(profile.startPeriod, latestPeriod) : [];
  const normalizedSnapshots = snapshots
    .filter((snapshot) => snapshot.rank <= profile.resultCount)
    .sort((left, right) => left.period.localeCompare(right.period) || left.rank - right.rank);
  const visibleSnapshots = normalizedSnapshots.filter((snapshot) => !profile.excludeBrandProducts || !snapshot.brandExcluded);
  const metrics = buildKeywordMetrics(profile, observedPeriods, visibleSnapshots);
  const monthlyPreparation = buildMonthlyPreparation(metrics);
  const cautionByMonth = buildMonthlyCaution(metrics);
  const overviewSeries = buildOverviewSeries(metrics);
  const seasonalityHeatmap = buildSeasonalityHeatmap(metrics);
  const monthlyPlanner = buildMonthlyPlanner(observedPeriods, metrics, monthlyPreparation, cautionByMonth);
  const includedKeywordCount = new Set(visibleSnapshots.map((snapshot) => snapshot.keyword)).size;
  const excludedKeywordCount = new Set(
    normalizedSnapshots.filter((snapshot) => snapshot.brandExcluded).map((snapshot) => snapshot.keyword)
  ).size;
  const nextPeriods = buildUpcomingPeriods(latestPeriod, 3);
  const recentPeriods = buildRecentPeriods(latestPeriod, 6);

  const cards: TrendAnalysisCard[] = [
    buildCard(
      "steady",
      "꾸준히 스테디하게 판매하기 좋은 키워드",
      "5년 구간에서 반복 등장 빈도와 안정성을 함께 고려해 오래 가져가기 좋은 키워드를 추렸습니다.",
      metrics
        .filter((metric) => metric.appearanceCount >= 6 && metric.recentPresence > 0.33)
        .sort((left, right) => right.steadyScore - left.steadyScore || right.confidence - left.confidence)
    ),
    buildCard(
      "seasonal",
      "계절 반복 키워드",
      "같은 시즌에 여러 해 반복해서 강세를 보인 키워드를 찾았습니다.",
      metrics
        .filter((metric) => metric.seasonalIndex >= 1.25 && metric.repeatability >= 0.45)
        .sort((left, right) => right.seasonalScore - left.seasonalScore || right.confidence - left.confidence)
    ),
    buildCard(
      "monthly",
      "월별 준비 키워드",
      "특정 월 직전 1~2개월부터 힘을 받는 패턴이 있는 키워드를 월별 준비 관점으로 정리했습니다.",
      flattenMonthlyTargets(monthlyPreparation)
    ),
    buildCard(
      "event",
      "시즌/이벤트 준비 키워드",
      "다가오는 이벤트 달과 잘 맞는 키워드를 뽑아 다음 시즌 준비 힌트로 보여줍니다.",
      buildEventMetrics(monthlyPreparation, nextPeriods),
      nextPeriods
    ),
    buildCard(
      "caution",
      "조심해야 할 키워드",
      "최근 2년 기준 하향이 이어지거나 변동성이 커서 보수적으로 봐야 하는 키워드입니다.",
      metrics
        .filter((metric) => metric.cautionScore >= 46)
        .sort((left, right) => right.cautionScore - left.cautionScore || left.delta - right.delta)
    ),
    buildCard(
      "recent",
      "최근 변화 키워드",
      "최근 6~12개월 변화량을 참고용으로만 보여줍니다. 메인 판단보다는 보조 시그널입니다.",
      metrics
        .filter((metric) => Math.abs(metric.delta) >= 0.7 || Math.abs(metric.momentum) >= 0.5)
        .sort((left, right) => right.recentChangeScore - left.recentChangeScore || right.confidence - left.confidence),
      recentPeriods
    )
  ];

  const heroMetrics = buildHeroMetrics(cards, monthlyPreparation, cautionByMonth, nextPeriods);
  const keywordDrilldownSeries = buildKeywordDrilldownSeries(
    metrics,
    Array.from(
      new Set([
        ...seasonalityHeatmap.map((row) => row.keyword),
        ...cards.flatMap((card) => card.items.map((item) => item.keyword)),
        ...heroMetrics.map((metric) => metric.keyword)
      ])
    )
  );

  const confidenceScore = metrics.length
    ? Math.round(metrics.reduce((sum, metric) => sum + metric.confidence, 0) / metrics.length)
    : 0;

  const summary: TrendAnalysisSummary = {
    resultCount: profile.resultCount,
    includedKeywordCount,
    excludedKeywordCount,
    observedMonths: observedPeriods.length,
    overviewSeries,
    monthlyPreparation,
    cautionByMonth,
    highlights: buildHighlights({
      cards,
      monthlyPreparation,
      cautionByMonth,
      confidenceScore,
      includedKeywordCount,
      excludedKeywordCount,
      nextPeriods
    }),
    heroMetrics,
    seasonalityHeatmap,
    monthlyPlanner,
    keywordDrilldownSeries
  };

  return {
    summary,
    cards,
    confidenceScore
  };
}

export function applyBrandExclusion(keyword: string, customTerms: string[] = []) {
  const normalizedKeyword = normalizeTerm(keyword);

  if (!normalizedKeyword) {
    return false;
  }

  const excludedTerms = [...DEFAULT_BRAND_TERMS, ...customTerms]
    .map((term) => normalizeTerm(term))
    .filter(Boolean);

  return excludedTerms.some((term) => {
    if (!term) {
      return false;
    }

    if (normalizedKeyword === term) {
      return true;
    }

    if (normalizedKeyword.startsWith(term) || normalizedKeyword.endsWith(term)) {
      return true;
    }

    return term.length >= 3 && normalizedKeyword.includes(term);
  });
}

function buildKeywordMetrics(profile: TrendProfile, periods: string[], snapshots: TrendKeywordSnapshot[]): KeywordMetric[] {
  if (!periods.length) {
    return [];
  }

  const periodIndex = new Map(periods.map((period, index) => [period, index]));
  const seriesByKeyword = new Map<string, number[]>();

  snapshots.forEach((snapshot) => {
    const index = periodIndex.get(snapshot.period);

    if (index === undefined) {
      return;
    }

    if (!seriesByKeyword.has(snapshot.keyword)) {
      seriesByKeyword.set(snapshot.keyword, Array.from({ length: periods.length }, () => 0));
    }

    const score = Math.max(profile.resultCount + 1 - snapshot.rank, 0);
    const series = seriesByKeyword.get(snapshot.keyword)!;
    series[index] = Math.max(series[index], score);
  });

  return Array.from(seriesByKeyword.entries()).map(([keyword, series]) => {
    const nonZeroValues = series.filter((value) => value > 0);
    const appearanceCount = nonZeroValues.length;
    const recentWindow = takeLast(series, Math.min(12, series.length));
    const baselineWindow = series.slice(0, Math.max(0, series.length - recentWindow.length));
    const recentAverage = average(takeLast(series, Math.min(6, series.length)));
    const baselineAverage = average(baselineWindow.length ? baselineWindow : series);
    const recentYearAverage = average(recentWindow);
    const historicalAverage = average(baselineWindow.length ? baselineWindow : series);
    const overallAverage = average(series);
    const delta = round2(recentYearAverage - historicalAverage);
    const momentum = round2(recentAverage - average(takeLast(series, Math.min(3, series.length) + Math.min(3, Math.max(series.length - 3, 0)))));
    const seasonal = calculateSeasonality(periods, series);
    const volatility = round2(standardDeviation(nonZeroValues));
    const persistence = round2(appearanceCount / periods.length);
    const recentPresence = round2(recentWindow.filter((value) => value > 0).length / Math.max(1, recentWindow.length));
    const stability = round2(Math.max(0, 1 - volatility / Math.max(overallAverage * 1.5, 4)));
    const confidence = calculateConfidence({
      totalMonths: periods.length,
      appearanceCount,
      repeatability: seasonal.repeatability,
      volatility,
      recentPresence,
      overallAverage
    });
    const steadyScore = round2(
      overallAverage * 3.1 +
        persistence * 42 +
        recentPresence * 28 +
        stability * 22 +
        Math.min(confidence / 100, 1) * 14
    );
    const seasonalScore = round2(seasonal.score * 0.72 + seasonal.repeatability * 18 + confidence * 0.18 + recentPresence * 8);
    const cautionScore = round2(
      Math.max(0, -delta) * 22 +
        Math.max(0, 1 - recentPresence) * 24 +
        Math.max(0, 1 - persistence) * 18 +
        volatility * 3.5 +
        Math.max(0, seasonal.index - 1.6) * 8
    );
    const recentChangeScore = round2(Math.abs(delta) * 18 + Math.abs(momentum) * 14 + confidence * 0.18);

    return {
      keyword,
      series,
      sparkline: periods.map((period, index) => ({
        period,
        value: round2(series[index] ?? 0)
      })),
      appearanceCount,
      overallAverage: round2(overallAverage),
      recentAverage: round2(recentAverage),
      baselineAverage: round2(baselineAverage),
      recentYearAverage: round2(recentYearAverage),
      historicalAverage: round2(historicalAverage),
      latestScore: round2(series[series.length - 1] ?? 0),
      delta,
      momentum,
      persistence,
      recentPresence,
      seasonalIndex: seasonal.index,
      seasonalityScore: seasonal.score,
      repeatability: seasonal.repeatability,
      volatility,
      stability,
      confidence,
      confidenceLabel: confidence >= 80 ? "high" : confidence >= 58 ? "medium" : "low",
      peakMonths: seasonal.peakMonths,
      weakMonths: seasonal.lowMonths,
      peakMonthAverages: seasonal.rankedMonths,
      seasonalMonthlyAverage: seasonal.monthlyAverageMap,
      steadyScore,
      seasonalScore,
      cautionScore,
      recentChangeScore
    };
  });
}

function buildMonthlyPreparation(metrics: KeywordMetric[]): TrendMonthlyPreparationBucket[] {
  const buckets: MonthlyTarget[] = Array.from({ length: 12 }, (_, index) => {
    const month = String(index + 1).padStart(2, "0");
    return {
      month,
      label: `${index + 1}월`,
      seasonLabel: EVENT_LABELS[month] ?? "시즌 준비",
      items: []
    };
  });

  buckets.forEach((bucket) => {
    bucket.items = metrics
      .filter((metric) => {
        const targetAverage = metric.seasonalMonthlyAverage[bucket.month] ?? 0;
        const previousMonth = String(((Number(bucket.month) + 10) % 12) + 1).padStart(2, "0");
        const twoMonthsBefore = String(((Number(bucket.month) + 9) % 12) + 1).padStart(2, "0");
        const leadAverage =
          average([
            metric.seasonalMonthlyAverage[previousMonth] ?? 0,
            metric.seasonalMonthlyAverage[twoMonthsBefore] ?? 0
          ]);
        return targetAverage > 0 && targetAverage >= leadAverage * 1.08;
      })
      .sort((left, right) => {
        const leftTarget = left.seasonalMonthlyAverage[bucket.month] ?? 0;
        const rightTarget = right.seasonalMonthlyAverage[bucket.month] ?? 0;
        const leftLead = buildLeadSignal(left, bucket.month);
        const rightLead = buildLeadSignal(right, bucket.month);
        return rightTarget + rightLead + right.confidence * 0.08 - (leftTarget + leftLead + left.confidence * 0.08);
      })
      .slice(0, 4);
  });

  return buckets.map((bucket) => ({
    month: bucket.month,
    label: bucket.label,
    seasonLabel: bucket.seasonLabel,
    items: bucket.items.map((metric) => buildKeywordItem("monthly", metric, [bucket.month]))
  }));
}

function buildMonthlyCaution(metrics: KeywordMetric[]): TrendMonthlyPreparationBucket[] {
  const buckets: MonthlyTarget[] = Array.from({ length: 12 }, (_, index) => {
    const month = String(index + 1).padStart(2, "0");
    return {
      month,
      label: `${index + 1}월`,
      seasonLabel: EVENT_LABELS[month] ?? "시즌 주의",
      items: []
    };
  });
  const keywordUsage = new Map<string, number>();

  buckets.forEach((bucket) => {
    const specificCandidates = metrics
      .map((metric) => {
        const targetAverage = metric.seasonalMonthlyAverage[bucket.month] ?? 0;
        const peakAverage = metric.peakMonthAverages[0]?.average ?? 0;
        const targetWeak = metric.weakMonths.includes(bucket.month);
        const monthWeakness = peakAverage > 0 ? (peakAverage - targetAverage) / peakAverage : 0;
        const seasonalGap = Math.max(0, peakAverage - targetAverage);
        const downwardTrend = Math.max(0, -metric.delta);
        const seasonalityStrength = metric.seasonalityScore / 100;
        const broadKeywordPenalty = metric.appearanceCount >= 36 && seasonalityStrength < 0.46 ? 18 : 0;
        const hasMeaningfulSeasonality = peakAverage >= Math.max(metric.overallAverage * 1.08, 1.4);
        const qualifies =
          metric.cautionScore >= 34 &&
          !metric.peakMonths.includes(bucket.month) &&
          hasMeaningfulSeasonality &&
          (targetWeak || monthWeakness >= 0.38 || (downwardTrend >= 0.9 && targetAverage <= metric.overallAverage * 0.78));

        if (!qualifies) {
          return null;
        }

        return {
          metric,
          score:
            metric.cautionScore * 0.58 +
            (targetWeak ? 18 : 0) +
            monthWeakness * 42 +
            seasonalGap * 2.4 +
            downwardTrend * 10 +
            seasonalityStrength * 14 -
            broadKeywordPenalty
        };
      })
      .filter((candidate): candidate is { metric: KeywordMetric; score: number } => Boolean(candidate))
      .sort((left, right) => right.score - left.score);

    const fallbackCandidates = metrics
      .filter((metric) => {
        const targetAverage = metric.seasonalMonthlyAverage[bucket.month] ?? 0;
        const targetWeak = metric.weakMonths.includes(bucket.month);
        return metric.cautionScore >= 36 && (targetWeak || targetAverage <= metric.overallAverage * 0.76 || metric.delta < -0.3);
      })
      .map((metric) => {
        const targetAverage = metric.seasonalMonthlyAverage[bucket.month] ?? 0;
        return {
          metric,
          score: metric.cautionScore + Math.max(0, -metric.delta) * 8 + Math.max(0, metric.overallAverage - targetAverage)
        };
      })
      .sort((left, right) => right.score - left.score);

    const pool = specificCandidates.length ? specificCandidates : fallbackCandidates;
    const selected: KeywordMetric[] = [];
    const usedInBucket = new Set<string>();

    while (selected.length < 4) {
      const nextCandidate = pool
        .filter((candidate) => !usedInBucket.has(candidate.metric.keyword))
        .map((candidate) => ({
          metric: candidate.metric,
          score: candidate.score - (keywordUsage.get(candidate.metric.keyword) ?? 0) * 22
        }))
        .sort((left, right) => right.score - left.score)[0];

      if (!nextCandidate) {
        break;
      }

      selected.push(nextCandidate.metric);
      usedInBucket.add(nextCandidate.metric.keyword);
      keywordUsage.set(nextCandidate.metric.keyword, (keywordUsage.get(nextCandidate.metric.keyword) ?? 0) + 1);
    }

    bucket.items = selected;
  });

  return buckets.map((bucket) => ({
    month: bucket.month,
    label: bucket.label,
    seasonLabel: bucket.seasonLabel,
    items: bucket.items.map((metric) => buildKeywordItem("caution", metric, [bucket.month]))
  }));
}

function buildHeroMetrics(
  cards: TrendAnalysisCard[],
  monthlyPreparation: TrendMonthlyPreparationBucket[],
  cautionByMonth: TrendMonthlyPreparationBucket[],
  nextPeriods: string[]
): TrendAnalysisHeroMetric[] {
  const nextMonth = nextPeriods[0]?.slice(5, 7);
  const prepareKeyword = monthlyPreparation.find((bucket) => bucket.month === nextMonth)?.items[0] ?? cards.find((card) => card.kind === "monthly")?.items[0];
  const steadyKeyword = cards.find((card) => card.kind === "steady")?.items[0];
  const eventKeyword = cards.find((card) => card.kind === "event")?.items[0] ?? cards.find((card) => card.kind === "seasonal")?.items[0];
  const cautionKeyword = cautionByMonth.find((bucket) => bucket.month === nextMonth)?.items[0] ?? cards.find((card) => card.kind === "caution")?.items[0];

  return [
    buildHeroMetric("prepare-now", "지금 준비해야 할 대표 키워드", prepareKeyword, nextMonth ? `${Number(nextMonth)}월 기준` : undefined),
    buildHeroMetric("steady-anchor", "가장 스테디한 키워드", steadyKeyword),
    buildHeroMetric("season-window", "다가오는 시즌 준비 키워드", eventKeyword, nextMonth ? `${Number(nextMonth)}월 시즌` : undefined),
    buildHeroMetric("caution-now", "이번 달 조심 키워드", cautionKeyword, nextMonth ? `${Number(nextMonth)}월 기준` : undefined)
  ].filter((metric): metric is TrendAnalysisHeroMetric => Boolean(metric));
}

function buildHeroMetric(
  id: string,
  label: string,
  item?: TrendAnalysisKeyword,
  monthLabel?: string
): TrendAnalysisHeroMetric | null {
  if (!item) {
    return null;
  }

  return {
    id,
    label,
    keyword: item.keyword,
    confidence: item.confidence,
    confidenceLabel: item.confidenceLabel,
    rationale: item.rationale,
    monthLabel,
    sparkline: item.sparkline
  };
}

function buildSeasonalityHeatmap(metrics: KeywordMetric[]): TrendAnalysisHeatmapRow[] {
  const selected = metrics
    .slice()
    .sort((left, right) => {
      const rightSignal = Math.max(right.steadyScore, right.seasonalScore, right.recentChangeScore);
      const leftSignal = Math.max(left.steadyScore, left.seasonalScore, left.recentChangeScore);
      return rightSignal - leftSignal || right.confidence - left.confidence;
    })
    .slice(0, 8);

  return selected.map((metric) => ({
    keyword: metric.keyword,
    confidence: metric.confidence,
    confidenceLabel: metric.confidenceLabel,
    rationale: `평균 강세 월은 ${metric.peakMonths.map((month) => `${Number(month)}월`).join(", ")}이며, 장기 반복성은 ${Math.round(metric.seasonalityScore)}점입니다.`,
    seasonRationale: `평균적으로 ${metric.peakMonths.map((month) => `${Number(month)}월`).join(", ")}에 강하고, 약세 월은 ${metric.weakMonths
      .map((month) => `${Number(month)}월`)
      .join(", ")}입니다.`,
    timelineRationale: `63개월 중 ${metric.appearanceCount}개월 등장했고 가장 강한 시기는 ${describePeakWindow(metric)}입니다.`,
    recommendedMonths: metric.peakMonths,
    cautionMonths: metric.weakMonths,
    periodCells: metric.sparkline.map((point) => ({
      key: point.period,
      label: point.period,
      value: point.value
    })),
    seasonCells: Array.from({ length: 12 }, (_, index) => {
      const month = String(index + 1).padStart(2, "0");
      return {
        key: month,
        label: `${index + 1}월`,
        value: round2(metric.seasonalMonthlyAverage[month] ?? 0)
      };
    }),
    timelineStats: {
      appearanceCount: metric.appearanceCount,
      peakWindowLabel: describePeakWindow(metric),
      recentDelta: metric.delta
    }
  }));
}

function buildKeywordDrilldownSeries(metrics: KeywordMetric[], featuredKeywords: string[] = []): TrendKeywordDrilldownSeries[] {
  const metricMap = new Map(metrics.map((metric) => [metric.keyword, metric]));
  const selectedMetrics = featuredKeywords.length
    ? featuredKeywords
        .map((keyword) => metricMap.get(keyword))
        .filter((metric): metric is KeywordMetric => Boolean(metric))
    : metrics
        .slice()
        .sort((left, right) => right.steadyScore + right.seasonalScore - (left.steadyScore + left.seasonalScore))
        .slice(0, 10);

  return selectedMetrics
    .map((metric) => ({
      keyword: metric.keyword,
      confidence: metric.confidence,
      confidenceLabel: metric.confidenceLabel,
      rationale: `${metric.keyword}의 최근 흐름과 계절 반복 패턴을 함께 살펴볼 수 있습니다.`,
      observationMonths: metric.appearanceCount,
      recentTrendValue: metric.delta,
      seasonalityScore: metric.seasonalityScore,
      seasonalityScoreLabel:
        metric.seasonalityScore >= 72 ? "high" : metric.seasonalityScore >= 46 ? "medium" : "low",
      recentRetentionValue: round2(metric.recentPresence * 100),
      recentTrendExplanation: `최근 12개월 평균 점수가 이전 구간보다 ${formatSigned(metric.delta)} 변했습니다. 값이 클수록 최근 흐름이 강해지고 있다는 뜻입니다.`,
      seasonalityExplanation: `같은 월에 여러 해 반복 등장했는지와 관측 개월 수를 함께 반영한 점수입니다. 한두 번 반짝 뜬 키워드는 점수가 높게 나오지 않도록 보정합니다.`,
      recentRetentionExplanation: `최근 12개월 중 실제로 상위권에 등장한 달의 비율입니다. 높을수록 최근에도 꾸준히 살아 있는 키워드입니다.`,
      recommendedMonths: metric.peakMonths,
      cautionMonths: metric.weakMonths,
      points: metric.sparkline,
      recentPoints: takeLast(metric.sparkline, Math.min(12, metric.sparkline.length)),
      seasonalityPoints: Array.from({ length: 12 }, (_, index) => {
        const month = String(index + 1).padStart(2, "0");
        return {
          period: `${index + 1}월`,
          value: round2(metric.seasonalMonthlyAverage[month] ?? 0)
        };
      })
    }));
}

function buildMonthlyPlanner(
  periods: string[],
  metrics: KeywordMetric[],
  monthlyPreparation: TrendMonthlyPreparationBucket[],
  cautionByMonth: TrendMonthlyPreparationBucket[]
): TrendMonthlyExplorer[] {
  const metricMap = new Map(metrics.map((metric) => [metric.keyword, metric]));

  return Array.from({ length: 12 }, (_, index) => {
    const month = String(index + 1).padStart(2, "0");
    const recommendedKeywords = monthlyPreparation.find((bucket) => bucket.month === month)?.items ?? [];
    const cautionKeywords = cautionByMonth.find((bucket) => bucket.month === month)?.items ?? [];
    const relatedKeywords = [...recommendedKeywords, ...cautionKeywords]
      .map((item) => metricMap.get(item.keyword))
      .filter((metric): metric is KeywordMetric => Boolean(metric))
      .slice(0, 4);
    const monthlyScores = periods
      .filter((period) => period.slice(5, 7) === month)
      .map((period) => ({
        period,
        value: round2(
          average(
            relatedKeywords.map((metric) => metric.sparkline.find((point) => point.period === period)?.value ?? 0)
          )
        )
      }));
    const monthConfidenceBase = [...recommendedKeywords, ...cautionKeywords].slice(0, 4);
    const monthConfidence = monthConfidenceBase.length
      ? Math.round(average(monthConfidenceBase.map((item) => item.confidence)))
      : 0;

    return {
      month,
      label: `${index + 1}월`,
      seasonLabel: EVENT_LABELS[month] ?? "시즌 판단",
      monthConfidence,
      recommendedKeywords: recommendedKeywords.slice(0, 3),
      cautionKeywords: cautionKeywords.slice(0, 3),
      historicalMonthScores: monthlyScores
    };
  });
}

function buildOverviewSeries(metrics: KeywordMetric[]): TrendAnalysisOverviewLine[] {
  return metrics
    .slice()
    .sort((left, right) => right.steadyScore - left.steadyScore || right.confidence - left.confidence)
    .slice(0, 3)
    .map((metric) => ({
      keyword: metric.keyword,
      confidence: metric.confidence,
      points: metric.sparkline
    }));
}

function buildEventMetrics(monthlyPreparation: TrendMonthlyPreparationBucket[], nextPeriods: string[]) {
  const nextMonths = new Set(nextPeriods.map((period) => period.slice(5, 7)));
  const sourceItems = monthlyPreparation
    .filter((bucket) => nextMonths.has(bucket.month))
    .flatMap((bucket) => bucket.items);
  const seen = new Set<string>();

  return sourceItems
    .filter((item) => {
      if (seen.has(item.keyword)) {
        return false;
      }
      seen.add(item.keyword);
      return true;
    })
    .map((item) => ({
      keyword: item.keyword,
      confidence: item.confidence,
      confidenceLabel: item.confidenceLabel,
      rationale: item.rationale,
      latestScore: item.latestScore,
      delta: item.delta,
      momentum: item.momentum,
      seasonalIndex: item.seasonalIndex,
      appearanceCount: item.appearanceCount,
      recommendedPeriods: nextPeriods.map((period) => `${period.slice(5, 7)}월 ${EVENT_LABELS[period.slice(5, 7)] ?? "시즌"}`),
      recommendedMonths: item.recommendedMonths,
      cautionMonths: item.cautionMonths,
      sparkline: item.sparkline
    }));
}

function flattenMonthlyTargets(monthlyPreparation: TrendMonthlyPreparationBucket[]) {
  const flattened = monthlyPreparation.flatMap((bucket) =>
    bucket.items.map((item) => ({
      ...item,
      rationale: `${bucket.label} ${bucket.seasonLabel} 준비 키워드입니다. ${item.rationale}`
    }))
  );
  const seen = new Set<string>();

  return flattened.filter((item) => {
    if (seen.has(item.keyword)) {
      return false;
    }
    seen.add(item.keyword);
    return true;
  });
}

function buildCard(
  kind: TrendAnalysisCardKind,
  title: string,
  description: string,
  metrics: Array<KeywordMetric | TrendAnalysisKeyword>,
  nextPeriods: string[] = []
): TrendAnalysisCard {
  const items = metrics.slice(0, 5).map((metric) =>
    isKeywordItem(metric) ? metric : buildKeywordItem(kind, metric, nextPeriods)
  );

  return {
    kind,
    title,
    description,
    items
  };
}

function buildKeywordItem(kind: TrendAnalysisCardKind, metric: KeywordMetric, periodsOrMonths: string[]): TrendAnalysisKeyword {
  const peakMonths = metric.peakMonths.map((month) => `${Number(month)}월`);
  const periodLabels = periodsOrMonths.map((value) =>
    value.includes("-") ? `${value.slice(5, 7)}월 ${EVENT_LABELS[value.slice(5, 7)] ?? "시즌"}` : `${Number(value)}월`
  );

  let rationale = "";

  switch (kind) {
    case "steady":
      rationale = `총 ${metric.appearanceCount}개월 등장했고 최근 1년도 유지력이 있어 장기 운영에 유리합니다.`;
      break;
    case "seasonal":
      rationale = `${peakMonths.join(", ")}에 반복 강세가 재현되어 계절형 준비 상품으로 보기 좋습니다.`;
      break;
    case "monthly":
      rationale = `${periodLabels.join(", ")} 준비 구간에서 반복 강세가 보여 월별 준비 리스트에 적합합니다.`;
      break;
    case "event":
      rationale = `${periodLabels.slice(0, 2).join(" · ")}에 맞춰 준비하기 좋은 시즌/이벤트형 키워드입니다.`;
      break;
    case "caution":
      rationale = `최근 2년 흐름이 ${formatSigned(metric.delta)}이고 변동성 ${metric.volatility.toFixed(1)}로 보수적인 접근이 필요합니다.`;
      break;
    case "recent":
      rationale = `최근 6~12개월 변화량 ${formatSigned(metric.delta)}로 참고용 변화를 보여줍니다.`;
      break;
    default:
      rationale = "장기 데이터 기준으로 반복 패턴을 확인한 키워드입니다.";
      break;
  }

  return {
    keyword: metric.keyword,
    confidence: metric.confidence,
    confidenceLabel: metric.confidenceLabel,
    rationale,
    latestScore: metric.latestScore,
    delta: metric.delta,
    momentum: metric.momentum,
    seasonalIndex: metric.seasonalIndex,
    appearanceCount: metric.appearanceCount,
    recommendedPeriods: kind === "event" ? periodLabels : peakMonths,
    recommendedMonths: metric.peakMonths.map((month) => `${Number(month)}월`),
    cautionMonths: metric.weakMonths.map((month) => `${Number(month)}월`),
    sparkline: metric.sparkline
  };
}

function buildHighlights({
  cards,
  monthlyPreparation,
  cautionByMonth,
  confidenceScore,
  includedKeywordCount,
  excludedKeywordCount,
  nextPeriods
}: {
  cards: TrendAnalysisCard[];
  monthlyPreparation: TrendMonthlyPreparationBucket[];
  cautionByMonth: TrendMonthlyPreparationBucket[];
  confidenceScore: number;
  includedKeywordCount: number;
  excludedKeywordCount: number;
  nextPeriods: string[];
}) {
  const steady = cards.find((card) => card.kind === "steady")?.items[0]?.keyword;
  const seasonal = cards.find((card) => card.kind === "seasonal")?.items[0]?.keyword;
  const caution = cards.find((card) => card.kind === "caution")?.items[0]?.keyword;
  const nextMonth = nextPeriods[0]?.slice(5, 7) ?? "";
  const nextMonthlyItem = monthlyPreparation.find((bucket) => bucket.month === nextMonth)?.items[0]?.keyword;
  const nextCautionItem = cautionByMonth.find((bucket) => bucket.month === nextMonth)?.items[0]?.keyword;

  return [
    steady ? `가장 스테디한 핵심 키워드는 ${steady}입니다.` : `포함 키워드 ${includedKeywordCount}개 기준으로 장기 점수를 계산했습니다.`,
    seasonal
      ? `${seasonal}은 같은 시즌에 여러 해 반복된 계절형 강세를 보여줍니다.`
      : "강한 계절 반복 키워드는 더 많은 시즌 누적이 필요합니다.",
    nextMonthlyItem
      ? `${Number(nextMonth)}월 준비 키워드로 ${nextMonthlyItem}을 먼저 보는 것이 좋습니다.`
      : "다가오는 월 준비 키워드는 다음 시즌 데이터가 더 쌓이면 더 선명해집니다.",
    nextCautionItem || caution
      ? `신뢰도 ${confidenceScore}점 기준으로 ${nextCautionItem ?? caution}는 이번 시즌 보수적으로 보는 편이 좋습니다.`
      : `브랜드 제외 키워드 ${excludedKeywordCount}개를 반영해 일반 상품 트렌드에 집중했습니다.`
  ];
}

function latestSnapshotPeriod(snapshots: TrendKeywordSnapshot[]) {
  return [...new Set(snapshots.map((snapshot) => snapshot.period))].sort((left, right) => right.localeCompare(left))[0];
}

function buildUpcomingPeriods(latestPeriod: string | undefined, count: number) {
  if (!latestPeriod) {
    return [];
  }

  const [startYear, startMonth] = latestPeriod.split("-").map(Number);
  const periods: string[] = [];
  let year = startYear;
  let month = startMonth + 1;

  for (let index = 0; index < count; index += 1) {
    if (month > 12) {
      month = 1;
      year += 1;
    }

    periods.push(`${year}-${String(month).padStart(2, "0")}`);
    month += 1;
  }

  return periods;
}

function buildRecentPeriods(latestPeriod: string | undefined, count: number) {
  if (!latestPeriod) {
    return [];
  }

  const periods: string[] = [];
  let [year, month] = latestPeriod.split("-").map(Number);

  for (let index = 0; index < count; index += 1) {
    periods.unshift(`${year}-${String(month).padStart(2, "0")}`);
    month -= 1;
    if (month === 0) {
      month = 12;
      year -= 1;
    }
  }

  return periods;
}

function calculateSeasonality(periods: string[], series: number[]) {
  const monthlyBuckets = new Map<string, number[]>();
  const yearlyPresence = new Map<string, Set<string>>();

  periods.forEach((period, index) => {
    const monthKey = period.slice(5, 7);
    const yearKey = period.slice(0, 4);
    if (!monthlyBuckets.has(monthKey)) {
      monthlyBuckets.set(monthKey, []);
    }
    monthlyBuckets.get(monthKey)!.push(series[index] ?? 0);

    if ((series[index] ?? 0) > 0) {
      if (!yearlyPresence.has(yearKey)) {
        yearlyPresence.set(yearKey, new Set<string>());
      }
      yearlyPresence.get(yearKey)!.add(monthKey);
    }
  });

  const overallAverage = average(series);
  const appearanceCount = series.filter((value) => value > 0).length;
  const totalYears = new Set(periods.map((period) => period.slice(0, 4))).size;
  const activeYears = Array.from(yearlyPresence.values()).filter((months) => months.size > 0).length;
  const rankedMonths = Array.from(monthlyBuckets.entries())
    .map(([month, values]) => ({
      month,
      average: round2(average(values)),
      repeatCount: values.filter((value) => value > 0).length,
      totalYears: values.length
    }))
    .sort((left, right) => right.average - left.average);

  const primary = rankedMonths[0];
  const secondary = rankedMonths[1];
  const peakAverage = primary?.average ?? 0;
  const repeatability = primary ? round2(primary.repeatCount / Math.max(1, primary.totalYears)) : 0;
  const secondaryRepeatability = secondary ? round2(secondary.repeatCount / Math.max(1, secondary.totalYears)) : 0;
  const positiveMonthAverages = rankedMonths.filter((item) => item.average > 0);
  const concentration =
    positiveMonthAverages.length && peakAverage > 0
      ? round2(peakAverage / Math.max(positiveMonthAverages.reduce((sum, item) => sum + item.average, 0), peakAverage))
      : 0;
  const observationScore = Math.min(1, appearanceCount / 10);
  const yearSpread = activeYears / Math.max(1, totalYears);
  const averageStrength = Math.min(1, average(series.filter((value) => value > 0)) / 10);
  const sparsePenalty =
    appearanceCount <= 1 ? 0.42 : appearanceCount === 2 ? 0.58 : appearanceCount === 3 ? 0.72 : appearanceCount < 6 ? 0.84 : 1;
  const score = round2(
    Math.min(
      100,
      (
        repeatability * 0.34 +
        secondaryRepeatability * 0.16 +
        yearSpread * 0.18 +
        concentration * 0.1 +
        observationScore * 0.14 +
        averageStrength * 0.08
      ) *
        100 *
        sparsePenalty
    )
  );

  return {
    index: overallAverage > 0 ? round2(peakAverage / overallAverage) : 0,
    score,
    repeatability,
    peakMonths: rankedMonths.slice(0, 2).map((item) => item.month),
    lowMonths: [...rankedMonths].sort((left, right) => left.average - right.average).slice(0, 2).map((item) => item.month),
    rankedMonths: rankedMonths.slice(0, 4).map((item) => ({ month: item.month, average: item.average })),
    monthlyAverageMap: Object.fromEntries(rankedMonths.map((item) => [item.month, item.average]))
  };
}

function describePeakWindow(metric: KeywordMetric) {
  const peakPoint = metric.sparkline.reduce<TrendAnalysisSeriesPoint | null>((best, point) => {
    if (!best || point.value > best.value) {
      return point;
    }
    return best;
  }, null);

  if (!peakPoint || peakPoint.value <= 0) {
    return "뚜렷한 피크 없음";
  }

  return `${peakPoint.period} 피크`;
}

function calculateConfidence({
  totalMonths,
  appearanceCount,
  repeatability,
  volatility,
  recentPresence,
  overallAverage
}: {
  totalMonths: number;
  appearanceCount: number;
  repeatability: number;
  volatility: number;
  recentPresence: number;
  overallAverage: number;
}) {
  const observationScore = Math.min(1, totalMonths / 36);
  const appearanceScore = Math.min(1, appearanceCount / Math.max(8, totalMonths * 0.32));
  const repeatScore = Math.min(1, repeatability);
  const stabilityScore = overallAverage > 0 ? Math.max(0, 1 - volatility / Math.max(overallAverage * 1.35, 4)) : 0.2;
  const recentScore = Math.min(1, recentPresence);

  return Math.round(
    (observationScore * 0.2 + appearanceScore * 0.24 + repeatScore * 0.24 + stabilityScore * 0.16 + recentScore * 0.16) *
      100
  );
}

function buildLeadSignal(metric: KeywordMetric, month: string) {
  const previousMonth = String(((Number(month) + 10) % 12) + 1).padStart(2, "0");
  const twoMonthsBefore = String(((Number(month) + 9) % 12) + 1).padStart(2, "0");
  const targetAverage = metric.seasonalMonthlyAverage[month] ?? 0;
  const leadAverage = average([
    metric.seasonalMonthlyAverage[previousMonth] ?? 0,
    metric.seasonalMonthlyAverage[twoMonthsBefore] ?? 0
  ]);

  return targetAverage - leadAverage;
}

function isKeywordItem(value: KeywordMetric | TrendAnalysisKeyword): value is TrendAnalysisKeyword {
  return "recommendedPeriods" in value && "confidenceLabel" in value;
}

function normalizeTerm(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[\s_./()-]/g, "");
}

function average(values: number[]) {
  if (!values.length) {
    return 0;
  }

  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function standardDeviation(values: number[]) {
  if (values.length < 2) {
    return 0;
  }

  const avg = average(values);
  const variance = average(values.map((value) => (value - avg) ** 2));
  return Math.sqrt(variance);
}

function takeLast(values: number[], count: number) {
  return values.slice(Math.max(0, values.length - count));
}

function round2(value: number) {
  return Math.round(value * 100) / 100;
}

function formatSigned(value: number) {
  return value > 0 ? `+${value.toFixed(1)}` : value.toFixed(1);
}
