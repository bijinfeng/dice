import React, { FC, useContext } from 'react';
import type { IRouteComponentProps } from '@umijs/types';
import { context } from 'dumi/theme';

import Header from './components/Header';
import SideMenu from './components/Nav';
import Container from './components/Container';
import Simulator from './components/Simulator';
import { Renderer } from './pages';

import { useMeta, useThemeConfig, useHandleIframePost } from './hooks';
import './style/layout.less';

const Layout: FC<IRouteComponentProps> = ({ children, location }) => {
  const { meta } = useContext(context);
  const { title, desc, demo } = useMeta();
  const { demoUrl } = useThemeConfig();

  const showSideMenu = meta.sidemenu !== false;

  useHandleIframePost();

  return (
    <div className="vant-doc">
      <Header location={location} />

      {/* 侧边栏 */}
      {showSideMenu && <SideMenu />}

      <Container hasSimulator>
        <Renderer title={title} desc={desc} location={location}>
          {children}
        </Renderer>
      </Container>

      <Simulator src={demoUrl} path={demo} />
    </div>
  );
};

export default Layout;
