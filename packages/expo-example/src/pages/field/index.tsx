import React, { memo } from 'react';
import { ScrollView, Text } from 'react-native';
import { Field, Cell, Toast } from 'dice-ui';
import { SmileO, MusicO, WarningO } from '@dice-ui/icons';
import { DemoBlock } from '../../components';

const FieldExample = memo(() => {
  return (
    <ScrollView>
      <DemoBlock title="基础用法">
        <Cell.Group inset>
          <Field
            label="文本"
            tooltip="提示tooltip"
            intro={<Text>We must make sure that your are a human.</Text>}
            placeholder="请输入文本"
          />
        </Cell.Group>
      </DemoBlock>
      <DemoBlock title="自定义类型">
        <Cell.Group inset>
          <Field label="文本" placeholder="请输入文本" />
          <Field label="手机号" type="tel" placeholder="请输入手机号" />
          <Field label="整数" type="digit" placeholder="请输入整数" />
          <Field label="数字" type="number" placeholder="请输入数字（支持小数）" />
          <Field label="密码" type="password" placeholder="请输入密码" />
        </Cell.Group>
      </DemoBlock>
      <DemoBlock title="禁用输入框">
        <Cell.Group inset>
          <Field label="文本" value="输入框只读" readonly />
          <Field label="文本" value="输入框已禁用" disabled />
        </Cell.Group>
      </DemoBlock>
      <DemoBlock title="显示图标">
        <Cell.Group inset>
          <Field
            label="文本"
            leftIcon={<SmileO />}
            rightIcon={<WarningO />}
            placeholder="显示图标"
            onClickLeftIcon={() => Toast.info('左侧图标点击')}
            onClickRightIcon={() => Toast.info('右侧图标点击')}
          />
          <Field clearable label="文本" leftIcon={<MusicO />} placeholder="显示清除图标" />
        </Cell.Group>
      </DemoBlock>
      <DemoBlock title="错误提示">
        <Cell.Group inset>
          <Field error required label="用户名" placeholder="请输入用户名" />
          <Field required label="手机号" placeholder="请输入手机号" errorMessage="手机号格式错误" />
        </Cell.Group>
      </DemoBlock>
    </ScrollView>
  );
});

export default FieldExample;
