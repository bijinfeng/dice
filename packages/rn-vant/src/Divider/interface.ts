import type { ViewStyle, TextStyle, StyleProp } from 'react-native';

export interface DividerProps {
  /**
   * 外层容器自定义样式
   */
  style?: StyleProp<ViewStyle>;

  /**
   * 自定义文字样式
   */
  textStyle?: StyleProp<TextStyle>;

  /**
   * 自定义线样式
   */
  lineStyle?: StyleProp<ViewStyle>;

  /**
   * 是否使用虚线
   *
   * @default false
   */
  dashed?: boolean;

  /**
   * 是否使用 0.5px 线
   *
   * @default true
   */
  hairline?: boolean;

  /**
   * 内容位置，可选值为 `'left' | 'center' | 'right'`
   *
   * @default 'center'
   */
  contentPosition?: 'left' | 'center' | 'right';
  children?: string;
}
