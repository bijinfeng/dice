type IframeMessageEvent<T> = MessageEvent<{ method: string; data: T }>;

class IframeMessageSwap {
  private iframeRef: HTMLIFrameElement | null = null;
  private taskList: Array<() => void> = [];

  setRef = (ref: HTMLIFrameElement) => {
    /**
     * iframe 会向父页面发送个 ready 事件，告诉父页面，iframe 已经准备好可以接收消息了
     * 这时，才将收集到 taskList 中的被暂停的事件依次执行，这时已经建立了正常的通信
     * 设置 iframeRef，防止阻塞之后正常的通行
     */
    const listernerReady = this.addListener('ready', () => {
      this.iframeRef = ref;
      this.taskList.forEach(it => it());
      this.postMessage('ready');
      listernerReady.off();
    });
  };

  /**
   * 向 iframe 发送消息
   * @param method 事件名
   * @param data 消息
   */
  postMessage = <T>(method: string, data?: T) => {
    if (this.iframeRef) {
      const win = this.iframeRef?.contentWindow;
      if (win) {
        win.postMessage({ method, data }, '*');
      }
    } else {
      this.taskList.push(() => this.postMessage(method, data));
    }
  };

  /**
   * 监听 iframe 的通信
   * @param _method 事件名
   * @param callback 回调
   * @returns 返回 off 方法用于取消监听
   */
  addListener = <T>(_method: string, callback: (_data: T) => void) => {
    const handleEvent = (event: IframeMessageEvent<T>) => {
      const { method, data } = event?.data ?? {};
      if (method === _method) {
        callback(data);
      }
    };
    window.addEventListener('message', handleEvent);

    return { off: () => this.removeListener(handleEvent), handleEvent };
  };

  /**
   * 取消监听
   * @param handle addListener 里返回的监听事件
   */
  removeListener = <T>(handle: (event: IframeMessageEvent<T>) => void) => {
    window.removeEventListener('message', handle);
  };
}

export const iframeMessageSwap = new IframeMessageSwap();
