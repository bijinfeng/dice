import React, { FC, useEffect } from 'react';
import { Platform } from 'react-native';
import { NativeRouter, Routes, Route, useNavigate } from 'react-router-native';
import { BrowserRouter } from 'react-router-dom';
import { routes } from './routes';
import Layout from './Layout';
import { listenerMessage } from '../utils';
import Home from '../pages/index';

const StackNavigator = () => {
  const linkTo = useNavigate();

  useEffect(() => {
    const { cancel } = listenerMessage('navigate', (data: string) => {
      // 判断 iframe 接收到的 href 是否有效
      const isValidatePath = data && routes.find(it => it.href === data);
      linkTo(isValidatePath ? data : '/');
    });
    return () => cancel();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {routes.map(it => (
          <Route path={it.href} key={it.href} element={<it.component />} />
        ))}
      </Route>
    </Routes>
  );
};

const Navigation: FC = () => {
  const RouterAdapter = Platform.OS === 'web' ? BrowserRouter : NativeRouter;

  return (
    <RouterAdapter>
      <StackNavigator />
    </RouterAdapter>
  );
};

export default Navigation;
