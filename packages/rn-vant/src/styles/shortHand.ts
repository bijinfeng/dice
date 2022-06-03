import type { FlexStyle } from 'react-native';

type MarginStyles = Pick<FlexStyle, 'marginLeft' | 'marginTop' | 'marginRight' | 'marginBottom'>;
type PaddingStyles = Pick<
  FlexStyle,
  'paddingLeft' | 'paddingTop' | 'paddingRight' | 'paddingBottom'
>;

const getShortHand = (style: string, ...values: (string | number)[]) => {
  if (values.length === 1) {
    return { [style]: values[0] };
  }
  const _genCss = (..._values: (string | number)[]) => ({
    [style + 'Top']: _values[0],
    [style + 'Right']: _values[1],
    [style + 'Bottom']: _values[2],
    [style + 'Left']: _values[3],
  });
  if (values.length === 2) {
    return _genCss(values[0], values[1], values[0], values[1]);
  }
  if (values.length === 3) {
    return _genCss(values[0], values[1], values[2], values[1]);
  }
  return _genCss(values[0], values[1], values[2], values[3]);
};

/**
 * padding 缩写
 * @param values
 * @returns
 */
export const padding = (...values: (number | string)[]): PaddingStyles =>
  getShortHand('padding', ...values) as PaddingStyles;

/**
 * margin 缩写
 * @param values
 * @returns
 */
export const margin = (...values: (number | string)[]): MarginStyles =>
  getShortHand('margin', ...values) as MarginStyles;
