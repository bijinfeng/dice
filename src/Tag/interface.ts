import type { StyleProp, TextStyle, ViewStyle } from "react-native";

export type TagSize = "mini" | "medium" | "large";
export type TagType = "default" | "primary" | "success" | "warning" | "danger";

export interface TagProps {
  children?: React.ReactNode;
  /**
   * 最外层样式
   */
  style?: StyleProp<ViewStyle>;

  /**
   * 文字包裹，实现类似 `inline-block`
   */
  innerStyle?: StyleProp<ViewStyle>;

  /**
   * 文字样式
   */
  textStyle?: StyleProp<TextStyle>;

  /**
   * 类型，可选值为 `'default' | 'primary' | 'success' | 'danger' | 'warning'`
   *
   * @default `default`
   */
  type?: TagType;

  /**
   * 大小, 可选值为 `'large' | 'medium'`
   */
  size?: TagSize;

  /**
   * 标签颜色
   */
  color?: string;

  /**
   * 是否展示标签
   *
   * @default `true`
   */
  show?: boolean;

  /**
   * 是否为空心样式
   *
   * @default false
   */
  plain?: boolean;

  /**
   * 是否为圆角样式
   *
   * @default false
   */
  round?: boolean;

  /**
   * 是否为标记样式
   *
   * @default false
   */
  mark?: boolean;

  /**
   * 文本颜色，优先级高于 color 属性
   *
   * @default '#fff'
   */
  textColor?: string;

  /**
   * 是否为可关闭标签
   *
   * @default false
   */
  closeable?: boolean;

  /**
   * 点击关闭图标
   */
  onClose?: () => void;

  /**
   * 点击事件
   */
  onPress?: () => void;

  /**
   * 是否使用 0.5px 线
   *
   * @default true
   */
  hairline?: boolean;
}
