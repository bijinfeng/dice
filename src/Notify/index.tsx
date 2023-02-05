import isObject from "lodash-es/isObject";
import noop from "lodash-es/noop";
import React, { useEffect, useState } from "react";
import { PortalRef } from "../ConfigProvider";
import { Notify } from "./Notify";
import type { NotifyOptions, NotifyProps, NotifyStatic } from "./type";

const createDefaultOptions = () => {
  return {
    type: "danger",
    color: undefined,
    message: "",
    onClose: undefined,
    onClick: undefined,
    duration: 3000,
    className: "",
    lockScroll: false,
    background: undefined,
  } as NotifyOptions;
};

const parseOptions = (message: string | NotifyProps) => {
  return isObject(message) ? message : { message };
};

let currentKey = 0;
let destroy = noop;
let currentOptions: NotifyOptions = createDefaultOptions();
let updateCurrentOptions: ((options: NotifyOptions) => void) | null;

const show: NotifyStatic["show"] = (option) => {
  const key = `notify_${++currentKey}`;
  const props = parseOptions(option);
  const interProps = { ...currentOptions, ...props };
  let timer: ReturnType<typeof setTimeout>;

  if (updateCurrentOptions) {
    updateCurrentOptions(interProps);
    return destroy;
  }

  const TempNotify = () => {
    const [visible, setVisible] = useState(true);
    const [tempOptions, setTempOptions] = useState<NotifyOptions>(interProps);
    const { onClose = noop, duration, ...restProps } = tempOptions;

    updateCurrentOptions = setTempOptions;
    destroy = () => {
      setVisible(false);
      onClose();
      destroy = noop;
      updateCurrentOptions = null;
    };

    useEffect(() => {
      if (duration && +duration > 0) {
        timer = setTimeout(() => {
          destroy();
        }, duration);
      }

      return () => {
        timer && clearTimeout(timer);
      };
    }, [tempOptions]);

    return (
      <Notify
        {...restProps}
        onClose={destroy}
        onClosed={() => PortalRef.current?.removePortal(key)}
        visible={visible}
      />
    );
  };

  PortalRef.current?.addPortal(key, <TempNotify key={key} />);

  return destroy;
};

const clear: NotifyStatic["clear"] = () => destroy();

const setDefaultOptions: NotifyStatic["setDefaultOptions"] = (options) => {
  currentOptions = {
    ...currentOptions,
    ...options,
  };
};

const resetDefaultOptions: NotifyStatic["resetDefaultOptions"] = () => {
  currentOptions = createDefaultOptions();
};

const exportNotifyNamespace = Object.assign(Notify, {
  show,
  setDefaultOptions,
  resetDefaultOptions,
  clear,
  currentOptions,
});

export * from "./type";
export { exportNotifyNamespace as Notify };
