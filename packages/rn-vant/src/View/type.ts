import type { ViewProps as RNViewProps, StyleProp, ViewStyle, Animated } from 'react-native';

export interface ViewProps extends Omit<RNViewProps, 'style'> {
  /**
   * 是否开启安全区适配, 为 true 时使用 SafeAreaView
   */
  useSafeArea?: boolean;
  /**
   * 是否使用 Animate.View
   */
  animated?: boolean;
  style?: StyleProp<ViewStyle | Animated.AnimatedProps<ViewStyle>>;
}
