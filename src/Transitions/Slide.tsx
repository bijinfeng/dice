import React, { forwardRef, memo } from "react";
import { View } from "react-native";
import Overlay from "../Overlay";
import Transition from "./Transition";
import type { Placement, SlideProps } from "./types";

const holderStyle: Record<Placement, any> = {
  top: {
    top: 0,
    right: 0,
    left: 0,
  },
  right: {
    right: 0,
    top: 0,
    bottom: 0,
  },
  bottom: {
    bottom: 0,
    right: 0,
    left: 0,
  },
  left: {
    left: 0,
    bottom: 0,
    top: 0,
  },
};

const Slide = forwardRef<any, SlideProps>((props, ref) => {
  const {
    in: visible,
    duration,
    delay,
    placement = "bottom",
    overlay,
    children,
    ...rest
  } = props;

  const [containerOpacity, setContainerOpacity] = React.useState(0);
  const [size, setSize] = React.useState(0);

  const provideSize = (layoutSize: any) => {
    if (placement === "right" || placement === "left")
      setSize(layoutSize.width);
    else setSize(layoutSize.height);
    setContainerOpacity(1);
  };

  const transition = { duration };

  const animationStyle: Record<Placement, any> = {
    top: {
      initial: {
        translateY: -size,
      },
      animate: {
        translateY: 0,
        transition,
      },
    },
    bottom: {
      initial: {
        translateY: size,
      },
      animate: {
        translateY: 0,
        transition,
      },
      exit: {
        translateY: size,
        transition,
      },
    },
    left: {
      initial: {
        translateX: -size,
      },
      animate: {
        translateX: 0,
        transition,
      },
    },
    right: {
      initial: {
        translateX: size,
      },
      animate: {
        translateX: 0,
        transition,
      },
    },
  };

  const slideComponent = (
    <Transition
      visible={visible}
      {...animationStyle[placement]}
      style={[
        { position: "absolute" },
        holderStyle[placement],
        { height: "100%" },
      ]}
    >
      <View
        {...rest}
        style={[{ opacity: containerOpacity }, rest.style]}
        pointerEvents="box-none"
        ref={ref}
        onLayout={(e) => provideSize(e.nativeEvent.layout)}
      >
        {children}
      </View>
    </Transition>
  );

  if (overlay) {
    return (
      <Overlay visible={visible}>
        <View pointerEvents="box-none">{slideComponent}</View>
      </Overlay>
    );
  }
  return slideComponent;
});

Slide.defaultProps = {
  duration: 500,
  placement: "bottom",
  overlay: true,
};
Slide.displayName = "Transitions.Slide";

export default memo(Slide);
