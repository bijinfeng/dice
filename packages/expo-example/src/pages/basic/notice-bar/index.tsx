import React, { FC } from 'react';
import { NoticeBar } from 'dice-ui';
import { ScrollView, View } from 'react-native';
import { DemoBlock } from '../../../components';

const NoticeBarDemo: FC = () => {
  return (
    <ScrollView>
      <DemoBlock title="基础用法">
        <NoticeBar
          leftIcon="volume-o"
          text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
        />
      </DemoBlock>
      <DemoBlock title="滚动播放">
        <NoticeBar scrollable text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。" />
      </DemoBlock>
      <DemoBlock title="多行展示">
        <NoticeBar wrapable text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。" />
      </DemoBlock>
      <DemoBlock title="通知栏状态">
        <NoticeBar mode="closeable">技术是开发它的人的共同灵魂。</NoticeBar>
        <View style={{ marginTop: 4 }}>
          <NoticeBar mode="link">技术是开发它的人的共同灵魂。</NoticeBar>
        </View>
      </DemoBlock>
      <DemoBlock title="自定义样式">
        <NoticeBar
          leftIcon="info-o"
          background="rgb(236, 249, 255)"
          color="rgb(25, 137, 250)"
          text="技术是开发它的人的共同灵魂。"
        />
      </DemoBlock>
    </ScrollView>
  );
};

export default NoticeBarDemo;
