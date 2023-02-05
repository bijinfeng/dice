import React, { memo, useEffect, useRef } from "react";
import { Animated, Easing, Platform, View } from "react-native";
import type { LoadingIconProps } from "./type";

const DURATION = 800;

const Spinner = ({ color, size }: LoadingIconProps) => {
  const rotate = useRef(new Animated.Value(0)).current;

  const startRotation = React.useCallback(() => {
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
        position: "relative",
        width: size,
        height: size,
        transform: [
          {
            rotate: rotate.interpolate({
              inputRange: [0, 1],
              outputRange: ["0deg", "360deg"],
            }),
          },
        ],
      }}
    >
      {Array(12)
        .fill(null)
        .map((_, index) => (
          <View
            style={{
              left: 0,
              position: "absolute",
              top: 0,
              transform: [{ rotate: `${(index + 1) * 30}deg` }],
              opacity: 1 - (0.75 / 12) * index,
              width: size,
              height: size,
            }}
            // eslint-disable-next-line react/no-array-index-key
            key={index}
          >
            <View
              style={{
                width: 2,
                backgroundColor: color,
                borderRadius: size * 0.4,
                height: 0.25 * size,
                marginHorizontal: (size - 2) / 2,
              }}
            />
          </View>
        ))}
    </Animated.View>
  );
};

export default memo(Spinner);
