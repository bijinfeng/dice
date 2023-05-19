import React, { memo } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Icon from '@pingtou/rn-vant-icons';
import { Badge } from '@pingtou/rn-vant';
import { DemoBlock } from '../../components';

const BadgeExample = memo(() => {
  return (
    <ScrollView>
      <DemoBlock title="基础用法" contentStyle={styles.content} inset>
        <Badge content={5} style={styles.badge}>
          <View style={styles.child} />
        </Badge>
        <Badge content={10} style={styles.badge}>
          <View style={styles.child} />
        </Badge>
        <Badge content="hot" style={styles.badge}>
          <View style={styles.child} />
        </Badge>
        <Badge dot>
          <View style={styles.child} />
        </Badge>
      </DemoBlock>
      <DemoBlock title="最大值" contentStyle={styles.content} inset>
        <Badge content={20} max={9} style={styles.badge}>
          <View style={styles.child} />
        </Badge>
        <Badge content="99" max="20" style={styles.badge}>
          <View style={styles.child} />
        </Badge>
        <Badge content="9999" max="99">
          <View style={styles.child} />
        </Badge>
      </DemoBlock>
      <DemoBlock title="自定义颜色" contentStyle={styles.content} inset>
        <Badge content={5} color="#1989fa" style={styles.badge}>
          <View style={styles.child} />
        </Badge>
        <Badge content={10} color="#1989fa" style={styles.badge}>
          <View style={styles.child} />
        </Badge>
        <Badge color="#1989fa" dot>
          <View style={styles.child} />
        </Badge>
      </DemoBlock>
      <DemoBlock title="自定义徽标内容" contentStyle={styles.content} inset>
        <Badge content={<Icon name="success" size={12} color="#fff" />} style={styles.badge}>
          <View style={styles.child} />
        </Badge>
        <Badge content={<Icon name="cross" size={12} color="#fff" />} style={styles.badge}>
          <View style={styles.child} />
        </Badge>
        <Badge content={<Icon name="down" size={12} color="#fff" />} style={styles.badge}>
          <View style={styles.child} />
        </Badge>
      </DemoBlock>
      <DemoBlock title="独立展示" contentStyle={styles.content} inset>
        <Badge content="20" style={{ marginRight: 16 }} />
        <Badge content="200" max="99" />
      </DemoBlock>
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  badge: {
    marginRight: 16,
  },
  child: {
    backgroundColor: '#f2f3f5',
    borderRadius: 4,
    height: 40,
    width: 40,
  },
  content: {
    flexDirection: 'row',
  },
});

export default BadgeExample;
