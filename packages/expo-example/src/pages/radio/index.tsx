import React, { memo, useState } from 'react';
import { ScrollView, Image, StyleSheet } from 'react-native';
import { Radio, Cell } from 'dice-ui';
import { DemoBlock } from '../../components';

const activeIcon = 'https://img.yzcdn.cn/vant/user-active.png';
const inactiveIcon = 'https://img.yzcdn.cn/vant/user-inactive.png';

const CheckboxExample = memo(() => {
  const [cellValue, setCellValue] = useState<string>('a');

  return (
    <ScrollView>
      <DemoBlock title="基础用法" inset>
        <Radio.Group defaultValue={1}>
          <Radio value={1}>单选框 1</Radio>
          <Radio value={2} style={styles.checkbox}>
            单选框 2
          </Radio>
        </Radio.Group>
      </DemoBlock>
      <DemoBlock title="禁用状态" inset>
        <Radio.Group defaultValue={1} disabled>
          <Radio value={1}>单选框 1</Radio>
          <Radio value={2} style={styles.checkbox}>
            单选框 2
          </Radio>
        </Radio.Group>
      </DemoBlock>
      <DemoBlock title="自定义形状" inset>
        <Radio.Group defaultValue={1}>
          <Radio value={1} shape="square">
            单选框 1
          </Radio>
          <Radio value={2} shape="square" style={styles.checkbox}>
            单选框 2
          </Radio>
        </Radio.Group>
      </DemoBlock>
      <DemoBlock title="自定义颜色" inset>
        <Radio.Group defaultValue={1}>
          <Radio value={1} checkedColor="#ee0a24">
            单选框 1
          </Radio>
          <Radio value={2} checkedColor="#ee0a24" style={styles.checkbox}>
            单选框 2
          </Radio>
        </Radio.Group>
      </DemoBlock>
      <DemoBlock title="自定义大小" inset>
        <Radio.Group defaultValue={1}>
          <Radio value={1} iconSie={24}>
            单选框 1
          </Radio>
          <Radio value={2} iconSie={24} style={styles.checkbox}>
            单选框 2
          </Radio>
        </Radio.Group>
      </DemoBlock>
      <DemoBlock title="自定义图标" inset>
        <Radio.Group defaultValue={1}>
          <Radio
            value={1}
            icon={({ checked }) => (
              <Image style={styles.imgIcon} source={{ uri: checked ? activeIcon : inactiveIcon }} />
            )}
          >
            单选框 1
          </Radio>
          <Radio
            value={2}
            icon={({ checked }) => (
              <Image style={styles.imgIcon} source={{ uri: checked ? activeIcon : inactiveIcon }} />
            )}
            style={styles.checkbox}
          >
            单选框 2
          </Radio>
        </Radio.Group>
      </DemoBlock>
      <DemoBlock title="水平排列" inset>
        <Radio.Group defaultValue={1} direction="horizontal">
          <Radio value={1}>单选框 1</Radio>
          <Radio value={2} style={styles.checkboxHorizontal}>
            单选框 2
          </Radio>
        </Radio.Group>
      </DemoBlock>
      <Radio.Group value={cellValue}>
        <DemoBlock title="搭配单元格组件使用" inset style={{ flex: 1 }}>
          <Cell.Group>
            <Cell title="单选框 a" value={<Radio value="a" />} onPress={() => setCellValue('a')} />
            <Cell title="单选框 b" value={<Radio value="b" />} onPress={() => setCellValue('b')} />
          </Cell.Group>
        </DemoBlock>
      </Radio.Group>
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  checkbox: {
    marginTop: 8,
  },
  checkboxHorizontal: {
    marginLeft: 20,
  },
  imgIcon: {
    height: 20,
    width: 25,
  },
});

export default CheckboxExample;
