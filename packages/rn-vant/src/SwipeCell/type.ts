import type React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import type { SwipeableProps } from 'react-native-gesture-handler/Swipeable';

export type SwipeCellRenderAction = SwipeableProps['renderLeftActions'];

export interface SwipeCellProps {
  style?: StyleProp<ViewStyle>;
  /** 标识符，可以在事件参数中获取到 */
  name?: string | number;
  /** 左侧滑动区域的内容 */
  leftAction?: React.ReactNode | SwipeCellRenderAction;
  /** 右侧滑动区域的内容 */
  rightAction?: React.ReactNode | SwipeCellRenderAction;
  /** 是否禁用 */
  disabled?: boolean;
  /** 打开时触发 */
  onOpen?: ({ name, position }: { name: string | number; position: SwipeCellSide }) => void;
  /** 关闭时触发 */
  onClose?: ({ name, position }: { name: string | number; position: SwipeCellSide }) => void;
  children?: React.ReactNode;
}

export type SwipeCellSide = 'left' | 'right';

export type SwipeCellInstance = {
  open: (side: SwipeCellSide) => void;
  close: () => void;
};
