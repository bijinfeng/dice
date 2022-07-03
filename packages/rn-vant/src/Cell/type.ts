import type React from 'react';
import type { StyleProp, TextStyle, ViewStyle, ViewProps } from 'react-native';
import type { IconNames } from '../Icon';

export type Direction = 'left' | 'right' | 'up' | 'down';

export interface CellProps {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  /**
   * 左侧标题
   */
  title?: React.ReactNode | ((titleStyle?: StyleProp<TextStyle>) => React.ReactNode);
  /**
   * 左侧标题额外样式
   */
  titleStyle?: StyleProp<TextStyle>;
  /**
   * 右侧内容
   */
  value?: React.ReactNode;
  /**
   * 右侧内容额外样式
   */
  valueStyle?: StyleProp<TextStyle>;
  /**
   * 标题下方的描述信息
   */
  label?: string;
  /**
   * 标题下方的描述信息额外样式
   */
  labelStyle?: StyleProp<TextStyle>;
  /**
   * 单元格大小，可选值为 large
   */
  size?: 'default' | 'large';
  /**
   * 左侧图标名称或图标自定义图标组件
   */
  icon?: IconNames | React.ReactElement;
  /**
   * 是否展示右侧箭头
   */
  isLink?: boolean;
  /**
   * 是否显示表单必填星号
   */
  required?: boolean;
  /**
   * 箭头方向
   * @default right;
   */
  arrowDirection?: Direction;
  /**
   * 是否使内容垂直居中
   */
  center?: boolean;
  /** 是否开启点击反馈	 */
  pressable?: boolean;
  disabled?: boolean;
  /**
   * 点击事件
   */
  onPress?: () => void;
}

export interface CellGroupProps extends ViewProps {
  /**
   * 分组标题
   */
  title?: string;
  /**
   * 圆角卡片风格
   */
  inset?: boolean;
  /**
   * 是否显示外边框
   * @default true
   */
  border?: boolean;
}
