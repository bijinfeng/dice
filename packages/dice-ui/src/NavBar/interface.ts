import type { ViewStyle, StyleProp, TextStyle } from 'react-native';

export type LoadingType = 'circular' | 'spinner';

export interface NavBarProps {
  /**
   * 最外层的样式
   */
  style?: StyleProp<ViewStyle>;

  /**
   * 左箭头样式
   */
  leftArrowStyle?: StyleProp<TextStyle>;

  /**
   * 标题样式
   */
  titleTextStyle?: StyleProp<TextStyle>;
  /**
   * 标题
   */
  title?: React.ReactNode;
  /**
   * 左侧文案
   */
  leftText?: React.ReactNode;
  /**
   * 右侧文案
   */
  rightText?: React.ReactNode;
  /**
   * 是否显示左侧箭头
   * @default true
   */
  leftArrow?: boolean;
  /**
   * 是否开启顶部安全区适配
   */
  safeAreaInsetTop?: boolean;
  /**
   * 是否显示下边框
   * @default true
   */
  border?: boolean;
  onPressLeft?: () => void;
  onPressRight?: () => void;
}
