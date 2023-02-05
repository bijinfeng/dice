import type React from "react";
import type { ViewProps } from "react-native";

export interface BadgeProps extends ViewProps {
  /** 徽标内容 */
  content?: React.ReactNode;
  /** 是否展示为小红点	 */
  dot?: boolean;
  /** 最大值，超过最大值会显示 {max}+，仅当 content 为数字时有效	 */
  max?: number | string;
  /** 徽标背景颜色	 */
  color?: string;
  /** 设置徽标的偏移量，数组的两项分别对应水平和垂直方向的偏移量	 */
  offset?: Array<number>;
  /**
   * 当 content 为数字 0 时，是否展示徽标
   * @default true
   */
  showZero?: boolean;
}
