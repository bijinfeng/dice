import React, { memo } from 'react';
import { ScrollView } from 'react-native';
import { Divider } from '@pingtou/rn-vant';
import { DemoBlock } from '../../components';

const DividerExample = memo(() => {
  return (
    <ScrollView>
      <DemoBlock title="基础用法">
        <Divider />
      </DemoBlock>
      <DemoBlock title="展示文字">
        <Divider>文字</Divider>
      </DemoBlock>
      <DemoBlock title="内容位置">
        <Divider contentPosition="left">文字</Divider>
        <Divider contentPosition="right">文字</Divider>
      </DemoBlock>
      <DemoBlock title="虚线">
        <Divider dashed>文字</Divider>
      </DemoBlock>
      <DemoBlock title="自定义样式">
        <Divider
          style={{ paddingHorizontal: 16 }}
          textStyle={{ color: '#1989fa' }}
          lineStyle={{ borderColor: '#1989fa' }}
        >
          文字
        </Divider>
      </DemoBlock>
    </ScrollView>
  );
});

export default DividerExample;
