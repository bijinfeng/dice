import React, { memo, useState, forwardRef, useCallback, useMemo } from 'react';
import { Pressable, GestureResponderEvent, ViewStyle, StyleSheet, View } from 'react-native';
import throttle from 'lodash-es/throttle';
import type { TouchableOpacityProps } from './type';

const TouchableOpacity = forwardRef<View, TouchableOpacityProps>((props, ref) => {
  const {
    onPress,
    onPressIn,
    onPressOut,
    throttleTime = 0,
    throttleOptions = { leading: true, trailing: false },
    backgroundColor,
    activeBackgroundColor,
    style,
    activeOpacity = 1,
    ...rest
  } = props;
  const [active, setActive] = useState<boolean>(false);

  const handlePress = useCallback(
    throttle((e: GestureResponderEvent) => onPress?.(e), throttleTime, throttleOptions),
    []
  );
  const handlePressIn = useCallback((event: GestureResponderEvent) => {
    setActive(true);
    onPressIn?.(event);
  }, []);
  const handlePressOut = useCallback((event: GestureResponderEvent) => {
    setActive(false);
    onPressOut?.(event);
  }, []);

  const backgroundStyle = useMemo<ViewStyle>(() => {
    if (active && activeBackgroundColor) {
      return { opacity: activeOpacity, backgroundColor: activeBackgroundColor };
    }

    if (active) {
      return { opacity: activeOpacity };
    }

    if (backgroundColor) {
      return { backgroundColor };
    }

    return {};
  }, [active, backgroundColor, activeBackgroundColor]);

  return (
    <Pressable
      {...rest}
      onPress={handlePress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      ref={ref}
      style={StyleSheet.flatten([style, backgroundStyle])}
    />
  );
});

TouchableOpacity.displayName = 'TouchableOpacity';

export default memo(TouchableOpacity);
