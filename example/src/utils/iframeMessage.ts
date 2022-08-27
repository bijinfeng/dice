import { Platform } from 'react-native';

/**
 * 判断是不是在 iframe 里
 */
export const isInIframe = Platform.OS === 'web' ? window.self !== window.top : false;

/**
 * 监听 iframe 通信
 * @param _method 事件名
 * @param callback 回调
 */
export const listenerMessage = <T>(
  _method: string,
  callback: (data: T) => void
): { cancel: () => void } => {
  let cancel = () => {};
  if (isInIframe) {
    const callbackEvent = (event: MessageEvent<any>) => {
      const { method, data } = event?.data ?? {};
      if (method === _method) {
        callback(data);
      }
    };
    window.addEventListener('message', callbackEvent);
    cancel = () => window.removeEventListener('message', callbackEvent);
  }
  return { cancel };
};

/**
 * 发送 iframe 信息
 * @param method 事件名
 * @param data 信息
 */
export const postMessage = <T>(method: string, data?: T): void => {
  if (isInIframe) {
    window.parent.postMessage({ method, data }, '*');
  }
};
