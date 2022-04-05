import { Platform } from 'react-native';

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
  if (Platform.OS === 'web') {
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
  if (Platform.OS === 'web') {
    window.parent.postMessage({ method, data }, '*');
  }
};

export const listenerIframeLoaded = (): Promise<void> => {
  return new Promise<void>(resolve => {
    if (Platform.OS === 'web') {
      // 发送事件给父页面，告知 iframe 已经准备好了
      postMessage('ready');
      const { cancel } = listenerMessage('ready', () => {
        cancel();
        resolve();
      });
      setTimeout(resolve, 2000);
    } else {
      resolve();
    }
  });
};
