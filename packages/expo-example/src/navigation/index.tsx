import React, { FC, useEffect } from 'react';
import * as Linking from 'expo-linking';
import { ColorSchemeName, Text } from 'react-native';
import { NavigationContainer, useLinkTo } from '@react-navigation/native';
import { HeaderBackButton } from '@react-navigation/elements';
import { createStackNavigator } from '@react-navigation/stack';
import { routes } from './routes';
import { listenerMessage } from '../utils';
import { DarkTheme, LightTheme } from './navigationTheme';

import Home from '../pages/index';

const Stack = createStackNavigator();
const prefix = Linking.createURL('/');

const screens = routes.reduce<Record<string, string>>((result, it) => {
  // eslint-disable-next-line no-param-reassign
  result[it.href] = it.href;
  return result;
}, {});

const StackNavigator = () => {
  const linkTo = useLinkTo();

  useEffect(() => {
    listenerMessage('navigate', (data: string) => {
      /**
       * 判断 iframe 接收到的 href 是否有效
       */
      if (data && routes.find(it => it.href === data)) {
        linkTo(data);
      }
    });
  }, []);

  return (
    <Stack.Navigator>
      <Stack.Screen name="/" component={Home} options={{ headerShown: false, title: '首页' }} />
      {routes.map(it => (
        <Stack.Screen
          key={it.href}
          name={it.href}
          component={it.component}
          options={({ navigation }) => ({
            title: it.name,
            // 自定义后退按钮
            headerLeft: props => (
              <HeaderBackButton {...props} onPress={() => navigation.navigate('/')} />
            ),
          })}
        />
      ))}
    </Stack.Navigator>
  );
};

const Navigation: FC<{ colorScheme: ColorSchemeName }> = ({ colorScheme }) => (
  <NavigationContainer
    theme={colorScheme === 'dark' ? DarkTheme : LightTheme}
    fallback={<Text>Loading...</Text>}
    linking={{
      prefixes: [prefix],
      config: {
        screens: {
          '/': '/',
          ...screens,
        },
      },
    }}
  >
    <StackNavigator />
  </NavigationContainer>
);

export default Navigation;
