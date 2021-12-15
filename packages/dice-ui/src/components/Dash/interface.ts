import type { ViewStyle, StyleProp, ViewProps, ColorValue } from 'react-native';

export interface DashProps extends ViewProps {
  /**
   * 两个破折号之间的间隔
   * @default 2
   */
  dashGap?: number;
  /**
   * 破折号的长度
   * @default 4
   */
  dashLength?: number;
  /**
   * 破折号的高度
   * @default 1
   */
  dashThickness?: number;
  /**
   * 容器的样式
   */
  style?: StyleProp<ViewStyle>;
  /**
   * 破折号的颜色
   */
  dashColor?: string | ColorValue;
  /**
   * 破折号的样式
   */
  dashStyle?: StyleProp<ViewStyle>;
}
