const getShortHand = (style: string, ...values: any[]) => {
  if (values.length === 1) {
    return { [style]: values[0] };
  }
  const _genCss = (...list: number[]) => ({
    [style + 'Top']: list[0],
    [style + 'Right']: list[1],
    [style + 'Bottom']: list[2],
    [style + 'Left']: list[3],
  });
  if (values.length === 2) {
    return _genCss(values[0], values[1], values[0], values[1]);
  }
  if (values.length === 3) {
    return _genCss(values[0], values[1], values[2], values[1]);
  }
  return _genCss(values[0], values[1], values[2], values[3]);
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const padding = (...values: Array<number | string>) => getShortHand('padding', ...values);
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const margin = (...values: Array<number | string>) => getShortHand('margin', ...values);
