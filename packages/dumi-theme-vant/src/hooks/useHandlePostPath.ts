import { useEffect } from 'react';
import { useHistory } from 'react-router';

import { scrollDoc } from '../utils/scrollDoc';
import { iframeMessageSwap } from '../utils';

/**
 * 监听 iframe 内部事件
 */
export const useHandleIframePost = (): void => {
  const history = useHistory();

  useEffect(() => {
    const listenerEvent = iframeMessageSwap.addListener('navigate', (url?: string) => {
      if (url) {
        // 切换路由
        history.push(url);
        const scrollElement = scrollDoc();
        scrollElement.scrollTop = 0;
      }
    });
    return () => listenerEvent.off();
  }, [history]);
};
