import { useEffect } from 'react';
import { useHistory } from 'react-router';

import { scrollDoc } from '../utils/scrollDoc';

export const useHandlePostPath = () => {
  const history = useHistory();
  useEffect(() => {
    const handle = (event: MessageEvent<any>) => {
      const href = event?.data?.data;
      if (href) {
        history.push(href);
        const scrollElement = scrollDoc();
        scrollElement.scrollTop = 0;
      }
    };
    window.addEventListener('message', handle);
    return () => window.removeEventListener('message', handle);
  }, [history]);
};
