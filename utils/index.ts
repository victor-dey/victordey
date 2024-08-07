export const classNameCombiner = (...classNames: string[]): string =>
  classNames.filter(Boolean).join(" ");
