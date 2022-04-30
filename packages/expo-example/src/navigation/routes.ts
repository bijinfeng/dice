import React from 'react';

import Icon from '../pages/icon';
import Layout from '../pages/layout';
import Cell from '../pages/cell';
import Loading from '../pages/loading';
import Button from '../pages/button';
import Overlay from '../pages/overlay';
import Popup from '../pages/popup';
import Toast from '../pages/toast';
import Checkbox from '../pages/checkbox';
import Image from '../pages/image';
import Radio from '../pages/radio';
import Switch from '../pages/switch';
import Tag from '../pages/tag';
import Divider from '../pages/divider';
import NavBar from '../pages/navbar';
import NoticeBar from '../pages/notice-bar';
import Rate from '../pages/rate';
import Progress from '../pages/progress';
import Badge from '../pages/badge';
import Circle from '../pages/circle';
import Slider from '../pages/slider';
import Swiper from '../pages/swiper';
import Transitions from '../pages/transitions';
import PanningViews from '../pages/panningViews';
import ActionSheet from '../pages/actionSheet';
import Tab from '../pages/tab';
import Dialog from '../pages/dialog';
import ActionBar from '../pages/actionBar';

export type RouteItem = {
  name: string;
  href: string;
  component: React.FC;
};

export const routes: RouteItem[] = [
  {
    name: 'ActionBar 动作栏',
    href: '/action-bar',
    component: ActionBar,
  },
  {
    name: 'Dialog 弹出框',
    href: '/dialog',
    component: Dialog,
  },
  {
    name: 'Tabs 标签页',
    href: '/tabs',
    component: Tab,
  },
  {
    name: 'Transitions 过渡动画',
    href: '/transitions',
    component: Transitions,
  },
  {
    name: 'Cell 单元格',
    href: '/cell',
    component: Cell,
  },
  {
    name: 'Layout 布局',
    href: '/layout',
    component: Layout,
  },
  {
    name: 'Icon 图标',
    href: '/icon',
    component: Icon,
  },
  {
    name: 'Loading 加载',
    href: '/loading',
    component: Loading,
  },
  {
    name: 'Button 按钮',
    href: '/button',
    component: Button,
  },
  {
    name: 'Overlay 遮罩层',
    href: '/overlay',
    component: Overlay,
  },
  {
    name: 'Popup 弹出层',
    href: '/popup',
    component: Popup,
  },
  {
    name: 'Toast 轻提示',
    href: '/toast',
    component: Toast,
  },
  {
    name: 'Checkbox 复选框',
    href: '/checkbox',
    component: Checkbox,
  },
  {
    name: 'Image 图片',
    href: '/image',
    component: Image,
  },
  {
    name: 'Radio 单选框',
    href: '/radio',
    component: Radio,
  },
  {
    name: 'Switch 开关',
    href: '/switch',
    component: Switch,
  },
  {
    name: 'Tag 标签',
    href: '/tag',
    component: Tag,
  },
  {
    name: 'Divider 分割线',
    href: '/divider',
    component: Divider,
  },
  {
    name: 'NavBar 导航栏',
    href: '/nav-bar',
    component: NavBar,
  },
  {
    name: 'NoticeBar 通知栏',
    href: '/notice-bar',
    component: NoticeBar,
  },
  {
    name: 'Rate 评分',
    href: '/rate',
    component: Rate,
  },
  {
    name: 'Progress 进度条',
    href: '/progress',
    component: Progress,
  },
  {
    name: 'Badge 徽标',
    href: '/badge',
    component: Badge,
  },
  {
    name: 'Circle  环形进度条',
    href: '/circle',
    component: Circle,
  },
  {
    name: 'Slider 滑块',
    href: '/slider',
    component: Slider,
  },
  {
    name: 'Swiper 轮播',
    href: '/swiper',
    component: Swiper,
  },
  {
    name: 'PanningViews',
    href: '/panning-views',
    component: PanningViews,
  },
  {
    name: 'ActionSheet 动作面板',
    href: '/action-sheet',
    component: ActionSheet,
  },
];
