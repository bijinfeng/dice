import React, { memo } from 'react';
import { ScrollView, Text } from 'react-native';
import { Tabs } from 'dice-ui';
import { DemoBlock } from '../../components';

const TabExample = memo(() => {
  const renderContent = () =>
    [1, 2, 3].map(item => (
      <Tabs.TabPane key={item} title={`标签${item}`}>
        <Text>内容 {item}</Text>
      </Tabs.TabPane>
    ));

  return (
    <ScrollView>
      <DemoBlock title="基础用法">
        <Tabs>{renderContent()}</Tabs>
      </DemoBlock>
      <DemoBlock title="样式风格">
        <Tabs type="card">{renderContent()}</Tabs>
      </DemoBlock>
      <DemoBlock title="滑动切换">
        <Tabs swipeable>{renderContent()}</Tabs>
      </DemoBlock>
    </ScrollView>
  );
});

export default TabExample;
