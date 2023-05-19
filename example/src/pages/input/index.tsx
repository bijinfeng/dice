import React, { memo } from 'react';
import { ScrollView } from 'react-native';
import { Cell, Input, Toast } from '@pingtou/rn-vant';
import { DemoBlock } from '../../components';

const InputExample = memo(() => {
  return (
    <ScrollView>
      <DemoBlock title="基础用法">
        <Cell.Group>
          <Cell>
            <Input placeholder="请输入文本" />
          </Cell>
          <Cell>
            <Input type="tel" placeholder="请输入手机号" />
          </Cell>
          <Cell>
            <Input type="digit" placeholder="请输入整数" />
          </Cell>
          <Cell>
            <Input type="number" placeholder="请输入数字" />
          </Cell>
          <Cell>
            <Input type="password" placeholder="请输入密码" />
          </Cell>
        </Cell.Group>
      </DemoBlock>
      <DemoBlock title="清除按钮">
        <Cell>
          <Input placeholder="请输入文本" clearable clearTrigger="always" />
        </Cell>
      </DemoBlock>
      <DemoBlock title="多行输入">
        <Cell>
          <Input.TextArea placeholder="多行输入" />
        </Cell>
        <Cell style={{ marginTop: 10 }}>
          <Input.TextArea placeholder="自适应高度" autoSize />
        </Cell>
        <Cell style={{ marginTop: 10 }}>
          <Input.TextArea
            placeholder="最小高度80，最大高度120"
            autoSize={{ minHeight: 80, maxHeight: 120 }}
          />
        </Cell>
      </DemoBlock>
      <DemoBlock title="字数统计">
        <Cell>
          <Input
            placeholder="最多输入10个字符"
            maxLength={10}
            onOverlimit={() => Toast.info('不能超过10个字符哦🍺')}
          />
        </Cell>
        <Cell style={{ marginTop: 10 }}>
          <Input.TextArea placeholder="字数统计" maxLength={50} showWordLimit />
        </Cell>
        <Cell style={{ marginTop: 10 }}>
          <Input.TextArea
            placeholder="自定义输出"
            showWordLimit={({ currentCount }) => `已经输入${currentCount}个字啦 ✍️`}
          />
        </Cell>
      </DemoBlock>
      <DemoBlock title="对齐方式">
        <Cell.Group>
          <Cell>
            <Input placeholder="内容剧中" align="center" />
          </Cell>
          <Cell>
            <Input placeholder="内容右对齐" align="right" />
          </Cell>
        </Cell.Group>
      </DemoBlock>
      <DemoBlock title="输入框状态">
        <Cell.Group>
          <Cell>
            <Input value="只读模式" readOnly />
          </Cell>
          <Cell>
            <Input value="禁用模式" disabled />
          </Cell>
        </Cell.Group>
      </DemoBlock>
    </ScrollView>
  );
});

export default InputExample;
