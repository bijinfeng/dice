import React from "react";
import type { View } from "react-native";

export default function useRefs<T = View>(): [
  T[],
  (index: number) => (el: T) => void,
  () => void
] {
  const refs = React.useRef<T[]>([]);

  const setRefs = React.useCallback(
    (index: number) => (el: T) => {
      if (el) refs.current[index] = el;
    },
    []
  );

  const reset = React.useCallback(() => {
    refs.current = [];
  }, []);

  return [refs.current, setRefs, reset];
}
