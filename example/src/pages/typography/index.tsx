import React, { FC } from 'react';
import { Typography } from 'rn-vant';
import { ScrollView } from 'react-native';
import { DemoBlock } from '../../components';

const TypographyDemo: FC = () => {
  return (
    <ScrollView>
      <DemoBlock title="基础用法" inset>
        <Typography.Text>
          In the process of <Typography.Text type="danger">internal</Typography.Text>{' '}
          <Typography.Text delete>desktop</Typography.Text>applications development,
          <Typography.Text type="primary"> many different</Typography.Text> design specs and{' '}
          <Typography.Text underline>implementations</Typography.Text>would be{' '}
          <Typography.Text type="warning">involved</Typography.Text>
        </Typography.Text>
      </DemoBlock>
      <DemoBlock title="类型" inset>
        <Typography.Text type="danger">这是一条文本</Typography.Text>
        <Typography.Text type="primary">这是一条文本</Typography.Text>
        <Typography.Text type="warning">这是一条文本</Typography.Text>
        <Typography.Text type="secondary">这是一条文本</Typography.Text>
      </DemoBlock>
      <DemoBlock title="文本省略" inset>
        <Typography.Text ellipsis>
          In the process of internal desktop applications development, many different design specs
          and implementations would be involved
        </Typography.Text>
        <Typography.Text ellipsis={2}>
          In the process of internal desktop applications development, many different design specs
          and implementations would be involved
        </Typography.Text>
      </DemoBlock>
      <DemoBlock title="标题" inset>
        <Typography.Title level={1}>一级测试标题</Typography.Title>
        <Typography.Title level={2}>二级测试标题</Typography.Title>
        <Typography.Title level={3}>三级测试标题</Typography.Title>
        <Typography.Title level={4}>四级测试标题</Typography.Title>
        <Typography.Title level={5}>五级测试标题</Typography.Title>
      </DemoBlock>
      <DemoBlock title="链接样式" inset>
        <Typography.Link>测试Link</Typography.Link>
      </DemoBlock>
    </ScrollView>
  );
};

export default TypographyDemo;
