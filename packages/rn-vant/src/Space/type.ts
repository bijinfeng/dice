import type React from 'react';
import type { Pressable, StyleProp, ViewStyle } from 'react-native';

type PressableProps = React.ComponentProps<typeof Pressable>;

export interface SpaceProps extends PressableProps {
  /** 间距方向
   * @default horizontal
   */
  direction?: 'horizontal' | 'vertical';
  /** 交叉轴对齐方式	 */
  align?: 'start' | 'end' | 'center' | 'baseline';
  /** 主轴对齐方式	 */
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | 'stretch';
  /** 是否自动换行，仅在 horizontal 时有效	 */
  wrap?: boolean;
  /**
   * 间距大小
   * 设为数组时则分别设置垂直方向和水平方向的间距大小
   * @default 8px
   */
  gap?: number;
  style?: StyleProp<ViewStyle>;
  /** 分隔内容 */
  divider?: React.ReactNode;
}
