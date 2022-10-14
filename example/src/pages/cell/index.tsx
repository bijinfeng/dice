import React, { memo } from 'react';
import { ScrollView } from 'react-native';
import { Cell } from 'rn-vant';
import { DemoBlock } from '../../components';

const CellExample = memo(() => {
  return (
    <ScrollView>
      <DemoBlock title="基础用法">
        <Cell.Group>
          <Cell title="单元格" value="内容" />
          <Cell title="单元格" value="内容" label="描述信息" />
        </Cell.Group>
      </DemoBlock>
      <DemoBlock title="卡片风格">
        <Cell.Group inset>
          <Cell title="单元格" value="内容" />
          <Cell title="单元格" value="内容" label="描述信息" />
        </Cell.Group>
      </DemoBlock>
      <DemoBlock title="单元格大小">
        <Cell.Group>
          <Cell title="单元格" value="内容" size="large" />
          <Cell title="单元格" value="内容" label="描述信息" size="large" />
        </Cell.Group>
      </DemoBlock>
      <DemoBlock title="展示图标">
        <Cell title="单元格" value="内容" size="large" icon="bookmark" />
      </DemoBlock>
      <DemoBlock title="只设置 value">
        <Cell value="内容" />
      </DemoBlock>
      <DemoBlock title="展示箭头">
        <Cell.Group border={false}>
          <Cell title="单元格" isLink />
          <Cell title="单元格" isLink value="内容" />
          <Cell title="单元格" isLink arrowDirection="down" value="内容" />
        </Cell.Group>
      </DemoBlock>
    </ScrollView>
  );
});

export default CellExample;
