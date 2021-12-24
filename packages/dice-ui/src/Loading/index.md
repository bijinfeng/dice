---
title: Loading 加载
desc: 加载图标，用于表示加载中的过渡状态。
demo: /loading

nav:
  path: /

group:
  title: 基础组件
---

## 加载类型

通过 `type` 属性可以设置加载图标的类型，默认为 `circular`，可选值为 `spinner`。

```jsx
<Loading />

<Loading type="spinner" />
```

## 自定义颜色

通过 `color` 属性设置加载图标的颜色。

```jsx
<Loading color="#1989fa" />

<Loading type="spinner" color="#1989fa" />
```

## 单元格大小

通过 size 属性可以控制单元格的大小。

```jsx
<Cell title="单元格" value="内容" size="large" />
<Cell title="单元格" value="内容" size="large" label="描述信息" />
```

## 自定义大小

通过 `size` 属性设置加载图标的大小。

```jsx
<Loading size={24} />

<Loading type="spinner" size={24} />
```

## 加载文案

```jsx
<Loading size={24}>
  加载中...
</Loading>
```

## 垂直排列

设置 `vertical` 属性后，图标和文案会垂直排列。

```jsx
<Loading size={24} vertical>
  加载中...
</Loading>
```

## 自定义文案颜色

通过 `color` 或者 `textColor` 属性设置加载文案的颜色。

```jsx
<Loading size={24} vertical color="#0094ff">
  加载中...
</Loading>
<Loading size={24} vertical textColor="#0094ff">
  加载中...
</Loading>
```
