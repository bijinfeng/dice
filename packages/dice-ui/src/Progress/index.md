---
title: Progress 进度条
desc: 用于展示操作的当前进度。
demo: /progress

nav:
  path: /

group:
  title: 基础组件
---

## 基础用法

进度条默认为蓝色，使用 `percentage` 属性来设置当前进度。

```jsx
<Progress percentage={50} />
```

## 线条粗细

通过 `strokeWidth` 可以设置进度条的粗细。

```jsx
<Progress percentage={50} strokeWidth={8} />
```

## 置灰

设置 `inactive` 属性后进度条将置灰。

```jsx
<Progress inactive percentage={50} />
```

## 样式定制

可以使用 `pivotText` 属性自定义文字，`color` 属性自定义进度条颜色。

```jsx
<Progress color="#f2826a" percentage="25" pivotText="橙色" />
<Progress color="#ee0a24" percentage="50" pivotText="红色" />
<Progress
  color="#be99ff"
  percentage="75"
  pivotColor="#7232dd"
  pivotText="紫色"
/>
```
