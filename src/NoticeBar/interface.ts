import type React from "react";
import type { StyleProp, ViewStyle } from "react-native";

export type NoticeBarMode = "" | "closeable" | "link";

export type NoticeBarInstance = {
  /** 重置通知栏到初始状态	 */
  reset: () => void;
};

export interface NoticeBarProps {
  /**
   * 最外层的样式
   */
  style?: StyleProp<ViewStyle>;

  /**
   * 通知栏模式
   */
  mode?: NoticeBarMode;
  /**
   * 左侧图标名称或图片链接
   */
  leftIcon?: string | React.ReactNode;
  rightIcon?: string | React.ReactNode;
  /**
   * 滚动条背景
   */
  background?: string;
  /**
   * 通知文本颜色
   */
  color?: string;
  /**
   * 通知文本内容
   */
  text?: React.ReactNode;
  /**
   * 是否开启滚动播放，内容长度溢出时默认开启
   */
  scrollable?: boolean;
  /**
   * 是否开启文本换行，只在禁用滚动时生效
   */
  wrapable?: boolean;
  /**
   * 滚动速率 (px/s)
   * @default 60
   */
  speed?: number;
  /**
   * 动画延迟时间 (ms)
   * @default 1000
   */
  delay?: number;
  /**
   * 关闭通知栏时触发
   */
  onClose?: () => void;
  /**
   * 点击通知栏时触发
   */
  onPress?: () => void;
  /**
   * 每当滚动栏重新开始滚动时触发
   */
  onReplay?: () => void;
  children?: React.ReactNode;
}
