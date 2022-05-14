import React, { forwardRef, useState } from 'react';
import { View, Animated } from 'react-native';
import type { LayoutChangeEvent } from 'react-native';
import MultiSlider, { MarkerProps } from '@ptomasroos/react-native-multi-slider';

import { range, addNumber } from '../utils/number';
import { useUpdateEffect, useMemoizedFn } from '../hooks';
import type { SliderProps } from './types';
import { useThemeFactory } from '../Theme';
import { createStyle } from './style';
import shadow from '../styles/shadow';

const Slider = forwardRef<View, SliderProps>((props, ref) => {
  const {
    min = 0,
    max = 100,
    step = 1,
    button,
    leftButton,
    rightButton,
    onDragStart,
    onDragEnd,
    onChange,
    onChangeAfter,
    disabled,
    readonly,
    vertical,
  } = props;

  const isRange = (val: unknown): val is [number, number] => !!(props.range && Array.isArray(val));
  const format = (val: number) => {
    const rangeVal = range(val, min, max);
    const diff = Math.round((rangeVal - min) / step) * step;
    return addNumber(min, diff);
  };
  const isSameValue = (newValue: number[], oldValue: number[]) => {
    return JSON.stringify(newValue) === JSON.stringify(oldValue);
  };
  const getOutputValue = (values: number[]) => {
    return (props.range ? values : values[0]) as number & [number, number];
  };

  // 初始化
  const initializeValue = (value?: number | number[]): number[] => {
    if (isRange(value)) {
      return value.map(format);
    }
    return value ? [format(value as number)] : [min];
  };

  const [sliderWidth, setSliderWidth] = useState<number>();
  const [multiValue, setMultiValue] = useState<number[]>(() => initializeValue(props.value));

  const isMarkersSeparated = React.isValidElement(leftButton) && React.isValidElement(rightButton);

  useUpdateEffect(() => {
    const iValue = initializeValue(props.value);
    const isSame = isSameValue(iValue, multiValue);
    if (!isSame) {
      setMultiValue(iValue);
    }
  }, [props.value]);

  const { styles } = useThemeFactory(createStyle, {
    inactiveColor: props.inactiveColor,
    activeColor: props.activeColor,
    buttonSize: props.buttonSize,
    disabled: props.disabled,
    barHeight: props.barHeight,
  });

  const handleContainerLayout = (event: LayoutChangeEvent) => {
    const { layout } = event.nativeEvent;

    setSliderWidth(vertical ? layout.height : layout.width);
  };

  const onValueChanged = useMemoizedFn((values: number[]) => {
    setMultiValue(values);
    onChange?.(getOutputValue(values));
  });

  const onValuesChangeFinish = useMemoizedFn((values: number[]) => {
    onChangeAfter?.(getOutputValue(values));
    onDragEnd?.(getOutputValue(values));
  });

  const onValuesChangeStart = useMemoizedFn(() => {
    onDragStart?.(getOutputValue(multiValue));
  });

  const CustomMarker = useMemoizedFn<React.FC<MarkerProps>>(() => {
    return React.isValidElement(button) ? (
      button
    ) : (
      <Animated.View style={[styles.thumb, shadow(2)]} />
    );
  });

  const customMarkerLeft = useMemoizedFn<React.FC<MarkerProps>>(() => {
    return React.isValidElement(leftButton) ? leftButton : null;
  });

  const customMarkerRight = useMemoizedFn<React.FC<MarkerProps>>(() => {
    return React.isValidElement(rightButton) ? rightButton : null;
  });

  const actualDisabled = disabled || readonly;

  return (
    <View ref={ref} onLayout={handleContainerLayout} style={props.style}>
      <MultiSlider
        min={min}
        max={max}
        step={step}
        vertical={vertical}
        sliderLength={sliderWidth}
        isMarkersSeparated={isMarkersSeparated}
        values={multiValue}
        onValuesChange={onValueChanged}
        onValuesChangeFinish={onValuesChangeFinish}
        onValuesChangeStart={onValuesChangeStart}
        selectedStyle={styles.filledTrack}
        unselectedStyle={styles.track}
        customMarker={CustomMarker}
        customMarkerLeft={customMarkerLeft}
        customMarkerRight={customMarkerRight}
        enabledOne={!actualDisabled}
        enabledTwo={!actualDisabled}
        snapped
        allowOverlap
      />
    </View>
  );
});

Slider.displayName = 'Slider';

export default Slider;
