import React, { FC } from 'react';
import * as Linking from 'expo-linking';
import { ColorSchemeName, Text } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { HeaderBackButton } from '@react-navigation/elements';
import { createStackNavigator } from '@react-navigation/stack';
import { routes } from './routes';

import Home from '../pages/index';

const Stack = createStackNavigator();
const prefix = Linking.createURL('/');

const screens = routes.reduce<Record<string, string>>((result, it) => {
  // eslint-disable-next-line no-param-reassign
  result[it.href] = it.href;
  return result;
}, {});

const Navigation: FC<{ colorScheme: ColorSchemeName }> = ({ colorScheme }) => (
  <NavigationContainer
    theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
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
    <Stack.Navigator>
      <Stack.Screen name="/" component={Home} options={{ headerShown: false }} />
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
  </NavigationContainer>
);

export default Navigation;
