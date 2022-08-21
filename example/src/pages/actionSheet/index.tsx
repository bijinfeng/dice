import React, { memo, useState } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Cell, ActionSheet, ActionSheetAction } from 'rn-vant';
import { DemoBlock } from '../../components';

const defaultActions: ActionSheetAction[] = [
  { name: '选项一' },
  { name: '选项二' },
  { name: '选项三' },
];
const actions1: ActionSheetAction[] = [
  { name: '选项一' },
  { name: '选项二' },
  { name: '选项三', subname: '描述信息' },
];
const actions2: ActionSheetAction[] = [
  { name: '着色选项', color: '#ee0a24' },
  { name: '禁用选项', disabled: true },
  { name: '加载选项', loading: true },
];

type OpenParams = {
  list?: ActionSheetAction[];
  cancel?: string;
  desc?: string;
};

const ActionSheetExample = memo(() => {
  const [actions, setActions] = useState(defaultActions);
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const [cancelText, setCancelText] = useState('');
  const [description, setDescription] = useState('');

  const onOpen = (params?: OpenParams) => {
    setCancelText(params?.cancel ?? '');
    setDescription(params?.desc ?? '');
    setActions(params?.list ?? defaultActions);
    setVisible(true);
  };

  const onClose = () => {
    setCancelText('');
    setDescription('');
    setActions(defaultActions);
    setVisible(false);
  };

  return (
    <ScrollView>
      <DemoBlock title="基础用法">
        <Cell.Group inset>
          <Cell title="基础用法" isLink onPress={onOpen} />
          <Cell title="展示取消按钮" isLink onPress={() => onOpen({ cancel: '取消' })} />
          <Cell
            title="展示描述信息"
            isLink
            onPress={() => onOpen({ desc: '这是一段描述信息', cancel: '取消', list: actions1 })}
          />
        </Cell.Group>
      </DemoBlock>
      <DemoBlock title="选项状态">
        <Cell.Group inset>
          <Cell
            title="选项状态"
            isLink
            onPress={() => onOpen({ cancel: '取消', list: actions2 })}
          />
        </Cell.Group>
      </DemoBlock>
      <DemoBlock title="自定义面板">
        <Cell.Group inset>
          <Cell title="自定义面板" isLink onPress={() => setVisible1(true)} />
        </Cell.Group>
      </DemoBlock>

      <ActionSheet
        visible={visible}
        actions={actions}
        onClose={onClose}
        cancelText={cancelText}
        description={description}
      />

      <ActionSheet visible={visible1} onClose={() => setVisible1(false)} title="标题" closeable>
        <View>
          <Text style={{ paddingHorizontal: 16, paddingTop: 16, paddingBottom: 160 }}>内容</Text>
        </View>
      </ActionSheet>
    </ScrollView>
  );
});

export default ActionSheetExample;
