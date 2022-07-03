import { useRef, useEffect } from 'react';

const useUnmountedRef = (): React.MutableRefObject<boolean> => {
  const unmountedRef = useRef(false);
  useEffect(() => {
    unmountedRef.current = false;

    return () => {
      unmountedRef.current = true;
    };
  }, []);
  return unmountedRef;
};

export default useUnmountedRef;
