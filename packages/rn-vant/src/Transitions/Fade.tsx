import React, { memo, forwardRef } from 'react';

import Transition from './Transition';
import type { FadeProps } from './types';

const Fade = forwardRef<any, FadeProps>((props, ref) => {
  const { children, in: animationState, entryDuration, exitDuration, ...rest } = props;

  return (
    <Transition
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: entryDuration } }}
      exit={{ opacity: 0, transition: { duration: exitDuration } }}
      visible={animationState}
      ref={ref}
      {...rest}
    >
      {children}
    </Transition>
  );
});

Fade.defaultProps = {
  entryDuration: 500,
  exitDuration: 500,
};
Fade.displayName = 'Transitions.Fade';

export default memo(Fade);
