import type { ViewStyle, StyleProp, TextStyle } from 'react-native';
import type { IconNames } from '@rn-vant/icons';
import type Loading from '../Loading';

export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'default';
export type ButtonSize = 'large' | 'small' | 'mini' | 'normal';

type LoadingProps = React.ComponentProps<typeof Loading>;

export interface ButtonProps {
  /**
   * 类型，可选值为 primary success warning danger
   * @default default
   */
  type?: ButtonType;
  /**
   * 尺寸，可选值为 large small mini
   * @default normal
   */
  size?: ButtonSize;
  /**
   * 按钮颜色，支持传入 linear-gradient 渐变色
   */
  color?: string;
  /**
   * 左侧图标名称或自定义图标组件
   */
  icon?: IconNames | React.ReactNode;
  /**
   * 图标展示位置，可选值为 right
   * @default left
   */
  iconPosition?: 'left' | 'right';
  /**
   * 是否为朴素按钮
   */
  plain?: boolean;
  /**
   * 是否为方形按钮
   */
  square?: boolean;
  /**
   * 是否为圆形按钮
   */
  round?: boolean;
  /**
   * 是否禁用按钮
   */
  disabled?: boolean;
  /**
   * 是否显示为加载状态
   */
  loading?: boolean;
  /**
   * 加载状态提示文字
   */
  loadingText?: string;
  /**
   * 加载图标类型
   */
  loadingType?: LoadingProps['type'];
  /**
   * 加载图标大小
   */
  loadingSize?: number;
  onPress?: () => void;
  onLongPress?: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}
