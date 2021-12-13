import React, { memo, useState } from 'react';
import { ScrollView, Image, StyleSheet, View } from 'react-native';
import { Checkbox, Button, Cell } from 'dice-ui';
import { DemoBlock } from '../../../components';

const activeIcon = 'https://img.yzcdn.cn/vant/user-active.png';
const inactiveIcon = 'https://img.yzcdn.cn/vant/user-inactive.png';

const CheckboxExample = memo(() => {
  const [value, setValue] = useState<any[]>([]);
  const [cellValue, setCellValue] = useState<string[]>([]);

  const toggle = (check: string) => {
    const index = cellValue.indexOf(check);
    const nextCellValue = [...cellValue];
    if (index === -1) {
      nextCellValue.push(check);
    } else {
      nextCellValue.splice(index, 1);
    }
    setCellValue(nextCellValue);
  };

  return (
    <ScrollView>
      <DemoBlock title="基础用法" inset>
        <Checkbox defaultChecked>复选框</Checkbox>
      </DemoBlock>
      <DemoBlock title="禁用状态" inset>
        <Checkbox disabled>复选框</Checkbox>
        <Checkbox defaultChecked disabled style={styles.checkbox}>
          复选框
        </Checkbox>
      </DemoBlock>
      <DemoBlock title="自定义形状" inset>
        <Checkbox defaultChecked shape="square">
          复选框
        </Checkbox>
      </DemoBlock>
      <DemoBlock title="自定义颜色" inset>
        <Checkbox checkedColor="#ee0a24">复选框</Checkbox>
      </DemoBlock>
      <DemoBlock title="自定义大小" inset>
        <Checkbox iconSie={24} defaultChecked>
          复选框
        </Checkbox>
      </DemoBlock>
      <DemoBlock title="自定义图标" inset>
        <Checkbox
          icon={({ checked }) => (
            <Image style={styles.imgIcon} source={{ uri: checked ? activeIcon : inactiveIcon }} />
          )}
        >
          复选框
        </Checkbox>
      </DemoBlock>
      <DemoBlock title="复选框组" inset>
        <Checkbox.Group>
          <Checkbox value="a">复选框 a</Checkbox>
          <Checkbox value="b" style={styles.checkbox}>
            复选框 b
          </Checkbox>
        </Checkbox.Group>
      </DemoBlock>
      <DemoBlock title="水平排列" inset>
        <Checkbox.Group direction="horizontal">
          <Checkbox value="a">复选框 a</Checkbox>
          <Checkbox value="b" style={styles.checkboxHorizontal}>
            复选框 b
          </Checkbox>
        </Checkbox.Group>
      </DemoBlock>
      <DemoBlock title="全选与反选" inset>
        <Checkbox.Group value={value} onChange={setValue}>
          <Checkbox value="a">复选框 a</Checkbox>
          <Checkbox value="b" style={styles.checkbox}>
            复选框 b
          </Checkbox>
          <Checkbox value="c" style={styles.checkbox}>
            复选框 c
          </Checkbox>
        </Checkbox.Group>
        <View style={{ flexDirection: 'row', marginTop: 16 }}>
          <Button type="primary" onPress={() => setValue(['a', 'b', 'c'])}>
            全选
          </Button>
          <Button type="primary" style={{ marginLeft: 16 }} onPress={() => setValue([])}>
            反选
          </Button>
        </View>
      </DemoBlock>
      <DemoBlock title="搭配单元格组件使用" inset>
        <Cell.Group>
          <Cell
            title="复选框a"
            value={<Checkbox checked={cellValue.includes('a')} />}
            onPress={() => toggle('a')}
          />
          <Cell
            title="复选框b"
            value={<Checkbox checked={cellValue.includes('b')} />}
            onPress={() => toggle('b')}
          />
        </Cell.Group>
      </DemoBlock>
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
