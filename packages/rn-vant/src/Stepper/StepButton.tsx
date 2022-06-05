import React, { useRef } from 'react';
import { StyleProp, View, TextStyle, StyleSheet, GestureResponderEvent } from 'react-native';
import TouchableOpacity from '../TouchableOpacity';
import type { TouchableOpacityProps } from '../TouchableOpacity/type';

interface StepButtonProps extends TouchableOpacityProps {
  isPlus?: boolean;
  lineStyle?: StyleProp<TextStyle>;
  longPress?: boolean;
}

const LONG_PRESS_INTERVAL = 200;

const StepButton = (props: StepButtonProps): JSX.Element => {
  const { isPlus, lineStyle, style, onPress, onLongPress, onPressOut, ...rest } = props;
  const longPressTimer = useRef<ReturnType<typeof setTimeout>>();

  const handlePress = (event: GestureResponderEvent) => {
    onPress?.(event);
  };

  const handleLongPress = (event: GestureResponderEvent) => {
    onLongPress?.(event);
    longPressTimer.current = setTimeout(() => {
      handlePress(event);
      handleLongPress(event);
    }, LONG_PRESS_INTERVAL);
  };

  const handlePressOut = (event: GestureResponderEvent) => {
    onPressOut?.(event);
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
    }
  };

  return (
    <TouchableOpacity
      style={[styles.wrapper, style]}
      onPress={handlePress}
      onLongPress={handleLongPress}
      onPressOut={handlePressOut}
      {...rest}
    >
      <View style={[styles.horizontal, lineStyle]} />
      {isPlus && (
        <View style={styles.plusWrapper}>
          <View style={[styles.vertical, lineStyle]} />
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  horizontal: {
    height: 1,
    width: '50%',
  },
  plusWrapper: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%',
  },
  vertical: { height: '50%', width: 1 },
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
});

export default StepButton;
