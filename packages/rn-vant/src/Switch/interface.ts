import type { ViewStyle, StyleProp } from 'react-native';

export interface SwitchProps {
  /**
   * 开关尺寸
   */
  size?: number;
  /**
   * 是否为加载状态
   */
  loading?: boolean;
  /**
   * 是否为禁用状态
   */
  disabled?: boolean;
  /**
   * 开关选中状态
   */
  checked?: boolean;
  /**
   * 开关默认选中状态
   */
  defaultChecked?: boolean;
  /**
   * 打开时的背景色
   */
  activeColor?: string;
  /**
   * 关闭时的背景色
   */
  inactiveColor?: string;
  /**
   * 打开时对应的值
   * @default true
   */
  activeValue?: any;
  /**
   * 关闭时对应的值
   * @default false
   */
  inactiveValue?: any;
  /**
   * 开关状态切换时触发
   */
  onChange?: (val: any) => void;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}
