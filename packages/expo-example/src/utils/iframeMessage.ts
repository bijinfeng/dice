import { Platform } from 'react-native';

/**
 * 监听 iframe 通信
 * @param _method 事件名
 * @param callback 回调
 */
export const listenerMessage = <T>(_method: string, callback: (_data: T) => void): void => {
  if (Platform.OS === 'web') {
    window.addEventListener('message', (event: MessageEvent<any>) => {
      const { method, data } = event?.data ?? {};
      if (method === _method) {
        callback(data);
      }
    });
  }
};

/**
 * 发送 iframe 信息
 * @param method 事件名
 * @param data 信息
 */
export const postMessage = <T>(method: string, data?: T): void => {
  if (Platform.OS === 'web') {
    window.parent.postMessage({ method, data }, '*');
  }
};
