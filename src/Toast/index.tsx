import React from "react";

import { PortalRef } from "../ConfigProvider";
import BaseToast, { TimoutTimer } from "./Toast";
import type {
  ToastInstance,
  ToastOptions,
  ToastProps,
  ToastReturnType,
  ToastType,
} from "./type";

const defaultOptions: ToastProps = {
  icon: "",
  message: "",
  type: "info",
  position: "middle",
  forbidClick: false,
  duration: 2000,
};
const toastReturnMap: Record<string, ToastReturnType> = {};
const defaultOptionsMap = new Map<string, ToastProps>();
let currentOptions = { ...defaultOptions };
let currentKey = 0;

// 清楚所有 toast
const clearAll = () => {
  Object.values(toastReturnMap).forEach((it) => {
    it.clear();
  });
};

const ToastInner = (opts: ToastProps): ToastReturnType => {
  // 清楚上一个 toast （如果有）
  clearAll();

  const key = `toast_${++currentKey}`;
  const clearTimer =
    React.createRef<TimoutTimer>() as React.MutableRefObject<TimoutTimer>;
  let options = { ...opts };

  const clear = () => {
    delete toastReturnMap[key];
    // 清除定时器
    clearTimer.current && clearTimeout(clearTimer.current);
    PortalRef.current?.removePortal(key);
  };

  const onClose = () => {
    clear();
    options.onClose?.();
  };

  const renderToast = () => (
    <BaseToast
      key={key}
      {...options}
      onClose={onClose}
      clearTimer={clearTimer}
    />
  );

  const updateConfig: ToastReturnType["config"] = (nextState) => {
    options =
      typeof nextState === "function"
        ? { ...options, ...nextState(options) }
        : { ...options, ...nextState };

    PortalRef.current?.updatePortal(key, renderToast());
  };

  PortalRef.current?.addPortal(key, renderToast());

  const returnMap = { config: updateConfig, clear };

  toastReturnMap[key] = returnMap;

  return returnMap;
};

const parseOptions = (opts: ToastProps | string): ToastProps => {
  if (typeof opts === "string") {
    return { message: opts };
  }
  return opts;
};

const InternalToast = (opts: ToastProps | string) =>
  ToastInner({
    ...parseOptions(opts),
  });

const Toast = InternalToast as ToastInstance;

(["info", "loading", "success", "fail"] as ToastType[]).forEach((method) => {
  Toast[method] = (opts: ToastOptions) =>
    ToastInner({
      ...parseOptions(opts),
      type: method,
    });
});

Toast.setDefaultOptions = (
  type: ToastType | ToastProps,
  options?: ToastProps
) => {
  if (typeof type === "string" && options) {
    defaultOptionsMap.set(type, options);
  } else {
    Object.assign(currentOptions, type);
  }
};

Toast.resetDefaultOptions = (type?: ToastType) => {
  if (typeof type === "string") {
    defaultOptionsMap.delete(type);
  } else {
    currentOptions = { ...defaultOptions };
    defaultOptionsMap.clear();
  }
};

Toast.clear = clearAll;

export default Toast;
export type { ToastProps } from "./type";
export { Toast };
