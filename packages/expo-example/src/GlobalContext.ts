import React from 'react';
import { ColorSchemeName } from 'react-native';
import { lightTheme } from './style/vars';

export interface GlobalState {
  themeMode: ColorSchemeName;
  isDarkMode: boolean;
  themeVars: typeof lightTheme;
}

export const GlobalContext = React.createContext<GlobalState>({} as GlobalState);
