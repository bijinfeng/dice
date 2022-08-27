import { usePrefersColor } from 'dumi/theme';
import { useMemo } from 'react';

// 系统是否使用暗黑模式
const useDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

type SetColorFunc = ReturnType<typeof usePrefersColor>[1];

export const useColor = (): ['light' | 'dark', SetColorFunc] => {
  const [color, setColor] = usePrefersColor();

  const themeColor = useMemo<'light' | 'dark'>(() => {
    let lastColor = color;
    if (color === 'auto') {
      lastColor = useDark ? 'light' : 'dark';
    } else {
      lastColor = color;
    }

    return lastColor;
  }, [color]);

  return [themeColor, setColor];
};
