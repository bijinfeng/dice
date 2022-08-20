import type { ViewProps } from 'react-native';
import type { ReactNode } from 'react';

export interface SwiperProps extends ViewProps {
  /** 滑块宽度 */
  width?: number;
  /** 滑块高度 */
  height?: number;
  /** 初始位置索引值 */
  initialSwipe?: number;
  /** 是否允许手势滑动 */
  touchable?: boolean;
  /** 自动轮播间隔，单位为 ms	 */
  autoplay?: boolean | number;
  /** 是否开启循环播放	 */
  loop?: boolean;
  /** 是否为纵向滚动 */
  vertical?: boolean;
  /** 每一页轮播结束后触发 */
  onChange?: (index: number) => void;
  /** 自定义指示器 */
  indicator?: boolean | ((total: number, current: number) => ReactNode);
}

export interface SwiperItemProps extends ViewProps {
  onPress?: () => void;
}

export type SwiperInstance = {
  activeIndex: number;
  swipeTo: (index: number) => void;
  swipeNext: () => void;
  swipePrev: () => void;
};
