import React, { FC } from 'react';
import { useColorScheme, StatusBar } from 'react-native';
import { ConfigProvider, LayoutContext, DefaultTheme, Theme } from 'dice-ui';
import Navigation from './navigation';

const Layout: FC = () => {
  const isDarkMode = useColorScheme() === 'dark';

  // const theme = isDarkMode ? DarkTheme : DefaultTheme;

  return (
    <ConfigProvider theme={DefaultTheme}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <LayoutContext.Consumer>
        {({ screenHeight }) => (
          <Theme.View
            style={{ minHeight: screenHeight, backgroundColor: '#f7f8fa', paddingBottom: 20 }}
          >
            <Navigation colorScheme="light" />
          </Theme.View>
        )}
      </LayoutContext.Consumer>
    </ConfigProvider>
  );
};

export default Layout;
