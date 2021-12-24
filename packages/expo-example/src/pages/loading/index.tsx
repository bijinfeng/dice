import React, { FC } from 'react';
import { Loading } from 'dice-ui';
import { View, StyleSheet } from 'react-native';
import { DemoBlock } from '../../components';

const LoadingDemo: FC = () => {
  return (
    <View>
      <DemoBlock title="加载类型">
        <View style={styles.wrapper}>
          <Loading style={styles.item} />
          <Loading type="spinner" style={styles.item} />
        </View>
      </DemoBlock>
      <DemoBlock title="自定义颜色">
        <View style={styles.wrapper}>
          <Loading color="#1989fa" style={styles.item} />
          <Loading type="spinner" color="#1989fa" style={styles.item} />
        </View>
      </DemoBlock>
      <DemoBlock title="自定义大小">
        <View style={styles.wrapper}>
          <Loading size={24} style={styles.item} />
          <Loading type="spinner" size={24} style={styles.item} />
        </View>
      </DemoBlock>
      <DemoBlock title="加载文案">
        <View style={styles.wrapper}>
          <Loading size={24} style={styles.item}>
            加载中...
          </Loading>
        </View>
      </DemoBlock>
      <DemoBlock title="垂直排列">
        <View style={styles.wrapper}>
          <Loading size={24} style={styles.item} vertical>
            加载中...
          </Loading>
        </View>
      </DemoBlock>
      <DemoBlock title="自定义文案颜色">
        <View style={styles.wrapper}>
          <Loading size={24} style={styles.item} vertical color="#0094ff">
            加载中...
          </Loading>
          <Loading size={24} style={styles.item} vertical textColor="#0094ff">
            加载中...
          </Loading>
        </View>
      </DemoBlock>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    marginLeft: 20,
    marginVertical: 5,
  },
  wrapper: {
    flexDirection: 'row',
  },
});

export default LoadingDemo;
