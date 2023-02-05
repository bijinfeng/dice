import React, { forwardRef, memo } from "react";

import Transition from "./Transition";
import type { ScaleFadeProps } from "./types";

const ScaleFade = forwardRef<any, ScaleFadeProps>((props, ref) => {
  const {
    children,
    initialScale,
    duration,
    in: animationState,
    ...rest
  } = props;

  return (
    <Transition
      initial={{ opacity: 0, scale: initialScale }}
      animate={{ opacity: 1, scale: 1, transition: { duration } }}
      exit={{ opacity: 0, scale: initialScale, transition: { duration } }}
      visible={animationState}
      ref={ref}
      {...rest}
    >
      {children}
    </Transition>
  );
});

ScaleFade.defaultProps = {
  duration: 500,
  initialScale: 0.9,
};
ScaleFade.displayName = "Transitions.ScaleFade";

export default memo(ScaleFade);
