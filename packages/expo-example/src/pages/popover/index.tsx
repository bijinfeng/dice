import React, { FC } from 'react';
import { Button, Popover, Toast, PopoverAction, Space } from 'rn-vant';
import { ScrollView } from 'react-native';
import { DemoBlock } from '../../components';

const actions = [{ text: '选项一' }, { text: '选项二' }, { text: '选项三' }];

const PopoverDemo: FC = () => {
  const select = (option: PopoverAction) => Toast.info(option.text);

  return (
    <ScrollView>
      <DemoBlock title="基础用法" inset>
        <Space>
          <Popover
            placement="bottom-start"
            actions={actions}
            onSelect={select}
            reference={<Button type="primary">浅色风格</Button>}
          />
          <Popover
            actions={actions}
            theme="dark"
            onSelect={select}
            reference={<Button type="primary">深色风格</Button>}
          />
        </Space>
      </DemoBlock>
    </ScrollView>
  );
};

export default PopoverDemo;
