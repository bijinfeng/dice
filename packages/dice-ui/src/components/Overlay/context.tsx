import type React from 'react';
import { DeviceEventEmitter } from 'react-native';

let keyValue = 0;

export type Transform =
  | 'none'
  | 'translate'
  | 'scale'
  | {
      translateX?: number;
      translateY?: number;
      scaleX?: number;
      scaleY?: number;
    }[];
// --------------- 添加 ---------------------------
export type AddParams = {
  key: number;
  element: React.ReactNode;
};

export const add = (element: React.ReactNode): number => {
  const key = ++keyValue;
  DeviceEventEmitter.emit('addOverlay', { key, element });
  return key;
};

export const listenAddOverlay = (func: (params: AddParams) => void): void => {
  DeviceEventEmitter.addListener('addOverlay', func);
};

// ---------------- 删除 -----------------------
export const remove = (key: number): void => {
  DeviceEventEmitter.emit('removeOverlay', { key });
};

export const listenRemoveOverlay = (func: (key: number) => void): void => {
  DeviceEventEmitter.addListener('removeOverlay', func);
};

// ----------------- 删除全部 -----------------
export const removeAll = (): void => {
  DeviceEventEmitter.emit('removeAllOverlay', {});
};

export const listenRemoveAll = (func: () => void): void => {
  DeviceEventEmitter.addListener('removeAllOverlay', func);
};

// ------------------ -----------------

export interface TransformParams {
  transform: Transform[];
  animated: boolean;
  animatesOnly: any;
}

export const transform = (_transform: Transform, animated?: boolean, animatesOnly = null): void => {
  DeviceEventEmitter.emit('transformRoot', {
    _transform,
    animated,
    animatesOnly,
  });
};

export const listenTransform = (func: (params: TransformParams) => void): void => {
  DeviceEventEmitter.addListener('transformRoot', func);
};

// ------------------ ---------------
export interface RestoreParams {
  animated: boolean;
  animatesOnly: any;
}
export const restore = (animated?: boolean, animatesOnly = null): void => {
  DeviceEventEmitter.emit('restoreRoot', { animated, animatesOnly });
};

export const listenRestore = (func: (params: RestoreParams) => void): void => {
  DeviceEventEmitter.addListener('restoreRoot', func);
};

// 取消所有订阅

export const removeAllListeners = (): void => {
  DeviceEventEmitter.removeAllListeners('addOverlay');
  DeviceEventEmitter.removeAllListeners('removeOverlay');
  DeviceEventEmitter.removeAllListeners('removeAllOverlay');
  DeviceEventEmitter.removeAllListeners('transformRoot');
  DeviceEventEmitter.removeAllListeners('restoreRoot');
};
