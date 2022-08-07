import React from 'react';
import { Form, Cell, Switch, Checkbox, Radio, Stepper, Rate, Slider, Space } from 'rn-vant';
import { DemoBlock } from '../../components';

export default () => {
  return (
    <DemoBlock title="表单项类型">
      <Form>
        <Cell.Group inset>
          <Form.Item name="switch" label="开关">
            <Switch size={20} />
          </Form.Item>
          <Form.Item name="checkbox" label="复选框">
            <Checkbox shape="square" />
          </Form.Item>
          <Form.Item name="checkbox_group" label="复选框组" defaultValue={['c1', 'c2']}>
            <Checkbox.Group direction="horizontal">
              <Space>
                <Checkbox shape="square" value="c1">
                  复选框1
                </Checkbox>
                <Checkbox shape="square" value="c2">
                  复选框2
                </Checkbox>
              </Space>
            </Checkbox.Group>
          </Form.Item>
          <Form.Item name="radio" label="单选框">
            <Radio.Group direction="horizontal">
              <Space>
                <Radio value="r1">单选框1</Radio>
                <Radio value="r2">单选框2</Radio>
              </Space>
            </Radio.Group>
          </Form.Item>
          <Form.Item name="stepper" label="步进器" defaultValue={1}>
            <Stepper />
          </Form.Item>
          <Form.Item name="rate" label="评分" defaultValue={3}>
            <Rate />
          </Form.Item>
          <Form.Item name="slider" label="滑块" defaultValue={25}>
            <Slider />
          </Form.Item>
        </Cell.Group>
      </Form>
    </DemoBlock>
  );
};
