import { context } from 'dumi/theme';
import { useContext } from 'react';

import { IThemeContext } from '@umijs/preset-dumi/lib/theme/context';

export type TuyaThemeConfig = IThemeContext['config']['theme'] & {
  demoUrl: string;
};

// 兜底默认值
const defaults = {};

export const useThemeConfig = (): TuyaThemeConfig => {
  const { config } = useContext(context);
  const ctxConfig = config?.theme ?? {};

  return Object.assign(ctxConfig, defaults) as TuyaThemeConfig;
};
