import React, { FC, useState, useEffect, useMemo } from 'react';
import { useColorScheme, StatusBar, View, ColorSchemeName } from 'react-native';
import { ConfigProvider, defaultTheme, darkTheme } from 'dice-ui';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './navigation';
import { listenerMessage, postMessage } from './utils';
import { lightTheme, darkTheme as darkThemeVars } from './style/vars';
import { GlobalContext, GlobalState } from './GlobalContext';

const Layout: FC = () => {
  const [isReady, setReady] = useState(false);
  const [themeMode, setThemeMode] = useState<ColorSchemeName>(useColorScheme());
  const isDarkMode = themeMode === 'dark';

  useEffect(() => {
    listenerMessage('theme', (theme: ColorSchemeName) => {
      setThemeMode(theme);
    });
    // 发送事件给父页面，告知 iframe 已经准备好了
    postMessage('ready');
    setTimeout(() => {
      setReady(true);
    }, 100);
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
            <View style={{ flex: 1 }}>
              <Navigation colorScheme={themeMode} />
            </View>
          </ConfigProvider>
        )}
      </SafeAreaProvider>
    </GlobalContext.Provider>
  );
};

export default Layout;
