import React, { memo, useState } from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';
import { Slider } from 'dice-ui';
import { DemoBlock } from '../../components';

const SliderExample = memo(() => {
  const [value1, setValue1] = useState(10);
  const [value2, setValue2] = useState<number[]>([10, 50]);
  const [value3, setValue3] = useState(10);
  const [value4, setValue4] = useState(10);
  const [value5, setValue5] = useState(10);
  const [value6, setValue6] = useState(10);
  // const [value7, setValue7] = useState(50);
  // const [value8, setValue8] = useState<number[]>([20, 50]);

  return (
    <ScrollView>
      <DemoBlock title="基础用法" inset>
        <Slider value={value1} onChange={setValue1} />
      </DemoBlock>
      <DemoBlock title="双滑块" inset>
        <Slider range value={value2} onChange={setValue2} />
      </DemoBlock>
      <DemoBlock title="指定选择范围" inset>
        <Slider value={value3} onChange={setValue3} min={-50} max={50} />
      </DemoBlock>
      <DemoBlock title="禁用" inset>
        <Slider value={10} disabled />
      </DemoBlock>
      <DemoBlock title="指定步长" inset>
        <Slider value={value4} onChange={setValue4} step={10} />
      </DemoBlock>
      <DemoBlock title="自定义样式" inset>
        <Slider value={value5} onChange={setValue5} barHeight={4} activeColor="#ee0a24" />
      </DemoBlock>
      <DemoBlock title="自定义按钮" inset>
        <Slider
          value={value6}
          onChange={setValue6}
          activeColor="#ee0a24"
          button={
            <View style={styles.customButton}>
              <Text style={styles.customText}>{value6}</Text>
            </View>
          }
        />
      </DemoBlock>
      {/* <DemoBlock title="垂直方向" inset>
        <View style={{ height: 150 }}>
          <Slider vertical style={{ marginRight: 100 }} value={value7} onChange={setValue7} />
          <Slider range vertical value={value8} onChange={setValue8} />
        </View>
      </DemoBlock> */}
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  customButton: {
    backgroundColor: '#ee0a24',
    borderRadius: 100,
    overflow: 'hidden',
  },
  customText: {
    color: '#fff',
    fontSize: 10,
    lineHeight: 18,
    textAlign: 'center',
    width: 26,
  },
});

export default SliderExample;
