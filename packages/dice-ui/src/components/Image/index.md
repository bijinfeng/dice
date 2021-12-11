---
title: Image 图片
desc: 增强版的 img 标签，提供多种图片填充模式，支持图片懒加载、加载中提示、加载失败提示。
demo: /basic/image
nav:
  title: 文档
  path: /docs

group:
  title: 基础组件
  order: 2
---

## 基础用法

```jsx
<Image
  source={{ uri: 'https://img.yzcdn.cn/vant/cat.jpeg' }}
  onPress={() => {
    console.log('??');
  }}
/>
```

## 填充模式

```jsx
const resizeMode: ImageResizeMode[] = ['center', 'contain', 'cover', 'repeat', 'stretch'];

<View style={styles.container}>
  {resizeMode.map(it => (
    <View style={styles.block} key={it}>
      <Image source={{ uri: 'https://img.yzcdn.cn/vant/cat.jpeg' }} resizeMode={it} />
      <Text style={[styles.text, { color: theme.gray_7 }]}>{it}</Text>
    </View>
  ))}
</View>
```

## 圆形图片

通过 `round` 属性可以设置图片变圆

```jsx
<Image source={{ uri: 'https://img.yzcdn.cn/vant/cat.jpeg' }} round />
```

## 加载中提示

Image 组件提供了默认的加载中提示，支持通过 `loading` 自定义内容。

```jsx
<Image
  source={{ uri: 'https://img.yzcdn.cn/vant/cat.jpeg' }}
  loading={<Loading size={20} type="spinner" />}
/>
```

加载失败提示

Image 组件提供了默认的加载失败提示，支持通过 `alt` 自定义内容。

```jsx
<Image source={{ uri: 'https://img.yzcdn.cn/vant/cat1.jpeg' }} alt="加载失败" />
```
