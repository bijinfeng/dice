import React, { memo, useState } from 'react';
import { ScrollView, Text } from 'react-native';
import { Field, Cell, Toast, Button } from 'dice-ui';
import { SmileO, MusicO, WarningO } from '@dice-ui/icons';
import { DemoBlock } from '../../components';

const FieldExample = memo(() => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');

  const formatter = (val: string | number) => val.toString().replace(/\d/g, '');

  return (
    <ScrollView style={{ marginBottom: 30 }}>
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
      <DemoBlock title="插入按钮">
        <Cell.Group inset>
          <Field
            center
            clearable
            label="短信验证码"
            placeholder="请输入短信验证码"
            button={
              <Button size="small" type="primary">
                发送
              </Button>
            }
          />
        </Cell.Group>
      </DemoBlock>
      <DemoBlock title="格式化输入内容">
        <Cell.Group inset>
          <Field
            value={value1}
            label="文本"
            formatter={formatter}
            placeholder="在输入时执行格式化"
            onChange={setValue1}
          />
          <Field
            value={value2}
            label="文本"
            formatter={formatter}
            formatTrigger="onBlur"
            placeholder="在失焦时执行格式化"
            onChange={setValue2}
          />
        </Cell.Group>
      </DemoBlock>
    </ScrollView>
  );
});

export default FieldExample;
