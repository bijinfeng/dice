import { useCallback, useRef, useState } from 'react';
import type { Dispatch, SetStateAction, MutableRefObject } from 'react';
import isFunction from 'lodash-es/isFunction';

type StateType<T> = T | (() => T);

export default function useRefState<T>(
  initialState: StateType<T>
): [T, Dispatch<SetStateAction<T>>, MutableRefObject<T>] {
  const [state, setState] = useState<T>(initialState);
  const ref = useRef(state);
  const setRafState = useCallback<Dispatch<SetStateAction<T>>>(
    patch => {
      setState(prevState => {
        // eslint-disable-next-line no-return-assign
        return (ref.current = isFunction(patch) ? patch(prevState) : patch);
      });
    },
    [state]
  );
  return [state, setRafState, ref];
}
