import type { ReactNode } from 'react';
import type { ViewProps } from 'react-native';

export type Placement = 'top' | 'bottom' | 'right' | 'left';

export type IFadeProps = ViewProps & {
  in?: boolean;
  entryDuration?: number;
  exitDuration?: number;
  delay?: number;
};
export type IScaleFadeProps = ViewProps & {
  in?: boolean;
  duration?: number;
  delay?: number;
  initialScale?: number;
};
export type ISlideProps = ViewProps & {
  in?: boolean;
  duration?: number;
  delay?: number;
  placement?: Placement;
  overlay?: boolean;
};

export interface ISupportedTransitions {
  opacity?: number;
  translateY?: number;
  translateX?: number;
  scale?: number;
  scaleX?: number;
  scaleY?: number;
  rotate?: string;
}

export interface ITransitionConfig {
  type?: 'timing' | 'spring';
  easing?: (value: number) => number;
  overshootClamping?: boolean;
  restDisplacementThreshold?: number;
  restSpeedThreshold?: number;
  velocity?: number | { x: number; y: number };
  bounciness?: number;
  speed?: number;
  tension?: number;
  friction?: number;
  stiffness?: number;
  mass?: number;
  damping?: number;
  delay?: number;
  duration?: number;
  useNativeDriver?: boolean;
}

export interface ITransitionStyleProps extends ISupportedTransitions {
  transition?: ITransitionConfig;
}

export interface ITransitionProps extends ViewProps {
  /**
   * Callback invoked when transition is completed
   * 动画结束的回调
   */
  onTransitionComplete?: (s: 'entered' | 'exited') => any;
  /**
   * Styles before the transition starts
   * 动画开始之前的样式
   */
  initial?: ISupportedTransitions;
  /**
   * Entry animation styles
   * 进入的动画样式
   */
  animate?: ITransitionStyleProps;
  /**
   * Exit animation styles
   * 离开时的动画样式
   */
  exit?: ITransitionStyleProps;
  /**
   * Determines whether to start the animation
   */
  visible?: boolean;

  animationExited?: boolean;
  children?: any;
  as?: any;
}

export interface IPresenceTransitionProps extends ViewProps {
  /**
   * Callback invoked when transition is completed
   */
  onTransitionComplete?: (s: 'entered' | 'exited') => any;
  /**
   * Styles before the transition starts
   */
  initial?: ISupportedTransitions;
  /**
   * Entry animation styles
   */
  animate?: ITransitionStyleProps;
  /**
   * Exit animation styles
   */
  exit?: ITransitionStyleProps;
  /**
   * Determines whether to start the animation
   */
  visible?: boolean;
  children?: ReactNode;
  /**
   * Accepts a Component to be rendered as Wrapper. Defaults to `View`
   */
  as?: ReactNode;
}
