export const calculateNumberOfSappers = (
  magweaveCount: number,
  powderCount: number,
  triggerCount: number
): number => Math.floor(Math.min(magweaveCount, powderCount / 3, triggerCount));

export const calculateNumberOfSappersRaw = (
  magweaveCount: number,
  powderCount: number,
  mithrilCount: number
): number =>
  Math.floor(Math.min(magweaveCount / 2, powderCount / 4, mithrilCount));
