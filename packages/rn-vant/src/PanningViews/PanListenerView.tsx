import React, { memo, useRef, useContext } from 'react';
import { View, PanResponder, GestureResponderEvent, PanResponderGestureState } from 'react-native';
import type { ViewProps } from 'react-native';
import PanningContext, { PanningDirectionsEnum } from './PanningContext';
import type {
  PanningContextState,
  PanningDirections,
  PanDirectionsProps,
  PanAmountsProps,
} from './PanningContext';

type PanningProps = Partial<
  Pick<
    PanningContextState,
    'onDrag' | 'onSwipe' | 'onPanStart' | 'onPanRelease' | 'onPanTerminated'
  >
>;

export interface PanListenerViewProps extends PanningProps, ViewProps {
  /**
   * 允许平移的方向（默认允许所有方向）
   * types: UP, DOWN, LEFT and RIGHT
   */
  directions?: PanningDirections[];
  /**
   * 平移的灵敏度（移动超过这个距离后，视为移动，默认为 5）
   */
  panSensitivity?: number;
  /**
   * 超过该灵敏度的平移不再被视为拖动，而是滑动（默认为 1.8）
   * 注意：必须发生平移（即已超过 panSensitivity）
   */
  swipeVelocitySensitivity?: number;
  /**
   * PanListenerView 中是否有可点击的视图（具有 onPress 等）。
   * 这可能会影响此组件的可平移性。
   */
  isClickable?: boolean;
}

interface PanningResultProps {
  selectedDirections: PanDirectionsProps;
  selectedAmounts: PanAmountsProps;
}

const DEFAULT_DIRECTIONS = [
  PanningDirectionsEnum.UP,
  PanningDirectionsEnum.DOWN,
  PanningDirectionsEnum.LEFT,
  PanningDirectionsEnum.RIGHT,
];
const DEFAULT_PAN_SENSITIVITY = 5;
const DEFAULT_SWIPE_VELOCITY = 1.8;

const yes = () => true;
const no = () => false;

const PanListenerView = (props: PanListenerViewProps): JSX.Element => {
  const {
    children,
    directions = DEFAULT_DIRECTIONS,
    panSensitivity = DEFAULT_PAN_SENSITIVITY,
    swipeVelocitySensitivity = DEFAULT_SWIPE_VELOCITY,
    isClickable,
    onSwipe,
    onDrag,
    onPanRelease,
    onPanTerminated,
    onPanStart,
    ...others
  } = props;
  const context = useContext(PanningContext);

  const shouldPan = (
    _e: GestureResponderEvent,
    gestureState: PanResponderGestureState
  ): boolean => {
    const { dy, dx } = gestureState;

    return Boolean(
      directions &&
        ((directions.includes(PanningDirectionsEnum.UP) && dy < -panSensitivity) ||
          (directions.includes(PanningDirectionsEnum.DOWN) && dy > panSensitivity) ||
          (directions.includes(PanningDirectionsEnum.LEFT) && dx < -panSensitivity) ||
          (directions.includes(PanningDirectionsEnum.RIGHT) && dx > panSensitivity))
    );
  };

  const handlePanStart = () => {
    onPanStart?.();
    context?.onPanStart?.();
  };

  const getSwipeDirection = ({ vx, vy }: { vx: number; vy: number }): PanningResultProps => {
    return getDirectionsOverSensitivity(vx, vy, swipeVelocitySensitivity);
  };

  const getDragDirection = ({ dx, dy }: { dx: number; dy: number }): PanningResultProps => {
    return getDirectionsOverSensitivity(dx, dy, 0);
  };

  const getDirectionsOverSensitivity = (
    x: number,
    y: number,
    sensitivity: number
  ): PanningResultProps => {
    const selectedDirections: PanDirectionsProps = {};
    const selectedAmounts: PanAmountsProps = {};

    if (directions.includes(PanningDirectionsEnum.LEFT) && x < -sensitivity) {
      selectedDirections.x = PanningDirectionsEnum.LEFT;
      selectedAmounts.x = x;
    } else if (directions.includes(PanningDirectionsEnum.RIGHT) && x > sensitivity) {
      selectedDirections.x = PanningDirectionsEnum.RIGHT;
      selectedAmounts.x = x;
    }

    if (directions.includes(PanningDirectionsEnum.UP) && y < -sensitivity) {
      selectedDirections.y = PanningDirectionsEnum.UP;
      selectedAmounts.y = y;
    } else if (directions.includes(PanningDirectionsEnum.DOWN) && y > sensitivity) {
      selectedDirections.y = PanningDirectionsEnum.DOWN;
      selectedAmounts.y = y;
    }

    return { selectedDirections, selectedAmounts };
  };

  const panResultHasValue = <T extends PanningResultProps>(panResult?: T): panResult is T => {
    return Boolean(panResult && (panResult.selectedDirections.x || panResult.selectedDirections.y));
  };

  const handlePanMove = (_e: GestureResponderEvent, gestureState: PanResponderGestureState) => {
    const hasSwipe = !!onSwipe;
    const hasDrag = !!onDrag;
    const hasContext = !!context;
    let panResult;
    if (hasSwipe || hasContext) {
      panResult = getSwipeDirection(gestureState);
    }

    if (panResultHasValue(panResult)) {
      const data = {
        directions: panResult.selectedDirections,
        velocities: panResult.selectedAmounts,
      };
      onSwipe?.(data);
      context?.onSwipe?.(data);
    } else if (hasDrag || hasContext) {
      panResult = getDragDirection(gestureState);
      if (panResultHasValue(panResult)) {
        const data = {
          directions: panResult.selectedDirections,
          deltas: panResult.selectedAmounts,
        };
        onDrag?.(data);
        context?.onDrag?.(data);
      }
    }
  };

  const handlePanRelease = () => {
    onPanRelease?.();
    context?.onPanRelease?.();
  };

  const handlePanTerminate = () => {
    onPanTerminated?.();
    context?.onPanTerminated?.();
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: isClickable ? shouldPan : yes,
      onMoveShouldSetPanResponder: shouldPan,
      onStartShouldSetPanResponderCapture: no,
      onMoveShouldSetPanResponderCapture: no,
      onPanResponderGrant: handlePanStart,
      onPanResponderMove: handlePanMove,
      onPanResponderRelease: handlePanRelease,
      onPanResponderTerminate: handlePanTerminate,
    })
  ).current;

  return (
    <View {...others} {...panResponder.panHandlers}>
      {children}
    </View>
  );
};

PanListenerView.displayName = 'PanListenerView';

export default memo(PanListenerView);
