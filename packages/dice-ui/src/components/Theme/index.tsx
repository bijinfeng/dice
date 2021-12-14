import { createTheming } from '@callstack/react-theme-provider';
import { defaultTheme } from '../../styles';
import useThemeFactory from './useThemeFactory';

export const { ThemeProvider, withTheme, useTheme } = createTheming<DiceUI.Theme>(
  defaultTheme as DiceUI.Theme
);

const ThemeMaps = {
  ThemeProvider,
  withTheme,
  useTheme,
  useThemeFactory,
};

export { default as useThemeFactory } from './useThemeFactory';
export default ThemeMaps;
