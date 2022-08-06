import React, { memo, useRef } from 'react';
import { ScrollView } from 'react-native';
import { Form, Input, FormInstance, Button } from 'rn-vant';
import { DemoBlock } from '../../components';

interface FormValue {
  username: string;
  password: string;
}

const FormExample = memo(() => {
  const formRef = useRef<FormInstance<FormValue>>(null);

  return (
    <ScrollView>
      <DemoBlock title="基础用法">
        <Form<FormValue> form={formRef}>
          <Form.Item label="用户名" name="username" rules={{ required: '请填写用户名' }}>
            <Input placeholder="请输入用户名" />
          </Form.Item>
          <Form.Item label="密码" name="password" rules={{ required: '请填写密码' }}>
            <Input placeholder="请输入密码" type="password" />
          </Form.Item>
        </Form>
        <Button round type="primary" style={{ marginHorizontal: 16, marginTop: 16 }}>
          提交
        </Button>
      </DemoBlock>
    </ScrollView>
  );
});

export default FormExample;
