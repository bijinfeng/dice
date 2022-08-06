import { Theme, DefaultTheme, DarkTheme as NativeDarkTheme } from '@react-navigation/native';
import { lightTheme, darkTheme } from '../style/vars';

export const DarkTheme: Theme = {
  dark: true,
  colors: {
    ...NativeDarkTheme.colors,
    background: darkTheme.black,
    card: darkTheme.background_3,
    text: darkTheme.text_color_2,
  },
};

export const LightTheme: Theme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    background: lightTheme.gray_1,
    card: lightTheme.background_3,
    text: lightTheme.text_color_2,
  },
};
