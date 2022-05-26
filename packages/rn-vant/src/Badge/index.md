---
title: Badge 徽标
desc: 在右上角展示徽标数字或小红点。
demo: /badge

nav:
  path: /

group:
  order: 4
  title: 展示组件
---

## 基础用法

设置 `content` 属性后，Badge 会在子元素的右上角显示对应的徽标，也可以通过 `dot` 来显示小红点。

```jsx
<Badge content="5">
  <View style={styles.child} />
</Badge>
<Badge content="10">
  <View style={styles.child} />
</Badge>
<Badge content="Hot">
  <View style={styles.child} />
</Badge>
<Badge dot>
  <View style={styles.child} />
</Badge>

const styles = StyleSheet.create({
  child: {
    backgroundColor: '#f2f3f5',
    borderRadius: 4,
    height: 40,
    width: 40,
  },
});
```

## 最大值

设置 `max` 属性后，当 `content` 的数值超过最大值时，会自动显示为 `{max}+`。

```jsx
<Badge content="20" max={9}>
  <View style={styles.child} />
</Badge>
<Badge content="50" max={20}>
  <View style={styles.child} />
</Badge>
<Badge content="200" max={99}>
  <View style={styles.child} />
</Badge>
```

## 自定义颜色

通过 `color` 属性来设置徽标的颜色。

```jsx
<Badge content="5" color="#1989fa">
  <View style={styles.child} />
</Badge>
<Badge content="10" color="#1989fa">
  <View style={styles.child} />
</Badge>
<Badge dot color="#1989fa">
  <View style={styles.child} />
</Badge>
```

## 自定义徽标内容

```jsx
<Badge content={<Icon name="success" size={12} color="#fff" style={styles.icon} />}>
  <View style={styles.child} />
</Badge>

const styles = StyleSheet.create({
  icon: {
    marginVertical: 2,
  },
});
```

## 独立展示

当 Badge 没有子元素时，会作为一个独立的元素进行展示。

```jsx
<Badge content="20" />

<Badge content="200" max={99} />
```
