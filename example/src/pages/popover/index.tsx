import React, { FC, useRef } from 'react';
import { Button, Popover, Toast, PopoverAction, Space, Grid, PopoverInstance } from 'rn-vant';
import { ScrollView } from 'react-native';
import { AddO, MusicO, MoreO, PhotoO } from '@rn-vant/icons';
import { DemoBlock } from '../../components';

const actions: PopoverAction[] = [{ text: '选项一' }, { text: '选项二' }, { text: '选项三' }];
const disabledActions: PopoverAction[] = [
  { text: '选项一', disabled: true },
  { text: '选项二', disabled: true },
  { text: '选项三' },
];
const iconActions: PopoverAction[] = [
  { text: '选项一', icon: <AddO /> },
  { text: '选项二', icon: <MusicO /> },
  { text: '选项三', icon: <MoreO /> },
];

const PopoverDemo: FC = () => {
  const popover = useRef<PopoverInstance>(null);
  const select = (option: PopoverAction) => Toast.info(option.text);

  return (
    <ScrollView>
      <DemoBlock title="基础用法" inset>
        <Space>
          <Popover
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
      <DemoBlock title="选项配置" inset>
        <Space>
          <Popover
            actions={iconActions}
            onSelect={select}
            reference={<Button type="primary">展示图标</Button>}
          />
          <Popover
            actions={disabledActions}
            onSelect={select}
            reference={<Button type="primary">禁用选项</Button>}
          />
        </Space>
      </DemoBlock>
      <DemoBlock title="自定义内容" inset>
        <Space>
          <Popover ref={popover} reference={<Button type="primary">自定义内容</Button>}>
            <Grid border={false} columnNum={3} square style={{ width: 240 }}>
              {Array.from({ length: 6 }, (_, i) => (
                <Grid.Item
                  onPress={() => popover.current?.hide()}
                  key={i}
                  icon={<PhotoO />}
                  text="文字"
                />
              ))}
            </Grid>
          </Popover>
        </Space>
      </DemoBlock>
    </ScrollView>
  );
};

export default PopoverDemo;
