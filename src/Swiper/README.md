---
title: Swiper 轮播
desc: 用于循环播放一组图片或内容。
demo: /swiper

nav:
  path: /

group:
  title: 展示组件
---

## 代码演示

### 基础用法

每个 Swiper.Item 代表一张轮播卡片，可以通过 `autoplay` 属性设置自动轮播的间隔。

```jsx
import React from 'react';
import { Swiper } from 'rn-vant';

export default () => {
  return (
    <Swiper autoplay={3000}>
      <Swiper.Item>1</Swiper.Item>
      <Swiper.Item>2</Swiper.Item>
      <Swiper.Item>3</Swiper.Item>
      <Swiper.Item>4</Swiper.Item>
    </Swiper>
  );
};
```

### 监听 onChange 事件

在每一页轮播结束后，会触发 `onChange` 事件。

```jsx
import React from 'react';
import { Swiper, Toast } from 'rn-vant';

export default () => {
  return (
    <Swiper onChange={(index) => Toast.message(`当前 Swipe 索引： + ${index}`)}>
      <Swiper.Item>1</Swiper.Item>
      <Swiper.Item>2</Swiper.Item>
      <Swiper.Item>3</Swiper.Item>
      <Swiper.Item>4</Swiper.Item>
    </Swiper>
  );
};
```

### 纵向滚动

设置 `vertical` 属性后滑块会纵向排列，此时需要指定滑块容器的高度。

```jsx
import React from 'react';
import { Swiper } from 'rn-vant';

export default () => {
  return (
    <Swiper vertical>
      <Swiper.Item>1</Swiper.Item>
      <Swiper.Item>2</Swiper.Item>
      <Swiper.Item>3</Swiper.Item>
      <Swiper.Item>4</Swiper.Item>
    </Swiper>
  );
};
```

### 自定义指示器

```jsx
import React from 'react';
import { Swiper } from 'rn-vant';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
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

export default () => {
  return (
    <Swiper
      indicator={(total, current) => (
        <View style={styles.indicator}>
          <Text style={{ color: '#fff' }}>
            {current + 1}/{total}
          </Text>
        </View>
      )}
    >
      <Swiper.Item>1</Swiper.Item>
      <Swiper.Item>2</Swiper.Item>
      <Swiper.Item>3</Swiper.Item>
      <Swiper.Item>4</Swiper.Item>
    </Swiper>
  );
};
```
