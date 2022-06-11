import * as _vars from './variables';
import { createDefaultTheme } from './defaultTheme';

const darkVars = {
  ..._vars,
  text_color: '#f5f5f5',
  text_color_2: '#707070',
  text_color_3: '#4d4d4d',
  border_color: '#3a3a3c',
  active_color: '#3a3a3c',
  background: '#000',
  background_2: '#1c1c1e',
  background_3: '#37363b',
};

const createDarkTheme = (vars: typeof _vars) => ({
  ...createDefaultTheme(vars),
  ...vars,
  dark: false,

  // Button
  button_plain_background_color: 'transparent',

  // Calendar
  calendar_month_mark_color: 'rgba(100, 101, 102, 0.2)',
  calendar_day_disabled_color: vars.gray_7,
});

export const darkTheme = createDarkTheme(darkVars as typeof _vars);
