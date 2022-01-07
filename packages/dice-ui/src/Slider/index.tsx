import React, { forwardRef, useRef, useState, useCallback, useMemo, useEffect } from 'react';
import type { LayoutChangeEvent, ViewStyle } from 'react-native';
import { View, Animated, PanResponder } from 'react-native';

import type { SliderProps } from './types';
import { useThemeFactory } from '../Theme';
import { createStyle } from './style';
import shadow from '../styles/shadow';
import { useValue } from './hooks';
import { getValueForPosition, getActiveThumb, clamp } from './helpers';

const trueFunc = () => true;

const Slider = forwardRef<View, SliderProps>((props, ref) => {
  const { min = 0, max = 100, step = 1, button, onDragStart, onDragEnd } = props;
  const { styles } = useThemeFactory(createStyle, {
    inactiveColor: props.inactiveColor,
    activeColor: props.activeColor,
    buttonSize: props.buttonSize,
    disabled: props.disabled,
    barHeight: props.barHeight,
  });

  const [value, setValue] = useValue(props);
  // 每个 thumb left 百分比
  const [positionValue, setPositionValue] = useState<Animated.Value[]>([]);
  const activeThumbIndex = useRef<number>(0);

  // 只读和禁用都会禁止滑动滑块
  const disabled = props.disabled || props.readonly;

  // 容器的宽度
  const containerWidthRef = useRef<number>(0);
  // 按钮的宽度 / 2
  const thumbTranslateX = useRef(new Animated.Value(0)).current;

  const handleContainerLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    containerWidthRef.current = width;
    updatePositionValue();
  };

  const handleThumbLayout = useCallback((event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    if (Math.abs((thumbTranslateX as any)._value * 2) !== width) {
      thumbTranslateX.setValue(-width / 2);
    }
  }, []);

  // 将 value 转换成坐标
  const getPosition = useCallback(
    (it: number) => ((it - min) / (max - min)) * containerWidthRef.current,
    [min, max]
  );

  // update positionValue
  const updatePositionValue = useCallback(() => {
    if (positionValue.length !== value.length) {
      setPositionValue(value.map(it => new Animated.Value(getPosition(it))));
    } else {
      value.forEach((it, index) => {
        const calcPosition = getPosition(it);
        if ((positionValue[index] as any)._value !== calcPosition) {
          positionValue[index].setValue(calcPosition);
        }
      });
    }
  }, [positionValue, value, getPosition]);

  // positionInView 为触摸点在容器内的 X 轴坐标
  const handlePositionChange = useCallback(
    (positionInView: number, isMove: boolean) => {
      const containerWidth = containerWidthRef.current;
      const clampPositionInView = clamp(positionInView, 0, containerWidth);

      if (!isMove) {
        // 计算获离得得最近的按钮
        const index = getActiveThumb(clampPositionInView, value, min, max, containerWidth);
        activeThumbIndex.current = index;
      }

      const position = getValueForPosition(clampPositionInView, containerWidth, min, max, step);

      const minValue = value[activeThumbIndex.current - 1] ?? min;
      const maxValue = value[activeThumbIndex.current + 1] ?? max;
      const lastPosition = clamp(position, minValue, maxValue);

      // 设置移动的 thumb 的 postion 值
      positionValue[activeThumbIndex.current].setValue(getPosition(lastPosition));

      value[activeThumbIndex.current] = lastPosition;
      setValue(value);
    },
    [min, max, step, value, getPosition, positionValue]
  );

  const { panHandlers } = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: trueFunc,
        onStartShouldSetPanResponderCapture: trueFunc,
        onMoveShouldSetPanResponder: trueFunc,
        onMoveShouldSetPanResponderCapture: trueFunc,
        onPanResponderTerminationRequest: trueFunc,
        onPanResponderTerminate: trueFunc,
        onShouldBlockNativeResponder: trueFunc,

        onPanResponderGrant: ({ nativeEvent }, gestureState) => {
          const { numberActiveTouches } = gestureState;
          if (numberActiveTouches > 1) {
            return;
          }

          onDragStart?.();

          // locationX - 相对于元素的 X 坐标
          handlePositionChange(nativeEvent.locationX, false);
        },

        onPanResponderMove: ({ nativeEvent }) => {
          handlePositionChange(nativeEvent.locationX, true);
        },

        onPanResponderRelease: () => {
          onDragEnd?.();
        },
      }),
    [onDragStart, onDragEnd, handlePositionChange]
  );

  useEffect(() => {
    if (containerWidthRef.current) {
      updatePositionValue();
    }
  }, [value]);

  // 划过的轨道的样式
  const filledTrackStyle = useMemo<Animated.WithAnimatedObject<ViewStyle>>(() => {
    let left: number | Animated.Value = 0;
    let width: number | Animated.Value | Animated.AnimatedInterpolation = 0;
    if (positionValue.length === 1) {
      width = positionValue[positionValue.length - 1];
    } else if (positionValue.length > 1) {
      left = positionValue[0];
      width = Animated.subtract(positionValue[positionValue.length - 1], positionValue[0]);
    }

    return { position: 'absolute', left, width };
  }, [positionValue]);

  return (
    <View onLayout={handleContainerLayout} style={[styles.container, props.style]} ref={ref}>
      <View style={styles.trackContainer}>
        {/* 背景轨道 */}
        <View style={styles.track} />
        <Animated.View style={filledTrackStyle}>
          <View style={styles.filledTrack} />
        </Animated.View>
      </View>
      {/* 可滑动的按钮 */}
      {positionValue.map((percent, index) => (
        <Animated.View
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          style={{
            left: percent,
            transform: [{ translateX: thumbTranslateX }],
            position: index === 0 ? 'relative' : 'absolute',
          }}
          onLayout={index === 0 ? handleThumbLayout : undefined}
        >
          {button || <Animated.View style={[styles.thumb, shadow(2)]} />}
        </Animated.View>
      ))}
      <View {...(disabled ? {} : panHandlers)} collapsable={false} style={styles.touchableArea} />
    </View>
  );
});

Slider.displayName = 'Slider';

export default Slider;
