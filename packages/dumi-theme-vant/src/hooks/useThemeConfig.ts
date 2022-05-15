import { context } from 'dumi/theme';
import { useContext } from 'react';

import { IThemeContext } from '@umijs/preset-dumi/lib/theme/context';

export type VantThemeConfig = IThemeContext['config']['theme'] & {
  demoUrl: string;
  base: string;
};

// 兜底默认值
const defaults = {};

export const useThemeConfig = (): VantThemeConfig => {
  const { config } = useContext(context);
  const ctxConfig = config?.theme ?? {};

  return Object.assign(ctxConfig, defaults) as VantThemeConfig;
};
