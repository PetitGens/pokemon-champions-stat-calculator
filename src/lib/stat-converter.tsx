// const EFFORT_VALUE_MAX = 252;

const CHAMPIONS_STAT_POINTS_MAX = 32;

export function convertChampionsStatPointsToEffortValue(
  statPoints: number,
): number | null {
  if (statPoints > CHAMPIONS_STAT_POINTS_MAX) return null;

  if (statPoints === 0) return 0;

  return 8 * (statPoints - 1) + 4;
}

export function convertEffortValueToChampionsStatPoints(
  effortValue: number,
): number | null {
  return null; //TODO
}
