import React, { useCallback, useContext, useEffect, useRef } from "react";
import { Animated, Easing, LayoutChangeEvent, View } from "react-native";
import {
  PanAmountsProps,
  PanDirectionsProps,
  PanLocationProps,
  PanningContext,
  PanningContextState,
  PanningDirections,
  PanningProvider,
  PanResponderView,
} from "../PanningViews";
import constants from "../utils/constants";

const MAXIMUM_DRAGS_AFTER_SWIPE = 2;

interface Props {
  duration: number;
  children?: React.ReactNode | React.ReactNode[];
  direction?: PanningDirections;
  onDismiss?: () => void;
  visible?: boolean;
  ignorePanning?: boolean;
}

interface LocationProps {
  left: number;
  top: number;
}

// eslint-disable-next-line prettier/prettier
const TOP_INSET = constants.isIphoneX
  ? constants.getSafeAreaInsets().top
  : constants.isIOS
  ? 20
  : 0;
// eslint-disable-next-line prettier/prettier
const BOTTOM_INSET = constants.isIphoneX
  ? constants.getSafeAreaInsets().bottom
  : constants.isIOS
  ? 20
  : 0;

const DialogDismissibleView = (props: Props): JSX.Element => {
  const { children, direction, onDismiss, visible: propsVisible } = props;
  const { isPanning, dragDeltas, swipeDirections } =
    useContext<PanningContextState>(PanningContext);

  const width = useRef<number>(constants.screenWidth);
  const height = useRef<number>(constants.screenHeight);
  const thresholdX = useRef<number>(0);
  const thresholdY = useRef<number>(0);
  const dragsCounter = useRef<number>(0);
  const animatedValue = useRef<Animated.AnimatedValue>(new Animated.Value(0));
  const mutableSwipeDirections = useRef<PanDirectionsProps>({});
  const prevDragDeltas = useRef<PanAmountsProps>();
  const visible = useRef<boolean>(Boolean(propsVisible));

  const getHiddenLocation = useCallback(
    (left: number, top: number) => {
      const result = { left: 0, top: 0 };
      switch (direction) {
        case PanningProvider.Directions.LEFT:
          result.left = -left - width.current;
          break;
        case PanningProvider.Directions.RIGHT:
          result.left = constants.screenWidth - left;
          break;
        case PanningProvider.Directions.UP:
          result.top = -top - height.current - TOP_INSET;
          break;
        case PanningProvider.Directions.DOWN:
        default:
          result.top = constants.screenHeight - top + BOTTOM_INSET;
          break;
      }

      return result;
    },
    [direction]
  );

  const hiddenLocation = useRef<LocationProps>(getHiddenLocation(0, 0));

  const animateTo = useCallback(
    (toValue: number, animationEndCallback?: Animated.EndCallback) => {
      Animated.timing(animatedValue.current, {
        toValue,
        duration: props.duration,
        easing: Easing.bezier(0.2, 0, 0.35, 1),
        useNativeDriver: true,
      }).start(animationEndCallback);
    },
    [props.duration]
  );

  const isSwiping = useCallback(() => {
    return (
      mutableSwipeDirections.current.x !== undefined ||
      mutableSwipeDirections.current.y !== undefined
    );
  }, []);

  const resetSwipe = useCallback(() => {
    dragsCounter.current = 0;
    mutableSwipeDirections.current = {};
  }, []);

  const onDrag = useCallback(() => {
    if (isSwiping()) {
      if (dragsCounter.current < MAXIMUM_DRAGS_AFTER_SWIPE) {
        dragsCounter.current += 1;
      } else {
        resetSwipe();
      }
    }
  }, [isSwiping, resetSwipe]);

  const hide = useCallback(() => {
    animateTo(0, () => {
      visible.current = false;
      onDismiss?.();
    });
  }, [animateTo, onDismiss]);

  useEffect(() => {
    if (
      isPanning &&
      (dragDeltas.x || dragDeltas.y) &&
      (dragDeltas.x !== prevDragDeltas.current?.x ||
        dragDeltas.y !== prevDragDeltas.current?.y)
    ) {
      onDrag();
      prevDragDeltas.current = dragDeltas;
    }
  }, [isPanning, dragDeltas, onDrag, hide]);

  useEffect(() => {
    if (
      isPanning &&
      (swipeDirections.x || swipeDirections.y) &&
      (swipeDirections.x !== mutableSwipeDirections.current?.x ||
        swipeDirections.y !== mutableSwipeDirections.current?.y)
    ) {
      mutableSwipeDirections.current = swipeDirections;
    }
  }, [isPanning, swipeDirections, hide]);

  useEffect(() => {
    if (visible.current && !propsVisible) {
      hide();
    }
  }, [propsVisible, hide]);

  const onLayout = useCallback(
    (event: LayoutChangeEvent) => {
      if (propsVisible) {
        const { layout } = event.nativeEvent;
        width.current = layout.width;
        height.current = layout.height;
        thresholdX.current = width.current / 2;
        thresholdY.current = height.current / 2;
        hiddenLocation.current = getHiddenLocation(layout.x, layout.y);
        animateTo(1);
      }
    },
    [getHiddenLocation, propsVisible]
  );

  const getAnimationStyle = useCallback(() => {
    return {
      transform: [
        {
          translateX: animatedValue.current.interpolate({
            inputRange: [0, 1],
            outputRange: [hiddenLocation.current.left, 0],
          }),
        },
        {
          translateY: animatedValue.current.interpolate({
            inputRange: [0, 1],
            outputRange: [hiddenLocation.current.top, 0],
          }),
        },
      ],
    };
  }, []);

  const resetToShown = useCallback(
    (left: number, top: number, _direction?: PanningDirections) => {
      const toValue =
        _direction &&
        (_direction === PanningProvider.Directions.LEFT ||
          _direction === PanningProvider.Directions.RIGHT)
          ? 1 + left / hiddenLocation.current.left
          : 1 + top / hiddenLocation.current.top;

      animateTo(toValue);
    },
    [animateTo]
  );

  const onPanLocationChanged = useCallback(
    ({ left = 0, top = 0 }: PanLocationProps) => {
      const endValue = { x: Math.round(left), y: Math.round(top) };
      if (isSwiping()) {
        hide();
      } else {
        resetSwipe();
        if (
          (direction === PanningProvider.Directions.LEFT &&
            endValue.x <= -thresholdX.current) ||
          (direction === PanningProvider.Directions.RIGHT &&
            endValue.x >= thresholdX.current) ||
          (direction === PanningProvider.Directions.UP &&
            endValue.y <= -thresholdY.current) ||
          (direction === PanningProvider.Directions.DOWN &&
            endValue.y >= thresholdY.current)
        ) {
          hide();
        } else {
          resetToShown(left, top, direction);
        }
      }
    },
    [isSwiping, hide, resetSwipe, direction, resetToShown]
  );

  return (
    <View onLayout={onLayout}>
      <PanResponderView
        style={getAnimationStyle()}
        isAnimated
        onPanLocationChanged={onPanLocationChanged}
        ignorePanning={props.ignorePanning}
      >
        {children}
      </PanResponderView>
    </View>
  );
};

export default DialogDismissibleView;
