import React from 'react';
import ToastView, { ToastViewProps } from './ToastView';
import Loading, { LoadingProps } from '../Loading';
import Overlay from '../Overlay';

type durationType = 'long' | 'short';

interface ToestProps extends ToastViewProps {
  duration?: number | durationType;
}

interface LoadingToastProps extends ToestProps {
  loadingType?: LoadingProps['type'];
  loadingSize?: LoadingProps['size'];
  loadingColor?: LoadingProps['color'];
}

export default class Toest extends Overlay {
  static ToastView = ToastView;
  static defaultDuration: durationType = 'short';
  static defaultPosition: ToastViewProps['position'] = 'center';
  static messageDefaultDuration: durationType = 'short';
  static messageDefaultPosition: ToastViewProps['position'] = 'bottom';

  static show(options: ToestProps) {
    const {
      duration = this.defaultDuration,
      position = this.defaultPosition,
      ...others
    } = options && typeof options === 'object' ? options : {};

    const key = super.show(<this.ToastView position={position} {...others} />);

    const durationTime =
      typeof duration !== 'number' ? (duration === 'long' ? 3500 : 2000) : duration;

    setTimeout(() => this.hide(key), durationTime);

    return key;
  }

  static message(options: string | ToestProps) {
    return this.show({
      duration: this.messageDefaultDuration,
      position: this.messageDefaultPosition,
      ...(typeof options === 'string' ? { text: options } : options),
    });
  }

  static success(options: string | ToestProps) {
    return this.show({
      icon: 'success',
      ...(typeof options === 'string' ? { text: options } : options),
    });
  }

  static fail(options: string | ToestProps) {
    return this.show({
      icon: 'fail',
      ...(typeof options === 'string' ? { text: options } : options),
    });
  }

  static loading(options: string | LoadingToastProps) {
    const isString = typeof options === 'string';

    return this.show({
      ...(isString ? { text: options } : options),
      icon: (
        <Loading
          color="white"
          size={36}
          {...(isString
            ? null
            : {
                type: options.loadingType,
                size: options.loadingSize,
                color: options.loadingColor,
              })}
        />
      ),
    });
  }
}
