import React, { FC } from 'react';
import { useColorScheme, StatusBar, View } from 'react-native';
import { ConfigProvider, defaultTheme } from 'dice-ui';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './navigation';

const Layout: FC = () => {
  const isDarkMode = useColorScheme() === 'dark';

  // const theme = isDarkMode ? DarkTheme : DefaultTheme;

  return (
    <SafeAreaProvider>
      <ConfigProvider theme={defaultTheme}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <View style={{ flex: 1 }}>
          <Navigation colorScheme="light" />
        </View>
      </ConfigProvider>
    </SafeAreaProvider>
  );
};

export default Layout;
