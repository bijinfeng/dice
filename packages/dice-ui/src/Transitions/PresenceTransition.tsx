import React, { memo, forwardRef } from 'react';
import Transition from './Transition';
import { ExitAnimationContext } from '../Overlay/ExitAnimationContext';
import type { IPresenceTransitionProps } from './types';

const PresenceTransition = forwardRef<any, IPresenceTransitionProps>((props, ref) => {
  const { visible = false, onTransitionComplete, ...rest } = props;

  const { setExited } = React.useContext(ExitAnimationContext);

  return (
    <Transition
      visible={visible}
      onTransitionComplete={state => {
        if (state === 'exited') {
          setExited(true);
        } else {
          setExited(false);
        }
        onTransitionComplete && onTransitionComplete(state);
      }}
      {...rest}
      ref={ref}
    />
  );
});

export default memo(PresenceTransition);
