import React, { memo } from 'react';
import { ScrollView } from 'react-native';
import { Empty, Tabs, Button } from 'dice-ui';
import { DemoBlock } from '../../components';

const EmptyExample = memo(() => {
  return (
    <ScrollView>
      <DemoBlock title="基础用法">
        <Empty description="描述文字" />
      </DemoBlock>
      <DemoBlock title="图片类型">
        <Tabs>
          <Tabs.TabPane title="通用错误">
            <Empty image="error" description="描述文字" />
          </Tabs.TabPane>
          <Tabs.TabPane title="网络错误">
            <Empty image="network" description="描述文字" />
          </Tabs.TabPane>
          <Tabs.TabPane title="搜索提示">
            <Empty image="search" description="描述文字" />
          </Tabs.TabPane>
        </Tabs>
      </DemoBlock>
      <DemoBlock title="自定义大小">
        <Empty imageSize={100} description="描述文字" />
      </DemoBlock>
      <DemoBlock title="自定义图片">
        <Empty
          image="https://cdn.jsdelivr.net/npm/@vant/assets/custom-empty-image.png"
          imageSize={80}
          description="描述文字"
        />
      </DemoBlock>
      <DemoBlock title="底部内容">
        <Empty description="描述文字">
          <Button round type="primary" style={{ width: 160, height: 40 }}>
            按钮
          </Button>
        </Empty>
      </DemoBlock>
    </ScrollView>
  );
});

export default EmptyExample;
