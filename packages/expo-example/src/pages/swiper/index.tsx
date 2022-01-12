import React, { memo } from 'react';
import { ScrollView, StyleSheet, View, Pressable, Text } from 'react-native';
import { Swiper, Toast } from 'dice-ui';
import { DemoBlock } from '../../components';

const images = [
  'https://img.yzcdn.cn/vant/apple-1.jpg',
  'https://img.yzcdn.cn/vant/apple-2.jpg',
  'https://img.yzcdn.cn/vant/apple-3.jpg',
  'https://img.yzcdn.cn/vant/apple-4.jpg',
  'https://img.yzcdn.cn/vant/apple-5.jpg',
  'https://img.yzcdn.cn/vant/apple-6.jpg',
  'https://img.yzcdn.cn/vant/apple-7.jpg',
  'https://img.yzcdn.cn/vant/apple-8.jpg',
];
const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac'];

const items = colors.map((color, index) => (
  <Swiper.Item key={color}>
    <Pressable
      onPress={() => {
        Toast.message(`你点击了卡片 ${index + 1}`);
      }}
      style={{
        backgroundColor: index % 2 === 0 ? '#3f45ff' : '#686dff',
        alignItems: 'center',
        height: 150,
        justifyContent: 'center',
      }}
    >
      <Text style={{ color: '#fff' }}>{index + 1}</Text>
    </Pressable>
  </Swiper.Item>
));

const SwiperExample = memo(() => {
  return (
    <ScrollView>
      <DemoBlock title="基础用法" contentStyle={styles.contentStyle}>
        <Swiper autoplay={5000}>{items}</Swiper>
      </DemoBlock>
      <DemoBlock title="监听onChange事件" contentStyle={styles.contentStyle}>
        <Swiper onChange={i => Toast.message(`当前索引${i}`)}>{items}</Swiper>
      </DemoBlock>
      <DemoBlock title="纵向滚动" contentStyle={styles.contentStyle}>
        <Swiper autoplay={5000} vertical>
          {items}
        </Swiper>
      </DemoBlock>
      <DemoBlock title="自定义指示器" contentStyle={styles.contentStyle}>
        <Swiper
          indicator={(total, current) => (
            <View style={styles.indicator}>
              <Text style={{ color: '#fff' }}>
                {current + 1}/{total}
              </Text>
            </View>
          )}
        >
          {items}
        </Swiper>
      </DemoBlock>
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  contentStyle: {
    height: 150,
  },
  indicator: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderRadius: 2,
    bottom: 10,
    fontSize: 12,
    paddingHorizontal: 5,
    paddingVertical: 2,
    position: 'absolute',
    right: 15,
  },
});

export default SwiperExample;
