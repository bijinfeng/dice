import color from 'color';
import DefaultTheme from './DefaultTheme';
import { black, white, pinkA100 } from './colors';

const DarkTheme: DiceUI.Theme = {
  ...DefaultTheme,
  dark: true,
  mode: 'adaptive',
  colors: {
    ...DefaultTheme.colors,
    // primary: '#1f1f1f',
    accent: '#03dac6',
    background: '#191919',
    surface: '#121212',
    error: '#CF6679',
    onSurface: '#FFFFFF',
    text: white,
    gray1: color(white).alpha(0.12).rgb().string(),
    content: '#b2b2b2',
    contentBackground: '#1a1a1a',
    disabled: color(white).alpha(0.38).rgb().string(),
    placeholder: color(white).alpha(0.54).rgb().string(),
    backdrop: color(black).alpha(0.5).rgb().string(),
    popupBackground: '#262626',
    popupText: '#7f7f7f',
    notification: pinkA100,
  },
};

export default DarkTheme;
