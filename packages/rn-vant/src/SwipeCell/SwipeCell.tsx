import React, { forwardRef } from 'react';
import isFunction from 'lodash-es/isFunction';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import type {
  SwipeCellRenderAction,
  SwipeCellInstance,
  SwipeCellProps,
  SwipeCellSide,
} from './type';

const SwipeCell = forwardRef<SwipeCellInstance, SwipeCellProps>((props, instanceRef) => {
  const { name = '', style, disabled, children, leftAction, rightAction } = props;
  const swipeableRef = React.useRef<Swipeable>(null);

  const onSwipeableOpen = (position: SwipeCellSide) => {
    props.onOpen?.({ name, position });
  };

  const onSwipeableClose = (position: SwipeCellSide) => {
    props.onClose?.({ name, position });
  };

  const renderLeftActions: SwipeCellRenderAction = (...args) => {
    return isFunction(leftAction) ? leftAction(...args) : <>{leftAction}</>;
  };

  const renderRightActions: SwipeCellRenderAction = (...args) => {
    return isFunction(rightAction) ? rightAction(...args) : <>{rightAction}</>;
  };

  React.useImperativeHandle(instanceRef, () => ({
    open: (side: SwipeCellSide) => {
      if (side === 'left') {
        swipeableRef.current?.openLeft();
      } else {
        swipeableRef.current?.openRight();
      }
    },
    close: () => {
      swipeableRef.current?.close();
    },
  }));

  if (disabled) return <>{children}</>;

  return (
    <Swipeable
      ref={swipeableRef}
      enableTrackpadTwoFingerGesture
      overshootLeft={false}
      overshootRight={false}
      onSwipeableOpen={onSwipeableOpen}
      onSwipeableClose={onSwipeableClose}
      renderLeftActions={renderLeftActions}
      renderRightActions={renderRightActions}
      containerStyle={style}
    >
      {children}
    </Swipeable>
  );
});

export default SwipeCell;
