import type React from 'react';
import type { StyleProp, TextStyle, ViewStyle } from 'react-native';
import type { BadgeProps } from '../Badge/type';
import type { ButtonType } from '../Button/type';

export interface ActionBarProps {
  /** 是否开启底部安全区适配 */
  safeAreaInsetBottom?: boolean;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
}

export interface ActionBarIconProps {
  children?: React.ReactNode;
  /** 按钮文字	 */
  text?: React.ReactNode;
  /** 图标 */
  icon?: React.ReactNode;
  /** 图标右上角徽标的内容	 */
  badge?: BadgeProps;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

export interface ActionBarButtonProps {
  children?: React.ReactNode;
  /** 按钮文字 */
  text?: React.ReactNode;
  /** 按钮类型 */
  type?: ButtonType;
  /** 按钮图标 */
  icon?: string | React.ReactNode;
  /** 按钮颜色，支持传入 linear-gradient 渐变色	 */
  color?: string;
  /** 是否禁用按钮	 */
  disabled?: boolean;
  /** 是否显示为加载状态	 */
  loading?: boolean;
  onPress?: () => void;
  /**  @private */
  index?: number;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}
