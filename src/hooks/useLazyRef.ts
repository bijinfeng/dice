import * as React from "react";

export default function useLazyRef<T>(
  callback: () => T
): React.MutableRefObject<T> {
  const lazyRef = React.useRef<T | undefined>();

  if (lazyRef.current === undefined) {
    lazyRef.current = callback();
  }

  return lazyRef as React.MutableRefObject<T>;
}
