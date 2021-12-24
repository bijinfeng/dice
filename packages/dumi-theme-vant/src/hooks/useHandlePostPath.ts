import { useEffect } from 'react';
import { useHistory } from 'react-router';

import { scrollDoc } from '../utils/scrollDoc';

export const useHandlePostPath = () => {
  const history = useHistory();

  useEffect(() => {
    const handle = (event: MessageEvent<any>) => {
      const { method, data: href } = event?.data ?? {};
      if (method === 'navigate' && href) {
        history.push(href);
        const scrollElement = scrollDoc();
        scrollElement.scrollTop = 0;
      }
    };
    window.addEventListener('message', handle);
    return () => window.removeEventListener('message', handle);
  }, [history]);
};
