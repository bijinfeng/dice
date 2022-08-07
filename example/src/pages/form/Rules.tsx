import React from 'react';
import { Form, Cell, Input } from 'rn-vant';
import { DemoBlock } from '../../components';

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export default () => {
  return (
    <DemoBlock title="校验规则">
      <Form>
        <Cell.Group inset>
          <Form.Item
            name="text1"
            label="正则校验"
            rules={{ pattern: { value: /\d{6}/, message: '请输入6位数字' } }}
          >
            <Input placeholder="正则校验" />
          </Form.Item>
          <Form.Item
            name="text2"
            label="函数校验"
            rules={{
              validate: value => {
                return /1\d{10}/.test(value) || '请输入正确的手机号码';
              },
            }}
          >
            <Input placeholder="函数校验" />
          </Form.Item>
          <Form.Item
            name="text3"
            label="异步函数校验"
            rules={{
              validate: async value => {
                await sleep(1000);
                return /\d{6}/.test(value) || '请输入正确内容';
              },
            }}
          >
            <Input placeholder="异步函数校验" />
          </Form.Item>
        </Cell.Group>
      </Form>
    </DemoBlock>
  );
};
