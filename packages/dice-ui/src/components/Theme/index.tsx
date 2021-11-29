import { createTheming } from '@callstack/react-theme-provider';
import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { DefaultTheme } from '../../styles';
import ThemeView from './View';
import ThemeText from './Text';
import withColor from './withColor';

export const { ThemeProvider, withTheme, useTheme } = createTheming<DiceUI.Theme>(
  DefaultTheme as DiceUI.Theme
);

export function useThemeFactory<T>(fun: (theme: DiceUI.Theme) => StyleSheet.NamedStyles<T>) {
  const theme = useTheme();

  const styles = useMemo(() => fun(theme), [fun, theme]);

  return styles;
}

const ThemeMaps = {
  View: ThemeView,
  Text: ThemeText,
  ThemeProvider,
  withTheme,
  useTheme,
  withColor,
  useThemeFactory,
};

export default ThemeMaps;
