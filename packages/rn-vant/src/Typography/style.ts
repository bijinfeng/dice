import { StyleSheet } from 'react-native';
import type { TextStyle } from 'react-native';

type Styles = {
  text: TextStyle;
  xs: TextStyle;
  sm: TextStyle;
  md: TextStyle;
  lg: TextStyle;
  xl: TextStyle;
  xxl: TextStyle;
  primary: TextStyle;
  danger: TextStyle;
  success: TextStyle;
  secondary: TextStyle;
  light: TextStyle;
  warning: TextStyle;
  disabled: TextStyle;
};

const createStyle = (theme: DiceUI.Theme): Styles => {
  return StyleSheet.create<Styles>({
    danger: {
      color: theme.typography_danger_color,
    },
    disabled: {
      color: theme.typography_disabled_color,
    },
    lg: {
      fontSize: 1.2 * theme.typography_font_size,
      lineHeight: 1.2 * theme.typography_line_height,
    },
    light: {
      color: theme.typography_light_color,
    },
    md: {
      fontSize: theme.typography_font_size,
      lineHeight: theme.typography_line_height,
    },
    primary: {
      color: theme.typography_primary_color,
    },
    secondary: {
      color: theme.typography_secondary_color,
    },
    sm: {
      fontSize: 0.9 * theme.typography_font_size,
      lineHeight: 0.9 * theme.typography_line_height,
    },
    success: {
      color: theme.typography_success_color,
    },
    text: {
      color: theme.typography_color,
    },
    warning: {
      color: theme.typography_warning_color,
    },
    xl: {
      fontSize: 1.4 * theme.typography_font_size,
      lineHeight: 1.4 * theme.typography_line_height,
    },
    xs: {
      fontSize: 0.8 * theme.typography_font_size,
      lineHeight: 0.8 * theme.typography_line_height,
    },
    xxl: {
      fontSize: 1.6 * theme.typography_font_size,
      lineHeight: 1.6 * theme.typography_line_height,
    },
  });
};

export default createStyle;
