import type { ReactNode } from "react";
import type { StyleProp, TextStyle, ViewProps } from "react-native";

export interface TabsProps extends ViewProps {
  // 绑定当前选中标签的标识符
  active?: number;
  // 样式风格类型
  type?: "card" | "line";
  // 标签栏对齐方式
  align?: "start" | "center";
  // 标签主题色
  color?: string;
  // 标签栏背景色
  background?: string;
  // 动画时间, 单位秒
  duration?: number;
  // 底部条宽度
  lineWidth?: number | "auto";
  // 底部条高度
  lineHeight?: number;
  // 是否开启切换标签内容时的转场动画
  animated?: boolean;
  // 是否显示标签栏外边框，仅在 type="line" 时有效
  border?: boolean;
  // 是否省略过长的标题文字
  ellipsis?: boolean;
  // 是否开启左侧收缩布局
  shrink?: boolean;
  // 是否开启手势滑动切换
  swipeable?: boolean;
  // 是否开启延迟渲染（首次切换到标签时才触发内容渲染）
  lazyRender?: boolean;
  /** 延迟渲染占位符 */
  lazyRenderPlaceholder?: React.ReactNode;
  // 滚动阈值，标签数量超过阈值且总宽度超过标签栏宽度时开始横向滚动
  swipeThreshold?: number;
  // 标题选中态颜色
  titleActiveColor?: string;
  // 标题默认态颜色
  titleInactiveColor?: string;
  // 切换标签前的回调函数，返回 false 可阻止切换，支持返回 Promise
  beforeChange?: (index: number) => boolean | Promise<boolean>;
  // 点击标签时触发
  onClickTab?: (index: number, disabled: boolean) => void;
  // 当前激活的标签改变时触发
  onChange?: (index: number) => void;
}

export interface TabPaneProps extends ViewProps {
  key?: React.Key;
  index?: number;
  // 标题
  title: ReactNode | ((active: boolean) => ReactNode);
  // 是否禁用标签
  disabled?: boolean;
  // 是否在标题右上角显示小红点
  dot?: boolean;
  // 图标右上角徽标的内容
  badge?: number | string;
  // 标签名称，作为匹配的标识符
  name?: number | string;
  // 自定义标题样式
  titleStyle?: StyleProp<TextStyle>;
  // 当 badge 为数字 0 时，是否展示徽标
  showZeroBadge?: boolean;
}
