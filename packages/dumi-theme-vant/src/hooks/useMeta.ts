import { context } from 'dumi/theme';
import { useContext, useEffect, useState } from 'react';

import { IThemeContext } from '@umijs/preset-dumi/lib/theme/context';

export type TuyaThemeMeta = IThemeContext['meta'] & {
  desc?: string;
  demo?: string;
  [k: string]: any;
};

export const useMeta = () => {
  const { meta } = useContext(context);

  const [metaUpdated, setMetaUpdated] = useState(meta);

  useEffect(() => {
    if (meta && Object.keys(meta).length > 0) {
      setMetaUpdated(meta);
    }
  }, [meta]);

  return metaUpdated as TuyaThemeMeta;
};
