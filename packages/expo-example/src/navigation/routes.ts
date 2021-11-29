import React from 'react';

import Switch from '../pages/basic/switch';
import Icon from '../pages/basic/icon';
import Layout from '../pages/basic/layout';
import Cell from '../pages/basic/cell';
import Loading from '../pages/basic/loading';
import Button from '../pages/basic/button';
import Overlay from '../pages/basic/overlay';
import Popup from '../pages/basic/popup';
import Toast from '../pages/basic/toast';

type RouteItem = {
  name: string;
  href: string;
  component: React.FC;
};

export const routes: RouteItem[] = [
  {
    name: 'Cell 单元格',
    href: '/basic/cell',
    component: Cell,
  },
  {
    name: 'Layout 布局',
    href: '/basic/layout',
    component: Layout,
  },
  {
    name: 'Icon 图标',
    href: '/basic/icon',
    component: Icon,
  },
  {
    name: 'Switch 开关',
    href: '/basic/switch',
    component: Switch,
  },
  {
    name: 'Loading 加载',
    href: '/basic/loading',
    component: Loading,
  },
  {
    name: 'Button 按钮',
    href: '/basic/button',
    component: Button,
  },
  {
    name: 'Overlay 遮罩层',
    href: '/basic/overlay',
    component: Overlay,
  },
  {
    name: 'Popup 弹出层',
    href: '/basic/popup',
    component: Popup,
  },
  {
    name: 'Toast 轻提示',
    href: '/basic/toast',
    component: Toast,
  },
];
