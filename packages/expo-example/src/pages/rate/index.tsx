import React, { memo, useState } from 'react';
import { ScrollView } from 'react-native';
import { Rate } from 'dice-ui';
import { DemoBlock } from '../../components';

const CheckboxExample = memo(() => {
  const [value, setValue] = useState(3);
  const [value1, setValue1] = useState(3.5);
  const onChange = (v: number) => setValue(v);

  return (
    <ScrollView>
      <DemoBlock title="基础用法" inset>
        <Rate value={value} onChange={onChange} />
      </DemoBlock>
      <DemoBlock title="自定义图标" inset>
        <Rate icon="fire" voidIcon="fire-o" value={value} onChange={onChange} />
      </DemoBlock>
      <DemoBlock title="自定义样式" inset>
        <Rate
          icon="fire"
          voidIcon="fire-o"
          color="#ffd21e"
          voidColor="#000"
          value={value}
          onChange={onChange}
        />
      </DemoBlock>
      <DemoBlock title="半星样式" inset>
        <Rate allowHalf value={value1} onChange={setValue1} />
      </DemoBlock>
      <DemoBlock title="自定义数量" inset>
        <Rate allowHalf value={value} count={8} onChange={onChange} />
      </DemoBlock>
      <DemoBlock title="禁用状态" inset>
        <Rate allowHalf value={value} disabled onChange={onChange} />
      </DemoBlock>
      <DemoBlock title="只读状态显示小数" inset>
        <Rate allowHalf defaultValue={3.6} readonly onChange={onChange} />
      </DemoBlock>
    </ScrollView>
  );
});

export default CheckboxExample;
