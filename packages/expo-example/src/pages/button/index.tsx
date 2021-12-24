import React, { memo } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Button } from 'dice-ui';
import { DemoBlock } from '../../components';

const ButtonExample = memo(() => {
  return (
    <ScrollView>
      <DemoBlock title="按钮类型" contentStyle={styles.card}>
        <Button type="primary" style={styles.button}>
          主要按钮
        </Button>
        <Button type="success" style={styles.button}>
          成功按钮
        </Button>
        <Button type="default" style={styles.button}>
          默认按钮
        </Button>
        <Button type="warning" style={styles.button}>
          警告按钮
        </Button>
        <Button type="danger" style={styles.button}>
          危险按钮
        </Button>
      </DemoBlock>
      <DemoBlock title="朴素按钮" contentStyle={styles.card}>
        <Button plain type="primary" style={styles.button}>
          朴素按钮
        </Button>
        <Button plain type="success" style={styles.button}>
          朴素按钮
        </Button>
      </DemoBlock>
      <DemoBlock title="禁用状态" contentStyle={styles.card}>
        <Button disabled type="primary" style={styles.button}>
          禁用状态
        </Button>
        <Button disabled type="success" style={styles.button}>
          禁用状态
        </Button>
      </DemoBlock>
      <DemoBlock title="加载状态" contentStyle={styles.card}>
        <Button loading type="primary" style={styles.button} />
        <Button loading type="primary" loadingType="spinner" style={styles.button} />
        <Button loading type="success" loadingText="加载中..." style={styles.button} />
      </DemoBlock>
      <DemoBlock title="按钮形状" contentStyle={styles.card}>
        <Button square type="primary" style={styles.button}>
          方形按钮
        </Button>
        <Button round type="success" style={styles.button}>
          圆形按钮
        </Button>
      </DemoBlock>
      <DemoBlock title="图标按钮" contentStyle={styles.card}>
        <Button icon="plus" type="primary" style={styles.button} />
        <Button icon="plus" type="primary" style={styles.button}>
          按钮
        </Button>
      </DemoBlock>
      <DemoBlock title="按钮尺寸" contentStyle={styles.card}>
        <Button type="primary" size="large" style={styles.button}>
          大号按钮
        </Button>
        <Button type="primary" size="normal" style={styles.button}>
          普通按钮
        </Button>
        <Button type="primary" size="small" style={styles.button}>
          小型按钮
        </Button>
        <Button type="primary" size="mini" style={styles.button}>
          迷你按钮
        </Button>
      </DemoBlock>
      <DemoBlock title="自定义颜色" contentStyle={styles.card}>
        <Button color="#7232dd" style={styles.button}>
          单色按钮
        </Button>
        <Button color="#7232dd" plain style={styles.button}>
          单色按钮
        </Button>
      </DemoBlock>
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  button: {
    marginBottom: 16,
    marginLeft: 16,
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default ButtonExample;
