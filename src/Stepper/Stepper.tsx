import isNil from "lodash-es/isNil";
import toString from "lodash-es/toString";
import React, { memo, useCallback, useMemo } from "react";
import {
  GestureResponderEvent,
  StyleSheet,
  TextInput,
  TextStyle,
  View,
} from "react-native";
import { useRefState } from "../hooks";
import { useThemeFactory } from "../Theme";
import { formatNumber } from "../utils/number";
import StepButton from "./StepButton";
import { createStyle } from "./style";
import type { StepperProps } from "./type";

const Stepper = (props: StepperProps): JSX.Element => {
  const {
    theme = "default",
    max = Number.MAX_VALUE,
    min = 1,
    step = 1,
    defaultValue = 1,
    showPlus = true,
    showMinus = true,
    showInput = true,
    longPress = true,
    allowEmpty,
    decimalLength,
    buttonSize,
    inputWidth,
    integer = false,
    ...rest
  } = props;

  const format = useCallback(
    (value: string | number) => {
      if (allowEmpty && value === "") {
        return value;
      }

      value = formatNumber(String(value), !integer);
      value = value === "" ? 0 : +value;
      value = isNaN(value) ? min : value;
      value = Math.max(Math.min(max, value), min);

      // format decimal
      if (!isNil(decimalLength)) {
        value = value.toFixed(+decimalLength);
      }

      return value;
    },
    [min, max, allowEmpty, decimalLength, integer]
  );

  const getInitialValue = () => {
    const _defaultValue = props.value ?? defaultValue;
    return Number(format(_defaultValue));
  };

  const [current, setCurrent, currentRef] = useRefState<number | undefined>(
    () => getInitialValue()
  );

  const minusDisabled = useMemo(
    () => props.disabled || props.disableMinus || (current ?? 0) <= min,
    [props.disabled, props.disableMinus, min, current]
  );

  const plusDisabled = useMemo(
    () => props.disabled || props.disablePlus || (current ?? 0) >= max,
    [props.disabled, props.disablePlus, max, current]
  );

  const innerChange = useCallback(
    async (value?: number) => {
      const couldChange = await Promise.resolve(
        props.beforeChange?.(value) ?? true
      );
      if (couldChange) {
        setCurrent(value);
        props.onChange?.(value);
      }
    },
    [props.onChange, props.beforeChange]
  );

  const handleMinus = (event: GestureResponderEvent) => {
    const value = Number(format((currentRef.current ?? 0) - step));
    innerChange(value);
    props.onMinus?.(event, value);
  };

  const handlePlus = (event: GestureResponderEvent) => {
    const value = Number(format((currentRef.current ?? 0) + step));
    innerChange(value);
    props.onPlus?.(event, value);
  };

  const handleInput = (text: string) => {
    if (text === "") {
      innerChange(undefined);
    } else {
      let formatted = formatNumber(text, !integer);
      // limit max decimal length
      if (!isNil(decimalLength) && formatted.includes(".")) {
        const pair = formatted.split(".");
        formatted = `${pair[0]}.${pair[1].slice(0, +decimalLength)}`;
      }
      innerChange(Number(formatted));
    }
  };

  const { styles, theme: globalTheme } = useThemeFactory(createStyle, {
    isRound: theme === "round",
    buttonSize,
    inputWidth,
    minusDisabled,
    plusDisabled,
  });
  const inputColor = StyleSheet.flatten<TextStyle>(styles.input).color;

  return (
    <View
      {...rest}
      style={[styles.stepper, rest.style]}
      onStartShouldSetResponder={() => true}
    >
      {showMinus && (
        <StepButton
          disabled={minusDisabled}
          activeOpacity={globalTheme.active_opacity}
          style={styles.minusButton}
          lineStyle={styles.minus}
          onPress={handleMinus}
          longPress={longPress}
        />
      )}
      {showInput && (
        <TextInput
          value={toString(current)}
          underlineColorAndroid="transparent"
          style={[styles.input, props.disabled && styles.disabledInput]}
          textAlign="center"
          selectionColor={inputColor}
          keyboardType="numeric"
          editable={!props.disableInput && !props.disabled}
          placeholder={props.placeholder}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
          onPressIn={props.onClick}
          onChangeText={handleInput}
        />
      )}
      {showPlus && (
        <StepButton
          isPlus
          disabled={plusDisabled}
          activeOpacity={globalTheme.active_opacity}
          style={styles.plusButton}
          lineStyle={styles.plus}
          onPress={handlePlus}
          longPress={longPress}
        />
      )}
    </View>
  );
};

export default memo(Stepper);
