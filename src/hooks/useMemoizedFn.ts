/**
 * 代码来源：https://github.com/alibaba/hooks/blob/master/packages/hooks/src/useMemoizedFn/index.ts
 * 关于 this：https://www.jianshu.com/p/8b3a2513d8e5
 */

import { useMemo, useRef } from "react";

type noop = (...args: any[]) => any;

/**
 * 持久化 function 的 hook
 */
function useMemoizedFn<T extends noop>(fn: T) {
  if (process.env.NODE_ENV === "development") {
    if (typeof fn !== "function") {
      console.error(
        `useMemoizedFn expected parameter is a function, got ${typeof fn}`
      );
    }
  }

  const fnRef = useRef<T>(fn);

  // why not write `fnRef.current = fn`?
  // https://github.com/alibaba/hooks/issues/728
  fnRef.current = useMemo(() => fn, [fn]);

  const memoizedFn = useRef<T>();
  if (!memoizedFn.current) {
    memoizedFn.current = function (this: T, ...args) {
      return fnRef.current.apply(this, args);
    } as T;
  }

  return memoizedFn.current;
}

export default useMemoizedFn;
