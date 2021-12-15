import { useMemo } from 'react';
import type { StyleSheet } from 'react-native';
import { useTheme } from './index';

type ThemeFactoryCallBack<T> = {
  styles: StyleSheet.NamedStyles<T>;
  theme: DiceUI.Theme;
};

function useThemeFactory<T, P>(
  fun: (theme: DiceUI.Theme, ...extra: P[]) => StyleSheet.NamedStyles<T>,
  ...params: P[]
): ThemeFactoryCallBack<T> {
  const theme = useTheme();

  const styles = useMemo(() => fun(theme, ...params), [fun, theme, params]);

  return { styles, theme };
}

export default useThemeFactory;
