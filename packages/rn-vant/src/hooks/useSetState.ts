import { Dispatch, MutableRefObject, SetStateAction, useCallback } from 'react';
import isFunction from 'lodash-es/isFunction';
import useRefState from './useRefState';
import useUnmountedRef from './useUnmountedRef';

// eslint-disable-next-line @typescript-eslint/ban-types
const useSetState = <T extends object>(
  initialState: T = {} as T
): [T, Dispatch<SetStateAction<Partial<T>>>, MutableRefObject<T>] => {
  const unmountedRef = useUnmountedRef();
  const [state, setState, ref] = useRefState<T>(initialState);

  const setMergeState = useCallback<Dispatch<SetStateAction<Partial<T>>>>(patch => {
    if (unmountedRef.current) return;
    setState(prevState => ({ ...prevState, ...(isFunction(patch) ? patch(prevState) : patch) }));
  }, []);

  return [state, setMergeState, ref];
};

export default useSetState;
