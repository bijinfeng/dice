import React, { memo, forwardRef } from 'react';

import PresenceTransition from './PresenceTransition';
import type { IFadeProps } from './types';

const Fade = forwardRef<any, IFadeProps>((props, ref) => {
  const { children, in: animationState, entryDuration, exitDuration, ...rest } = props;

  return (
    <PresenceTransition
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: entryDuration } }}
      exit={{ opacity: 0, transition: { duration: exitDuration } }}
      visible={animationState}
      ref={ref}
      {...rest}
    >
      {children}
    </PresenceTransition>
  );
});

Fade.defaultProps = {
  entryDuration: 500,
  exitDuration: 500,
};
Fade.displayName = 'Transitions.Fade';

export default memo(Fade);
