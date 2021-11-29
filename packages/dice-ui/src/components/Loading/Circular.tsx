import React, { FC, memo, useRef, useEffect } from 'react';
import Svg, { Circle } from 'react-native-svg';
import { Animated, Platform } from 'react-native';

const AnimateCircle = Animated.createAnimatedComponent(Circle);
const AnimateSvg = Animated.createAnimatedComponent(Svg);

interface Props {
  color: string;
  size: number;
}

const DURATION = 1500;

const Circular: FC<Props> = memo(({ color, size }) => {
  const strokeDash = useRef(new Animated.Value(0)).current;

  const startRotation = React.useCallback(() => {
    Animated.loop(
      Animated.timing(strokeDash, {
        toValue: 1,
        duration: DURATION,
        // Animated.loop does not work if useNativeDriver is true on web
        useNativeDriver: Platform.OS !== 'web',
      })
    ).start();
  }, []);

  useEffect(() => {
    startRotation();
  }, []);

  return (
    <AnimateSvg viewBox="25 25 50 50" width={size} height={size}>
      <AnimateCircle
        cx="50"
        cy="50"
        r="20"
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray={strokeDash.interpolate({
          inputRange: [0, 0.5, 1],
          outputRange: ['1, 200', '90, 150', '90, 150'],
        })}
        strokeDashoffset={strokeDash.interpolate({
          inputRange: [0, 0.5, 1],
          outputRange: [0, -40, -120],
        })}
      />
    </AnimateSvg>
  );
});

export default Circular;
