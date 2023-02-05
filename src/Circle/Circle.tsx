import React, { forwardRef, useEffect, useMemo, useRef, useState } from "react";
import type { ViewStyle } from "react-native";
import { Animated, Easing, Platform, Text, View } from "react-native";
import Svg, { Defs, LinearGradient, Path, Stop } from "react-native-svg";

import { useUpdateEffect } from "../hooks";
import { useThemeFactory } from "../Theme";
import type { CircleProps, CircleStartPosition } from "./type";

const AnimatePath = Animated.createAnimatedComponent(Path);

let uid = 0;
const PERIMETER = 3140;

const format = (rate: string | number) => Math.min(Math.max(+rate, 0), 100);

const getPath = (clockwise: boolean, viewBoxSize: number) => {
  const sweepFlag = clockwise ? 1 : 0;
  return `M ${viewBoxSize / 2} ${
    viewBoxSize / 2
  } m 0, -500 a 500, 500 0 1, ${sweepFlag} 0, 1000 a 500, 500 0 1, ${sweepFlag} 0, -1000`;
};

const ROTATE_ANGLE_MAP: Record<CircleStartPosition, number> = {
  top: 0,
  right: 90,
  bottom: 180,
  left: 270,
};

const Circle = forwardRef<View, CircleProps>((props, ref) => {
  const { styles, theme } = useThemeFactory(createStyle, { size: props.size });
  const {
    style,
    clockwise = true,
    speed = 100,
    fill = "none",
    strokeWidth = 40,
    startPosition = "top",
    color = theme.circle_color,
    layerColor = theme.circle_layer_color,
    strokeLinecap = "round",
    text,
    children,
    rate = 0,
  } = props;

  const id = `van-circle-${uid++}`;

  const currentRate = useRef(new Animated.Value(rate)).current;
  const rateAnimated = useRef<Animated.CompositeAnimation>();
  const [nextRate, setNextRate] = useState<number>(rate);

  const viewBoxSize = useMemo(() => +strokeWidth + 1000, [strokeWidth]);
  const path = useMemo(
    () => getPath(clockwise, viewBoxSize),
    [clockwise, viewBoxSize]
  );

  const svgStyle = useMemo<ViewStyle>(() => {
    const angleValue = ROTATE_ANGLE_MAP[startPosition];
    if (angleValue) {
      return {
        transform: [{ rotate: `${angleValue}deg` }],
      };
    }
    return {};
  }, [startPosition]);

  useEffect(() => {
    currentRate.addListener((i) => setNextRate(i.value));

    return () => {
      currentRate.removeAllListeners();
    };
  }, []);

  useUpdateEffect(() => {
    const startRate = (currentRate as any)._value;
    const endRate = format(rate);
    const duration = Math.abs(((startRate - endRate) * 1000) / speed);

    rateAnimated.current && rateAnimated.current.stop();

    rateAnimated.current = Animated.timing(currentRate, {
      toValue: endRate,
      duration,
      easing: Easing.linear,
      useNativeDriver: Platform.OS !== "web",
    });

    rateAnimated.current.start();
  }, [rate]);

  // 渐变色
  const renderGradient = () => {
    if (!color || !isObject(color)) {
      return null;
    }

    const Stops = Object.keys(color)
      .sort((a, b) => parseFloat(a) - parseFloat(b))
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line react/no-array-index-key
      .map((key, index) => (
        <Stop key={index} offset={key} stopColor={color[key]} />
      ));

    return (
      <Defs>
        <LinearGradient id={id} x1="100%" y1="0%" x2="0%" y2="0%">
          {Stops}
        </LinearGradient>
      </Defs>
    );
  };

  return (
    <View ref={ref} style={[style, styles.wrapper]}>
      <Svg
        viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
        style={[styles.svg, svgStyle]}
        fill="none"
      >
        {renderGradient()}
        {/* 轨道 */}
        <Path
          stroke={layerColor}
          fill={fill}
          strokeWidth={strokeWidth}
          d={path}
        />
        <AnimatePath
          d={path}
          stroke={isObject(color) ? `url(#${id})` : color}
          strokeWidth={strokeWidth + 1}
          strokeLinecap={strokeLinecap}
          strokeDasharray={[(PERIMETER * nextRate) / 100, PERIMETER]}
        />
      </Svg>
      <View style={styles.textContainer}>
        {text ? <Text style={styles.text}>{text}</Text> : children}
      </View>
    </View>
  );
});

Circle.displayName = "Circle";

export default Circle;
