import React, { FC } from 'react';
import { useColorScheme, StatusBar, View } from 'react-native';
import { ConfigProvider, LayoutContext, defaultTheme } from 'dice-ui';
import Navigation from './navigation';

const Layout: FC = () => {
  const isDarkMode = useColorScheme() === 'dark';

  // const theme = isDarkMode ? DarkTheme : DefaultTheme;

  return (
    <ConfigProvider theme={defaultTheme}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <LayoutContext.Consumer>
        {({ screenHeight }) => (
          <View style={{ minHeight: screenHeight, backgroundColor: '#f7f8fa', paddingBottom: 20 }}>
            <Navigation colorScheme="light" />
          </View>
        )}
      </LayoutContext.Consumer>
    </ConfigProvider>
  );
};

export default Layout;
