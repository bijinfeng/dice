import type { ViewProps } from 'react-native';

export type Placement = 'top' | 'bottom' | 'right' | 'left';

export type FadeProps = TransitionProps & {
  in?: boolean;
  entryDuration?: number;
  exitDuration?: number;
  delay?: number;
};
export type ScaleFadeProps = TransitionProps & {
  in?: boolean;
  duration?: number;
  delay?: number;
  initialScale?: number;
};
export type SlideProps = TransitionProps & {
  in?: boolean;
  duration?: number;
  delay?: number;
  placement?: Placement;
  overlay?: boolean;
};

export type SlideFadeProps = TransitionProps & {
  in?: boolean;
  delay?: number;
  duration?: number;
  offsetX?: number;
  offsetY?: number;
};

export interface SupportedTransitions {
  opacity?: number;
  translateY?: number;
  translateX?: number;
  scale?: number;
  scaleX?: number;
  scaleY?: number;
  rotate?: string;
}

export interface StaggerConfig {
  offset: number;
  reverse?: boolean;
}

export interface StaggerStyleProps extends SupportedTransitions {
  transition?: TransitionConfig & { stagger?: StaggerConfig };
}

export interface StaggerProps {
  children: any;
  /**
   * Initial styles before the transition starts
   */
  initial?: SupportedTransitions;
  /**
   * The styles to which each child should animate to while entering.
   */
  animate?: StaggerStyleProps;
  /**
   * The styles to which each child should animate to while exiting.
   */
  exit?: StaggerStyleProps;
  /**
   * Determines whether to start the animation
   */
  visible?: boolean;
}

export interface TransitionConfig {
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

export interface TransitionStyleProps extends SupportedTransitions {
  transition?: TransitionConfig;
}

export interface TransitionProps extends ViewProps {
  /**
   * Callback invoked when transition is completed
   * 动画结束的回调
   */
  onTransitionComplete?: (s: 'entered' | 'exited') => any;
  /**
   * Styles before the transition starts
   * 动画开始之前的样式
   */
  initial?: SupportedTransitions;
  /**
   * Entry animation styles
   * 进入的动画样式
   */
  animate?: TransitionStyleProps;
  /**
   * Exit animation styles
   * 离开时的动画样式
   */
  exit?: TransitionStyleProps;
  /**
   * Determines whether to start the animation
   */
  visible?: boolean;

  animationExited?: boolean;
  children?: any;
  as?: any;
}
