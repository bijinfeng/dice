import type React from "react";
import type { ViewProps } from "react-native";

export interface LayoutRectangle {
  x: number;
  y: number;
  width: number;
  height: number;
  pageX: number;
  pageY: number;
}

export interface AnchorState {
  top: number;
  left: number;
  width: number;
  height: number;
  active: boolean;
}

export interface IndexBarProps extends ViewProps {
  /** z-index 层级 */
  zIndex?: number;
  /** 索引字符高亮颜色	 */
  highlightColor?: string;
  /**
   * 是否开启锚点自动吸顶
   * @default true
   */
  sticky?: boolean;
  /**
   * 索引字符列表
   * @default `A-Z[]`
   */
  indexList?: Array<number | string>;
  /** 当前高亮的索引字符变化时触发	 */
  onChange?: (value: number | string) => void;
  /** 点击索引栏的字符时触发	 */
  onSelect?: (value: number | string) => void;
  children?: React.ReactNode;
}

export interface IndexAnchorProps extends ViewProps {
  /** 索引字符	 */
  index: number | string;
  children?: React.ReactNode;
}

export type IndexBarInstance = {
  /** 滚动到指定锚点	 */
  scrollTo: (index: number | string) => void;
};

export type IndexAnchorInstance = {
  getRect: () => LayoutRectangle | Promise<LayoutRectangle>;
  state: AnchorState;
  updateState: (state: Partial<AnchorState>) => void;
};
