import React, { memo, useState } from 'react';
import { ScrollView } from 'react-native';
import { Switch, Cell } from 'dice-ui';
import { DemoBlock } from '../../../components';

const SwitchExample = memo(() => {
  const [value] = useState(false);

  return (
    <ScrollView>
      <DemoBlock title="基础用法" inset>
        <Switch defaultChecked onChange={checked => console.log(`switch to ${checked}`)} />
      </DemoBlock>
      <DemoBlock title="禁用状态" inset>
        <Switch disabled defaultChecked />
      </DemoBlock>
      <DemoBlock title="加载状态" inset>
        <Switch loading defaultChecked />
      </DemoBlock>
      <DemoBlock title="自定义大小" inset>
        <Switch size={24} defaultChecked />
      </DemoBlock>
      <DemoBlock title="自定义颜色" inset>
        <Switch activeColor="#ee0a24" inactiveColor="#dcdee0" defaultChecked />
      </DemoBlock>
      <DemoBlock title="异步控制" inset>
        <Switch checked={value} />
      </DemoBlock>
      <DemoBlock title="搭配单元格使用" inset>
        <Cell title="标题" value={<Switch defaultChecked />} />
      </DemoBlock>
    </ScrollView>
  );
});

export default SwitchExample;
