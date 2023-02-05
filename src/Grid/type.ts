import type { ViewProps, ViewStyle } from "react-native";
import type { BadgeProps } from "../Badge/type";

export type GridDirection = "horizontal" | "vertical";

export interface GridProps extends ViewProps {
  /** 是否将格子固定为正方形	 */
  square?: boolean;
  /** 是否将格子内容居中显示	 */
  center?: boolean;
  /** 是否显示边框	 */
  border?: boolean;
  /** 格子之间的间距 */
  gutter?: number;
  /** 是否调换图标和文本的位置	 */
  reverse?: boolean;
  /** 图标大小 */
  iconSize?: number;
  /** 格子内容排列的方向，可选值为 `horizontal`	 */
  direction?: GridDirection;
  /** 列数	 */
  columnNum?: number;
}

export interface GridItemProps extends ViewProps {
  /**  图标右上角徽标	 */
  badge?: BadgeProps;
  /** 文字 */
  text?: string | React.ReactNode;
  /** 图标 */
  icon?: React.ReactNode;
  /** 图标颜色，等同于 Icon 组件的 color 属性	 */
  iconColor?: string;
  contentStyle?: ViewStyle;
  onPress?: () => void;
}
