import React, { useContext } from 'react';
import { View } from 'react-native';
import { Cell, Switch, Rate, Slider, Form, Button } from 'rn-vant';
import { DemoBlock } from '../../components';
import { GlobalContext } from '../../GlobalContext';

const ConfigProviderExample = () => {
  const { isDarkMode, setThemeMode } = useContext(GlobalContext);

  return (
    <View>
      <DemoBlock title="深色模式">
        <Cell
          title="切换深色模式"
          value={
            <Switch
              checked={isDarkMode}
              onChange={() => setThemeMode(isDarkMode ? 'light' : 'dark')}
            />
          }
          center
        />
      </DemoBlock>
      <DemoBlock title="默认主题">
        <Form>
          <Cell.Group border={false}>
            <Form.Item label="评分" name="rate">
              <Rate />
            </Form.Item>
            <Form.Item label="滑块" name="slider">
              <Slider />
            </Form.Item>
          </Cell.Group>
          <Button round type="primary" style={{ marginHorizontal: 16, marginTop: 16 }}>
            提交
          </Button>
        </Form>
      </DemoBlock>
      <DemoBlock title="定制主题">
        <Form>
          <Cell.Group border={false}>
            <Form.Item label="评分" name="rate">
              <Rate />
            </Form.Item>
            <Form.Item label="滑块" name="slider">
              <Slider />
            </Form.Item>
          </Cell.Group>
          <Button round type="primary" style={{ marginHorizontal: 16, marginTop: 16 }}>
            提交
          </Button>
        </Form>
      </DemoBlock>
    </View>
  );
};

export default ConfigProviderExample;
