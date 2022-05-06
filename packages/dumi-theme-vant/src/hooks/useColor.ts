import { usePrefersColor } from 'dumi/theme';
import { useMemo } from 'react';

export type Theme = 'light' | 'dark';

// 系统是否使用暗黑模式
const useDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

type SetColorFunc = ReturnType<typeof usePrefersColor>[1];

export const useColor = (): [Theme, SetColorFunc] => {
  const [color, setColor] = usePrefersColor();

  const themeColor = useMemo<'light' | 'dark'>(() => {
    if (color === 'auto') {
      return useDark ? 'light' : 'dark';
    }

    return color;
  }, [color]);

  return [themeColor, setColor];
};
