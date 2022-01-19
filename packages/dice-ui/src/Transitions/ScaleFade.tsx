import React, { memo, forwardRef } from 'react';

import type { IScaleFadeProps } from './types';
import PresenceTransition from './PresenceTransition';

const ScaleFade = forwardRef<any, IScaleFadeProps>((props, ref) => {
  const { children, initialScale, duration, in: animationState, ...rest } = props;

  return (
    <PresenceTransition
      initial={{ opacity: 0, scale: initialScale }}
      animate={{ opacity: 1, scale: 1, transition: { duration } }}
      exit={{ opacity: 0, scale: initialScale, transition: { duration } }}
      visible={animationState}
      ref={ref}
      {...rest}
    >
      {children}
    </PresenceTransition>
  );
});

ScaleFade.defaultProps = {
  duration: 500,
  initialScale: 0.9,
};
ScaleFade.displayName = 'Transitions.ScaleFade';

export default memo(ScaleFade);
