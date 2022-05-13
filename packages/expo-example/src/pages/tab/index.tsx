import React, { memo } from 'react';
import { ScrollView, Text } from 'react-native';
import { Tabs } from 'dice-ui';
import { DemoBlock } from '../../components';

const renderContent = (count = 3) =>
  Array(count)
    .fill(null)
    .map((_, idx) => (
      // eslint-disable-next-line react/no-array-index-key
      <Tabs.TabPane key={idx} title={`标签${idx + 1}`}>
        <Text>内容 {idx}</Text>
      </Tabs.TabPane>
    ));

const TabExample = memo(() => {
  return (
    <ScrollView>
      <DemoBlock title="基础用法">
        <Tabs>{renderContent()}</Tabs>
      </DemoBlock>
      <DemoBlock title="标签栏滚动">
        <Tabs>{renderContent(8)}</Tabs>
      </DemoBlock>
      {/* <DemoBlock title="滑动切换">
        <Tabs swipeable>{renderContent()}</Tabs>
      </DemoBlock> */}
    </ScrollView>
  );
});

export default TabExample;
