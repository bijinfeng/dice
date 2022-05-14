import { useMemo } from 'react';
import { createTheming } from '@callstack/react-theme-provider';
import type { StyleSheet } from 'react-native';
import { defaultTheme } from '../styles';

export const { ThemeProvider, withTheme, useTheme } = createTheming<DiceUI.Theme>(
  defaultTheme as DiceUI.Theme
);

type ThemeFactoryCallBack<T> = {
  styles: StyleSheet.NamedStyles<T>;
  theme: DiceUI.Theme;
};

export function useThemeFactory<T, P>(
  fun: (theme: DiceUI.Theme, ...extra: P[]) => StyleSheet.NamedStyles<T>,
  ...params: P[]
): ThemeFactoryCallBack<T> {
  const theme = useTheme();

  const styles = useMemo(() => fun(theme, ...params), [fun, theme, params]);

  return { styles, theme };
}

export default {
  ThemeProvider,
  withTheme,
  useTheme,
  useThemeFactory,
};
