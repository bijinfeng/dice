import type { ViewProps } from "react-native";

export type LoadingType = "spinner" | "circular";

export interface LoadingProps extends ViewProps {
  /**
   * 颜色
   * @default #c8c9cc
   */
  color?: string;
  /**
   * 加载图标大小
   * @default 30
   */
  size?: number;
  /**
   * 类型
   * @default circular
   */
  type?: LoadingType;
  /**
   * 文字大小
   */
  textSize?: number;
  /**
   * 文字颜色
   * @default #c8c9cc
   */
  textColor?: string;
  /**
   * 是否垂直排列图标和文字内容
   * @default false
   */
  vertical?: boolean;
}

export interface LoadingIconProps {
  color: string;
  size: number;
}
