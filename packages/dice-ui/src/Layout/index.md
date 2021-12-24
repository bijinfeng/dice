---
title: Layout 布局
desc: Layout 提供了 Layout.Row 和 Layout.Col 两个组件来进行行列布局。
demo: /layout
nav:
  path: /

group:
  title: 基础组件
  order: 1
---

## 基础用法

Layout 组件提供了 `24列栅格`，通过在 `Col` 上添加 `span` 属性设置列所占的宽度百分比。此外，添加 `offset` 属性可以设置列的偏移宽度，计算方式与 span 相同。

```jsx
<Layout.Row>
  <Layout.Col span={8}>span: 8</Layout.Col>
  <Layout.Col span={8}>span: 8</Layout.Col>
  <Layout.Col span={8}>span: 8</Layout.Col>
</Layout.Row>

<Layout.Row>
  <Layout.Col span={4}>span: 4</Layout.Col>
  <Layout.Col span={10} offset={4}>offset: 4, span: 10</Layout.Col>
</Layout.Row>

<Layout.Row>
  <Layout.Col offset={12} span={12}>offset: 12, span: 12</Layout.Col>
</Layout.Row>
```

## 设置列元素间距

通过 `gutter` 属性可以设置列元素之间的间距，默认间距为 0。

```jsx
<Layout.Row gutter={20}>
  <Layout.Col span={8}>span: 8</Layout.Col>
  <Layout.Col span={8}>span: 8</Layout.Col>
  <Layout.Col span={8}>span: 8</Layout.Col>
</Layout.Row>
```

## 对齐方式

通过 `justify` 属性可以设置主轴上内容的对齐方式，等价于 flex 布局中的 `justify-content` 属性。

```jsx
<!-- 居中 -->
<Layout.Row justify="center">
  <Layout.Col span={6}>span: 6</Layout.Col>
  <Layout.Col span={6}>span: 6</Layout.Col>
  <Layout.Col span={6}>span: 6</Layout.Col>
</Layout.Row>

<!-- 右对齐 -->
<Layout.Row justify="end">
  <Layout.Col span={6}>span: 6</Layout.Col>
  <Layout.Col span={6}>span: 6</Layout.Col>
  <Layout.Col span={6}>span: 6</Layout.Col>
</Layout.Row>

<!-- 两端对齐 -->
<Layout.Row justify="space-between">
  <Layout.Col span={6}>span: 6</Layout.Col>
  <Layout.Col span={6}>span: 6</Layout.Col>
  <Layout.Col span={6}>span: 6</Layout.Col>
</Layout.Row>

<!-- 每个元素的两侧间隔相等 -->
<Layout.Row justify="space-around">
  <Layout.Col span={6}>span: 6</Layout.Col>
  <Layout.Col span={6}>span: 6</Layout.Col>
  <Layout.Col span={6}>span: 6</Layout.Col>
</Layout.Row>
```

## API

<API></API>
