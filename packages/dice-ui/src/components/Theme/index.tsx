import { createTheming } from '@callstack/react-theme-provider';
import { useMemo } from 'react';
import type { StyleSheet } from 'react-native';
import { defaultTheme } from '../../styles';

export const { ThemeProvider, withTheme, useTheme } = createTheming<DiceUI.Theme>(
  defaultTheme as DiceUI.Theme
);

export function useThemeFactory<T>(fun: (theme: DiceUI.Theme) => StyleSheet.NamedStyles<T>) {
  const theme = useTheme();

  const styles = useMemo(() => fun(theme), [fun, theme]);

  return styles;
}

const ThemeMaps = {
  ThemeProvider,
  withTheme,
  useTheme,
  useThemeFactory,
};

export default ThemeMaps;
