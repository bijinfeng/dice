import React, { memo, useState, forwardRef, useCallback, useMemo } from 'react';
import {
  TouchableOpacity as RNTouchableOpacity,
  GestureResponderEvent,
  ViewStyle,
} from 'react-native';
import throttle from 'lodash-es/throttle';
import type { TouchableOpacityProps } from './type';

const TouchableOpacity = forwardRef<RNTouchableOpacity, TouchableOpacityProps>(
  (props, ref): JSX.Element => {
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
        return { backgroundColor: activeBackgroundColor };
      }

      if (backgroundColor) {
        return { backgroundColor };
      }

      return {};
    }, [active, backgroundColor, activeBackgroundColor]);

    return (
      <RNTouchableOpacity
        {...rest}
        onPress={handlePress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        ref={ref}
        style={[style, backgroundStyle]}
        activeOpacity={activeOpacity}
      />
    );
  }
);

TouchableOpacity.displayName = 'TouchableOpacity';

export default memo(TouchableOpacity);
