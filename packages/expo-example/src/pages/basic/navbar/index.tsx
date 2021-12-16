import React, { FC } from 'react';
import { NavBar, Toast, Icon } from 'dice-ui';
import { ScrollView } from 'react-native';
import { DemoBlock } from '../../../components';

const NavBarDemo: FC = () => {
  return (
    <ScrollView>
      <DemoBlock title="基础用法">
        <NavBar
          title="标题"
          leftArrow
          leftText="返回"
          rightText="按钮"
          onPressLeft={() => Toast.message('返回')}
          onPressRight={() => Toast.message('按钮')}
        />
      </DemoBlock>
      <DemoBlock title="自定义内容">
        <NavBar
          title="标题"
          leftArrow
          leftText="返回"
          onPressLeft={() => Toast.message('返回')}
          rightText={<Icon name="search" size={20} />}
          onPressRight={() => Toast.message('按钮')}
        />
      </DemoBlock>
    </ScrollView>
  );
};

export default NavBarDemo;
