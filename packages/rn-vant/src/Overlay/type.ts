import type React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';

export type OverlayProps = {
  // 是否展示遮罩层
  visible?: boolean;
  // 背景容器的样式
  backdropStyle?: StyleProp<ViewStyle>;
  // 叠加在背景容器上的组件的样式
  overlayStyle?: StyleProp<ViewStyle>;
  // 背景是否透明
  transparent?: boolean;
  // 动画时长
  duration?: number;
  children?: React.ReactNode;
  // 点击背景容器时触发的事件
  onBackdropPress?: () => void;
  onPress?: () => void;
  // 动画结束后触发的事件
  onFadeDone?: () => void;
};
