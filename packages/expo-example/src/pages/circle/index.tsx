import React, { memo, useState } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Circle, Button } from 'dice-ui';
import { DemoBlock } from '../../components';

const format = (rate: number) => Math.min(Math.max(rate, 0), 100);

const styles = StyleSheet.create({
  buttonGroup: { flexDirection: 'row', justifyContent: 'center', marginTop: 15 },
  circle: {
    marginLeft: 16,
    marginTop: 16,
  },
  contet: { flexDirection: 'row', flexWrap: 'wrap' },
});

const CircleExample = memo(() => {
  const [rate, setRate] = useState(70);

  const add = () => {
    setRate(r => format(r + 20));
  };

  const reduce = () => {
    setRate(r => format(r - 20));
  };

  return (
    <ScrollView>
      <DemoBlock title="基础用法" contentStyle={styles.contet}>
        <Circle rate={rate} text={`${rate}%`} style={styles.circle} />
      </DemoBlock>
      <DemoBlock title="样式定制">
        <View style={styles.contet}>
          <Circle strokeWidth={60} rate={rate} text="宽度定制" style={styles.circle} />
          <Circle
            color="#ee0a24"
            layerColor="#ebedf0"
            rate={rate}
            text="颜色定制"
            style={styles.circle}
          />
          <Circle
            color={{
              '0%': '#3fecff',
              '100%': '#6149f6',
            }}
            rate={rate}
            text="渐变色"
            style={styles.circle}
          />
          <Circle
            color="#07c160"
            clockwise={false}
            rate={rate}
            text="逆时针"
            style={styles.circle}
          />
          <Circle
            color="#7232dd"
            clockwise={false}
            size={120}
            rate={rate}
            text="大小定制"
            style={styles.circle}
          />
        </View>

        <View style={styles.buttonGroup}>
          <Button onPress={add} type="primary">
            增加
          </Button>
          <Button onPress={reduce} type="danger">
            减少
          </Button>
        </View>
      </DemoBlock>
      <DemoBlock title="起始位置" contentStyle={styles.contet}>
        <Circle startPosition="left" rate={70} text="左侧" style={styles.circle} />
        <Circle startPosition="right" rate={70} text="右侧" style={styles.circle} />
        <Circle startPosition="bottom" rate={70} text="底部" style={styles.circle} />
      </DemoBlock>
    </ScrollView>
  );
});

export default CircleExample;
