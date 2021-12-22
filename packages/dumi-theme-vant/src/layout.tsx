import React, { FC, useContext } from 'react';
import type { IRouteComponentProps } from '@umijs/types';
import { context } from 'dumi/theme';

import Header from './components/Header';
import SideMenu from './components/Nav';
import Container from './components/Container';
import Content from './components/Content';
import Simulator from './components/Simulator';
import { Renderer } from './pages';

import './style/layout.less';

const Layout: FC<IRouteComponentProps> = ({ children, location }) => {
  const { meta } = useContext(context);

  const showSideMenu = meta.sidemenu !== false;

  return (
    <div className="vant-doc">
      <Header location={location} />

      {/* 侧边栏 */}
      {showSideMenu && <SideMenu />}

      <Container hasSimulator>
        <Content>
          <Renderer>{children}</Renderer>
        </Content>
      </Container>

      <Simulator src="https://vant-contrib.gitee.io/vant/v3/mobile.html#/zh-CN" />
    </div>
  );
};

export default Layout;
