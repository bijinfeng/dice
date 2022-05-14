import React, { useEffect, useRef, useCallback, useContext } from 'react';
import { Animated, Easing, StyleProp, ViewStyle, LayoutChangeEvent, View } from 'react-native';
import {
  PanResponderView,
  PanningProvider,
  PanningContext,
  PanningDirections,
  PanLocationProps,
  PanDirectionsProps,
  PanningContextState,
  PanAmountsProps,
} from '../../PanningViews';
import constants from '../../utils/constants';

const MAXIMUM_DRAGS_AFTER_SWIPE = 2;

interface Props {
  children?: React.ReactNode | React.ReactNode[];
  style?: StyleProp<ViewStyle>;
  direction?: PanningDirections;
  onDismiss?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  visible?: boolean;
}

interface LocationProps {
  left: number;
  top: number;
}

const DialogDismissibleView = (props: Props): JSX.Element => {
  const { children, style, direction, onDismiss, containerStyle, visible: propsVisible } = props;
  const { isPanning, dragDeltas, swipeDirections } =
    useContext<PanningContextState>(PanningContext);

  const width = useRef<number>(constants.screenWidth);
  const height = useRef<number>(constants.screenHeight);
  const thresholdX = useRef<number>(0);
  const thresholdY = useRef<number>(0);
  const dragsCounter = useRef<number>(0);
  const containerRef = useRef<View>(null);
  const animatedValue = useRef<Animated.AnimatedValue>(new Animated.Value(0));
  const mutableSwipeDirections = useRef<PanDirectionsProps>({});
  const TOP_INSET = useRef<number>(
    constants.isIphoneX ? constants.getSafeAreaInsets().top : constants.isIOS ? 20 : 0
  );
  const BOTTOM_INSET = useRef<number>(
    constants.isIphoneX ? constants.getSafeAreaInsets().bottom : constants.isIOS ? 20 : 0
  );
  const prevDragDeltas = useRef<PanAmountsProps>();
  const prevSwipeDirections = useRef<PanDirectionsProps>();
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
          result.top = -top - height.current - TOP_INSET.current;
          break;
        case PanningProvider.Directions.DOWN:
        default:
          result.top = constants.screenHeight - top + BOTTOM_INSET.current;
          break;
      }

      return result;
    },
    [direction]
  );

  const hiddenLocation = useRef<LocationProps>(getHiddenLocation(0, 0));

  const animateTo = useCallback((toValue: number, animationEndCallback?: Animated.EndCallback) => {
    Animated.timing(animatedValue.current, {
      toValue,
      duration: 300,
      easing: Easing.bezier(0.2, 0, 0.35, 1),
      useNativeDriver: true,
    }).start(animationEndCallback);
  }, []);

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
      (dragDeltas.x !== prevDragDeltas.current?.x || dragDeltas.y !== prevDragDeltas.current?.y)
    ) {
      onDrag();
      prevDragDeltas.current = dragDeltas;
    }
  }, [isPanning, dragDeltas, onDrag, hide]);

  useEffect(() => {
    if (
      isPanning &&
      (swipeDirections.x || swipeDirections.y) &&
      (swipeDirections.x !== prevSwipeDirections.current?.x ||
        swipeDirections.y !== prevSwipeDirections.current?.y)
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
      const { layout } = event.nativeEvent;
      width.current = layout.width;
      height.current = layout.height;
      thresholdX.current = width.current / 2;
      thresholdY.current = height.current / 2;

      hiddenLocation.current = getHiddenLocation(layout.x, layout.y);
      animateTo(1);
    },
    [getHiddenLocation]
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
      const toValue = [PanningProvider.Directions.LEFT, PanningProvider.Directions.RIGHT].includes(
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        _direction
      )
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
          (direction === PanningProvider.Directions.LEFT && endValue.x <= -thresholdX.current) ||
          (direction === PanningProvider.Directions.RIGHT && endValue.x >= thresholdX.current) ||
          (direction === PanningProvider.Directions.UP && endValue.y <= -thresholdY.current) ||
          (direction === PanningProvider.Directions.DOWN && endValue.y >= thresholdY.current)
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
    <View ref={containerRef} style={containerStyle} onLayout={onLayout}>
      <PanResponderView
        style={[style, getAnimationStyle(), !visible.current && { opacity: 0 }]}
        isAnimated
        onPanLocationChanged={onPanLocationChanged}
      >
        {children}
      </PanResponderView>
    </View>
  );
};

export default DialogDismissibleView;
