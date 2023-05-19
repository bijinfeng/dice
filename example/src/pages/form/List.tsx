import React from 'react';
import { View } from 'react-native';
import { Form, Typography, Button, Space, Cell, Input } from '@pingtou/rn-vant';
import { AddO, Delete } from '@pingtou/rn-vant-icons';
import { DemoBlock } from '../../components';

export default () => {
  return (
    <DemoBlock title="动态增减表单项">
      <Cell.Group>
        <Form defaultValues={{ users: [{ name: 'react-vant', age: '1' }] }} style={{ padding: 10 }}>
          <Form.List name="users">
            {({ fields, append, remove }) => {
              return (
                <>
                  {fields.map((field, idx) => (
                    <View key={field.id} style={{ marginBottom: 10 }}>
                      <Space align="center" justify="between">
                        <Typography.Title level={4}>用户{idx + 1}</Typography.Title>
                        <Delete onPress={() => remove(idx)} />
                      </Space>
                      <Cell.Group
                        border={false}
                        style={{
                          borderRadius: 6,
                          overflow: 'hidden',
                          borderColor: '#f2f2f2',
                          borderWidth: 1,
                        }}
                      >
                        <Form.Item label="姓名" name={`users.${idx}.name`}>
                          <Input placeholder="请输入用户姓名" />
                        </Form.Item>
                        <Form.Item label="年龄" name={`users.${idx}.age`}>
                          <Input placeholder="请输入用户年龄" />
                        </Form.Item>
                      </Cell.Group>
                    </View>
                  ))}
                  <Button
                    round
                    plain
                    icon={<AddO size={14} />}
                    size="small"
                    onPress={() => append({ name: '', age: '' })}
                  >
                    新增用户
                  </Button>
                </>
              );
            }}
          </Form.List>
        </Form>
      </Cell.Group>
    </DemoBlock>
  );
};
