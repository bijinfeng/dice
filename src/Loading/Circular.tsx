import React, { memo, useEffect, useRef } from "react";
import { Animated, Easing, Platform } from "react-native";
import { Circle, Svg } from "react-native-svg";
import type { LoadingIconProps } from "./type";

const AnimateCircle = Animated.createAnimatedComponent(Circle);
const AnimateSvg = Animated.createAnimatedComponent(Svg);

const DURATION = 1400;

const Circular = ({ color, size }: LoadingIconProps) => {
  const strokeDash = useRef(new Animated.Value(0)).current;
  const rotate = useRef(new Animated.Value(0)).current;

  const startRotation = React.useCallback(() => {
    Animated.loop(
      Animated.timing(strokeDash, {
        toValue: 100,
        duration: DURATION,
        // Animated.loop does not work if useNativeDriver is true on web
        useNativeDriver: Platform.OS !== "web",
        easing: Easing.inOut(Easing.ease),
      })
    ).start();
    Animated.loop(
      Animated.timing(rotate, {
        toValue: 1,
        duration: DURATION,
        // Animated.loop does not work if useNativeDriver is true on web
        useNativeDriver: Platform.OS !== "web",
        easing: Easing.linear,
      })
    ).start();
  }, []);

  useEffect(() => {
    startRotation();
  }, []);

  return (
    <Animated.View
      collapsable={false}
      style={{
        transform: [
          {
            rotate: rotate.interpolate({
              inputRange: [0, 1],
              outputRange: ["0deg", "270deg"],
            }),
          },
        ],
      }}
    >
      <AnimateSvg
        viewBox="0 0 66 66"
        width={size}
        height={size}
        style={{
          transform: [
            {
              rotate: strokeDash.interpolate({
                inputRange: [0, 50, 100],
                outputRange: ["0deg", "135deg", "450deg"],
              }),
            },
          ],
        }}
      >
        <AnimateCircle
          cx="33"
          cy="33"
          r="30"
          fill="none"
          stroke={color}
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={187}
          strokeDashoffset={strokeDash.interpolate({
            inputRange: [0, 50, 100],
            outputRange: [187, 46.75, 187],
          })}
        />
      </AnimateSvg>
    </Animated.View>
  );
};

export default memo(Circular);
