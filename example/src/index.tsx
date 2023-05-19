import React, { FC, useState, useEffect, useMemo } from 'react';
import { useColorScheme, ColorSchemeName, View } from 'react-native';
import { ConfigProvider, defaultTheme, darkTheme } from '@pingtou/rn-vant';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './navigation';
import { listenerMessage, isInIframe, postMessage } from './utils';
import { lightTheme, darkTheme as darkThemeVars } from './style/vars';
import { GlobalContext, GlobalState } from './GlobalContext';

const Layout: FC = () => {
  const [isReady, setReady] = useState(!isInIframe);
  const [themeMode, setThemeMode] = useState<ColorSchemeName>(useColorScheme());
  const isDarkMode = themeMode === 'dark';

  useEffect(() => {
    // 以下这些 iframe 事件都只会在 iframe 里生效
    const themeListener = listenerMessage('theme', (theme: ColorSchemeName) => {
      setThemeMode(theme);
    });

    /**
     * iframe 内需要先发送「ready」事件通知 iframe 已经准备好接收事件了，
     * 之后，外部会把之前积压的事件依次发出来后，再发送个「ready」事件，
     * 这时 iframe 接收到「ready」事件就可以 render 页面了
     */
    const iframeReadyListener = listenerMessage('ready', () => {
      setReady(true);
      iframeReadyListener.cancel();
    });

    // 发送事件给父页面，告知 iframe 已经准备好了
    postMessage('ready');

    return () => themeListener.cancel();
  }, []);

  const globalState = useMemo<GlobalState>(
    () => ({
      themeMode,
      isDarkMode,
      isInIframe,
      themeVars: isDarkMode ? darkThemeVars : lightTheme,
      setThemeMode,
    }),
    [themeMode, isDarkMode, setThemeMode]
  );

  return (
    <View style={{ display: isReady ? 'flex' : 'none', flex: 1 }}>
      <GlobalContext.Provider value={globalState}>
        <SafeAreaProvider>
          <ConfigProvider theme={isDarkMode ? darkTheme : defaultTheme}>
            <Navigation />
          </ConfigProvider>
        </SafeAreaProvider>
      </GlobalContext.Provider>
    </View>
  );
};

export default Layout;
