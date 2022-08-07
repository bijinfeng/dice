import React, { useRef } from 'react';
import { Form, Cell, Input, FormInstance, Button } from 'rn-vant';
import { DemoBlock } from '../../components';

interface FormValue {
  username: string;
  password: string;
}

export default () => {
  const formRef = useRef<FormInstance<FormValue>>(null);

  return (
    <DemoBlock title="基础用法">
      <Form<FormValue> form={formRef}>
        <Cell.Group inset>
          <Form.Item label="用户名" name="username" rules={{ required: '请填写用户名' }}>
            <Input placeholder="请输入用户名" />
          </Form.Item>
          <Form.Item label="密码" name="password" rules={{ required: '请填写密码' }}>
            <Input placeholder="请输入密码" type="password" />
          </Form.Item>
        </Cell.Group>
      </Form>
      <Button round type="primary" style={{ marginHorizontal: 16, marginTop: 16 }}>
        提交
      </Button>
    </DemoBlock>
  );
};
