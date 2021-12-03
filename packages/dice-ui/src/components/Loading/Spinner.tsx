import React, { FC, memo, useRef, useEffect } from 'react';
import { View, StyleSheet, Animated, Platform, Easing } from 'react-native';

interface Props {
  color: string;
  size: number;
}

const DURATION = 800;

const Spinner: FC<Props> = memo(({ color, size }) => {
  const rotate = useRef(new Animated.Value(0)).current;

  const startRotation = React.useCallback(() => {
    Animated.loop(
      Animated.timing(rotate, {
        toValue: 1,
        duration: DURATION,
        // Animated.loop does not work if useNativeDriver is true on web
        useNativeDriver: Platform.OS !== 'web',
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
      style={[
        styles.container,
        {
          width: size,
          height: size,
          transform: [
            {
              rotate: rotate.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '360deg'],
              }),
            },
          ],
        },
      ]}
    >
      {Array(12)
        .fill(null)
        .map((_, index) => (
          <View
            style={[
              styles.wrapper,
              {
                transform: [{ rotate: `${(index + 1) * 30}deg` }],
                opacity: 1 - (0.75 / 12) * index,
              },
            ]}
            key={index.toString()}
          >
            <View style={[styles.line, { backgroundColor: color, borderRadius: size * 0.4 }]} />
          </View>
        ))}
    </Animated.View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  line: {
    height: '25%',
    marginHorizontal: 'auto',
    marginVertical: 0,
    width: 2,
  },
  wrapper: {
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%',
  },
});

export default Spinner;
