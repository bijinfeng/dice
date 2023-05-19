import React, { memo } from 'react';
import { ScrollView } from 'react-native';
import { Selector } from '@pingtou/rn-vant';
import { DemoBlock } from '../../components';

const options = [
  {
    label: '选项一',
    value: '1',
  },
  {
    label: '选项二',
    value: '2',
  },
  {
    label: '选项三',
    value: '3',
  },
];

const SelectorExample = memo(() => {
  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <DemoBlock title="单选" inset>
        <Selector
          options={options}
          defaultValue={['1']}
          onChange={(arr, extend) => console.log(arr, extend.items)}
        />
      </DemoBlock>
      <DemoBlock title="多选" inset>
        <Selector
          options={options}
          defaultValue={['2', '3']}
          multiple
          onChange={(arr, extend) => console.log(arr, extend.items)}
        />
      </DemoBlock>
      <DemoBlock title="禁用状态" inset>
        <Selector
          disabled
          defaultValue={['1']}
          options={[
            {
              label: '选项一',
              value: '1',
            },
            {
              label: '选项二',
              value: '2',
              disabled: true,
            },
            {
              label: '选项三',
              value: '3',
            },
          ]}
        />
      </DemoBlock>
      <DemoBlock title="描述选项" inset>
        <Selector
          options={[
            {
              label: '选项一',
              value: '1',
              description: '描述信息',
            },
            {
              label: '选项二',
              value: '2',
              description: '描述信息',
            },
          ]}
        />
      </DemoBlock>
    </ScrollView>
  );
});

export default SelectorExample;
