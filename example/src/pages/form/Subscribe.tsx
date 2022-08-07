import React from 'react';
import { Form, Cell, Radio, Space, Input, NoticeBar } from 'rn-vant';
import { DemoBlock } from '../../components';

export default () => {
  return (
    <DemoBlock title="Form.Subscribe">
      <Form defaultValues={{ type: 'mobile', account: '18888888888' }}>
        <Cell.Group inset>
          <Form.Item name="type" label="登录方式">
            <Radio.Group direction="horizontal">
              <Space>
                <Radio value="mobile">手机号</Radio>
                <Radio value="email">邮箱</Radio>
              </Space>
            </Radio.Group>
          </Form.Item>
          <Form.Subscribe to="type">
            {type => {
              return (
                <>
                  {type === 'mobile' && (
                    <Form.Item name="account" label="手机号">
                      <Input placeholder="请输入手机号" />
                    </Form.Item>
                  )}
                  {type === 'email' && (
                    <Form.Item name="account" label="邮箱">
                      <Input placeholder="请输入邮箱" />
                    </Form.Item>
                  )}
                </>
              );
            }}
          </Form.Subscribe>
          <Form.Subscribe to={['type', 'account']}>
            {([type, account]) => (
              <NoticeBar>
                你将使用 {type === 'mobile' ? '手机号' : '邮箱'} {account} 登录
              </NoticeBar>
            )}
          </Form.Subscribe>
        </Cell.Group>
      </Form>
    </DemoBlock>
  );
};
