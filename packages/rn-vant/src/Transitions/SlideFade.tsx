import React, { forwardRef, memo } from 'react';
import { Animated, Platform, View } from 'react-native';

import type { SlideFadeProps } from './types';

export function canUseDom() {
  if (typeof window !== 'undefined' || Platform.OS !== 'web') {
    return true;
  }
  return false;
}

const SlideFade = forwardRef<any, SlideFadeProps>((props, ref) => {
  const {
    children,
    in: animationState,
    delay,
    duration = 500,
    offsetX = 10,
    offsetY = 10,
    ...rest
  } = props;
  const isDomUsable = canUseDom();
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const slideAnimX = React.useRef(new Animated.Value(0)).current;
  const slideAnimY = React.useRef(new Animated.Value(0)).current;

  const animIn = () => {
    if (isDomUsable) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration,
        useNativeDriver: Platform.OS !== 'web',
      }).start();
      Animated.timing(slideAnimX, {
        toValue: 0,
        duration,
        useNativeDriver: Platform.OS !== 'web',
      }).start();
      Animated.timing(slideAnimY, {
        toValue: 0,
        duration,
        useNativeDriver: Platform.OS !== 'web',
      }).start();
    }
  };
  const animOut = () => {
    if (isDomUsable) {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration,
        useNativeDriver: Platform.OS !== 'web',
      }).start();
      offsetX &&
        Animated.timing(slideAnimX, {
          toValue: offsetX,
          duration,
          useNativeDriver: Platform.OS !== 'web',
        }).start();
      offsetY &&
        Animated.timing(slideAnimY, {
          toValue: offsetY,
          duration,
          useNativeDriver: Platform.OS !== 'web',
        }).start();
    }
  };
  animationState ? animIn() : animOut();

  return (
    <Animated.View ref={ref}>
      <View {...rest}>{children}</View>
    </Animated.View>
  );
});

SlideFade.displayName = 'Transitions.SlideFade';

export default memo(SlideFade);
