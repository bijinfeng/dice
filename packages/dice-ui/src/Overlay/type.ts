import type { ModalProps, StyleProp, ViewStyle } from 'react-native';
import type { InlinePressableProps } from '../types';

export type OverlayProps = ModalProps & {
  /**
   * 背景容器的样式
   */
  backdropStyle?: StyleProp<ViewStyle>;
  /**
   * 叠加在背景容器上的组件的样式
   */
  overlayStyle?: StyleProp<ViewStyle>;
  /**
   * 点击背景容器时触发的事件（只在 fullScreen 为 false 时生效）
   */
  onBackdropPress?(): void;
  /**
   * 为 true 时，Modal 将铺满整个屏幕
   */
  fullScreen?: boolean;
} & Omit<InlinePressableProps, 'onPress'>;
