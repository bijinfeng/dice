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
   * 点击背景容器时触发的事件
   */
  onBackdropPress?(): void;
  useSafeArea?: boolean;
} & Omit<InlinePressableProps, 'onPress'>;
