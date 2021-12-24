import React, { FC, useContext } from 'react';
import type { IRouteComponentProps } from '@umijs/types';
import { context } from 'dumi/theme';

import Header from './components/Header';
import SideMenu from './components/Nav';
import Container from './components/Container';
import Simulator from './components/Simulator';
import { Renderer } from './pages';

import { useMeta, useThemeConfig } from './hooks';
import './style/layout.less';

const Layout: FC<IRouteComponentProps> = ({ children, location }) => {
  const { meta } = useContext(context);
  const { title, desc, demo } = useMeta();
  const { demoUrl } = useThemeConfig();

  const showSideMenu = meta.sidemenu !== false;
  const hasSimulator = !!demoUrl && !!demo;

  return (
    <div className="vant-doc">
      <Header location={location} />

      {/* 侧边栏 */}
      {showSideMenu && <SideMenu />}

      <Container hasSimulator={hasSimulator}>
        <Renderer title={title} desc={desc}>
          {children}
        </Renderer>
      </Container>

      {hasSimulator && <Simulator src={demoUrl} />}
    </div>
  );
};

export default Layout;
