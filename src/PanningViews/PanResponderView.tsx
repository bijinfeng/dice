import React, { memo, useContext, useEffect, useRef } from "react";
import type { StyleProp, ViewProps, ViewStyle } from "react-native";
import { Animated, View } from "react-native";
import { useUpdateEffect } from "../hooks";
import type { PanAmountsProps, PanLocationProps } from "./PanningContext";
import PanningContext from "./PanningContext";

export interface PanResponderViewProps extends Omit<ViewProps, "style"> {
  onPanLocationChanged?: (location: PanLocationProps) => void;
  ignorePanning?: boolean;
  isAnimated?: boolean;
  style?: StyleProp<ViewStyle | Animated.AnimatedProps<ViewStyle>>;
}

const PanResponderView = (props: PanResponderViewProps): JSX.Element => {
  const {
    ignorePanning,
    children,
    isAnimated = false,
    onPanLocationChanged,
    ...others
  } = props;
  const context = useContext(PanningContext);
  const containerRef = useRef<View>();
  const left = useRef<number>();
  const top = useRef<number>();
  const initialLeft = useRef(0);
  const initialTop = useRef(0);

  const prevDragDeltas = useRef(context.dragDeltas);

  useUpdateEffect(() => {
    if (!ignorePanning) {
      const { dragDeltas, isPanning } = context;
      if (
        isPanning &&
        (dragDeltas.x || dragDeltas.y) &&
        (dragDeltas.x !== prevDragDeltas.current.x ||
          dragDeltas.y !== prevDragDeltas.current.y)
      ) {
        onDrag(dragDeltas);
      }
      if (!isPanning) {
        onPanEnd();
      }
      prevDragDeltas.current = { ...dragDeltas };
    }
  }, [ignorePanning, context.isPanning, context.dragDeltas]);

  useEffect(() => {
    setNativeProps(initialLeft.current, initialTop.current);
  }, []);

  const onPanEnd = () => {
    const location: PanLocationProps = { left: left.current, top: top.current };
    initialLeft.current = left.current || initialLeft.current;
    initialTop.current = top.current || initialTop.current;
    onPanLocationChanged?.(location);
    context.onPanLocationChanged?.(location);
  };

  const onDrag = (deltas: PanAmountsProps) => {
    const _left = initialLeft.current + (deltas.x ? Math.round(deltas.x) : 0);
    const _top = initialTop.current + (deltas.y ? Math.round(deltas.y) : 0);

    setNativeProps(_left, _top);
  };

  const setNativeProps = (_left: number, _top: number) => {
    if (containerRef.current) {
      containerRef.current.setNativeProps({
        style: { left: _left, top: _top },
      });
      left.current = _left;
      top.current = _top;
    }
  };

  const Container = isAnimated ? Animated.View : View;

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <Container ref={containerRef} pointerEvents="box-none" {...others}>
      {children}
    </Container>
  );
};

PanResponderView.displayName = "PanResponderView";

export default memo(PanResponderView);
