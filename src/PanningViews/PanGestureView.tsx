import React, { memo, useRef } from "react";
import {
  Animated,
  GestureResponderEvent,
  LayoutChangeEvent,
  LayoutRectangle,
  PanResponder,
  PanResponderGestureState,
  StyleProp,
  ViewStyle,
} from "react-native";
import constants from "../utils/constants";

// eslint-disable-next-line no-shadow
export enum GestureDirections {
  // VERTICAL
  UP = "up",
  DOWN = "down",
}

export interface PanGestureViewProps {
  style?: StyleProp<ViewStyle>;
  onDismiss?: () => void;
  // 允许移动的方向 （默认是 down）
  direction?: GestureDirections;
  children?: React.ReactNode;
}

const SWIPE_VELOCITY = 1.8;
const SPEED = 20;
const BOUNCINESS = 6;

const PanGestureView = (props: PanGestureViewProps): JSX.Element => {
  const { children, direction = GestureDirections.DOWN, style } = props;
  const swipe = useRef<boolean>();
  const layout = useRef<LayoutRectangle>();
  const deltaY = useRef(new Animated.Value(0)).current;

  const handleMoveShouldSetPanResponder = (
    _e: GestureResponderEvent,
    gestureState: PanResponderGestureState
  ): boolean => {
    // return true if user is swiping, return false if it's a single click
    const { dy } = gestureState;
    return dy > 5 || dy < -5;
  };

  const handlePanResponderGrant = () => {
    swipe.current = false;
  };

  const handlePanResponderMove = (
    _e: GestureResponderEvent,
    gestureState: PanResponderGestureState
  ) => {
    let newValue = 0;

    // VERTICAL
    const up = direction === GestureDirections.UP;
    const panDeltaY = gestureState.dy;
    const panVelocityY = gestureState.vy;

    if (Math.abs(panVelocityY) >= SWIPE_VELOCITY) {
      if ((up && panVelocityY < 0) || (!up && panVelocityY > 0)) {
        // Swipe
        swipe.current = true;
      }
    } else if ((up && panDeltaY < 0) || (!up && panDeltaY > 0)) {
      // Drag
      newValue = panDeltaY;
      animateDeltaY(Math.round(newValue));
    }
  };

  const onAnimatedFinished = ({ finished }: { finished: boolean }) => {
    if (finished) {
      onDismiss();
    }
  };

  const initPositions = () => {
    deltaY.setValue(0);
  };

  const onDismiss = () => {
    initPositions();
    props.onDismiss?.();
  };

  const animateDeltaY = (toValue: number) => {
    Animated.spring(deltaY, {
      toValue,
      useNativeDriver: true,
      speed: SPEED,
      bounciness: BOUNCINESS,
    }).start();
  };

  const animateDismiss = () => {
    // VERTICAL
    const up = direction === GestureDirections.UP;
    const newValue = up
      ? -layout!.current!.height - constants.statusBarHeight
      : // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        deltaY._value + constants.screenHeight;

    Animated.timing(deltaY, {
      toValue: Math.round(newValue),
      useNativeDriver: true,
      duration: 280,
    }).start(onAnimatedFinished);
  };

  const handlePanResponderEnd = () => {
    if (!swipe.current) {
      // VERTICAL
      const up = direction === GestureDirections.UP;
      const threshold = layout!.current!.height / 2;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const endValue = Math.round(deltaY._value);

      if ((up && endValue <= -threshold) || (!up && endValue >= threshold)) {
        animateDismiss();
      } else {
        // back to initial position
        animateDeltaY(0);
      }
    } else {
      animateDismiss();
    }
  };

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: handleMoveShouldSetPanResponder,
      onPanResponderGrant: handlePanResponderGrant,
      onPanResponderMove: handlePanResponderMove,
      onPanResponderRelease: handlePanResponderEnd,
      onPanResponderTerminate: handlePanResponderEnd,
    })
  ).current;

  const onLayout = (event: LayoutChangeEvent) => {
    layout.current = event.nativeEvent.layout;
  };

  return (
    <Animated.View
      style={[
        style,
        {
          transform: [
            {
              translateY: deltaY,
            },
          ],
        },
      ]}
      {...panResponder.panHandlers}
      onLayout={onLayout}
    >
      {children}
    </Animated.View>
  );
};

PanGestureView.displayName = "PanGestureView";
PanGestureView.directions = GestureDirections;

export default memo(PanGestureView);
