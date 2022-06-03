import React, { FC, useState, useEffect, useMemo } from 'react';
import { useColorScheme, StatusBar, ColorSchemeName } from 'react-native';
import { ConfigProvider, defaultTheme, darkTheme } from 'rn-vant';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './navigation';
import { listenerMessage, listenerIframeLoaded } from './utils';
import { lightTheme, darkTheme as darkThemeVars } from './style/vars';
import { GlobalContext, GlobalState } from './GlobalContext';

const Layout: FC = () => {
  const [isReady, setReady] = useState(false);
  const [themeMode, setThemeMode] = useState<ColorSchemeName>(useColorScheme());
  const isDarkMode = themeMode === 'dark';

  useEffect(() => {
    const { cancel } = listenerMessage('theme', (theme: ColorSchemeName) => {
      setThemeMode(theme);
    });

    listenerIframeLoaded().then(() => {
      setReady(true);
    });

    return cancel;
  }, []);

  const globalState = useMemo<GlobalState>(
    () => ({
      themeMode,
      isDarkMode,
      themeVars: isDarkMode ? darkThemeVars : lightTheme,
    }),
    [themeMode, isDarkMode]
  );

  return (
    <GlobalContext.Provider value={globalState}>
      <SafeAreaProvider>
        {isReady && (
          <ConfigProvider theme={isDarkMode ? darkTheme : defaultTheme}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <Navigation colorScheme={themeMode} />
          </ConfigProvider>
        )}
      </SafeAreaProvider>
    </GlobalContext.Provider>
  );
};

export default Layout;
