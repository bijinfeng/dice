import type { StyleProp, ViewStyle } from "react-native";

export interface ProgressProps {
  style?: StyleProp<ViewStyle>;
  /**
   * 进度条颜色
   */
  color?: string;
  /**
   * 是否置灰
   */
  inactive?: boolean;
  /**
   * 进度文字内容
   */
  pivotText?: React.ReactNode;
  /**
   * 进度文字颜色
   */
  textColor?: string;
  /**
   * 是否显示进度文字
   */
  showPivot?: boolean;
  /**
   * 进度文字背景色
   */
  pivotColor?: string;
  /**
   * 轨道颜色
   */
  trackColor?: string;
  /**
   * 进度条粗细
   */
  strokeWidth?: number;
  /**
   * 进度百分比
   */
  percentage?: number;
}
