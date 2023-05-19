import React, { memo, useContext } from 'react';
import { ScrollView, Text, ViewStyle, View } from 'react-native';
import { Tabs } from '@pingtou/rn-vant';
import { GlobalContext } from '../../GlobalContext';
import { DemoBlock } from '../../components';

const TabExample = memo(() => {
  const { themeVars } = useContext(GlobalContext);
  const containerStyle: ViewStyle = {
    paddingVertical: 24,
    paddingHorizontal: 20,
    backgroundColor: themeVars.background_2,
  };

  const renderContent = (count = 3) =>
    Array(count)
      .fill(null)
      .map((_, idx) => (
        // eslint-disable-next-line react/no-array-index-key
        <Tabs.TabPane key={idx} title={`标签${idx + 1}`}>
          <View style={containerStyle}>
            <Text>内容 {idx + 1}</Text>
          </View>
        </Tabs.TabPane>
      ));

  return (
    <ScrollView>
      <DemoBlock title="基础用法">
        <Tabs>{renderContent()}</Tabs>
      </DemoBlock>
      <DemoBlock title="标签栏滚动">
        <Tabs>{renderContent(8)}</Tabs>
      </DemoBlock>
      <DemoBlock title="标签栏滚动">
        <Tabs>
          <Tabs.TabPane title="标签1">
            <View style={containerStyle}>
              <Text>内容 1</Text>
            </View>
          </Tabs.TabPane>
          <Tabs.TabPane title="标签2" disabled>
            <View style={containerStyle}>
              <Text>内容 2</Text>
            </View>
          </Tabs.TabPane>
          <Tabs.TabPane title="标签3">
            <View style={containerStyle}>
              <Text>内容 3</Text>
            </View>
          </Tabs.TabPane>
        </Tabs>
      </DemoBlock>
      <DemoBlock title="收缩布局">
        <Tabs shrink>{renderContent(4)}</Tabs>
      </DemoBlock>
    </ScrollView>
  );
});

export default TabExample;
