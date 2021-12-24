---
title: Divider 分割线
desc: 用于将内容分隔为多个区域。
demo: /divider

nav:
  path: /

group:
  title: 基础组件
---

### 基础用法

默认渲染一条水平分割线。

```jsx
<Divider />
```

### 展示文字

通过插槽在可以分割线中间插入内容。

```jsx
<Divider>文字</Divider>
```

### 内容位置

通过 `contentPosition` 指定内容所在位置。

```jsx
<Divider content-position="left">文字</Divider>
<Divider content-position="right">文字</Divider>
```

### 虚线

添加 `dashed` 属性使分割线渲染为虚线。

```jsx
<Divider dashed>文字</Divider>
```

### 自定义样式

可以直接通过 `style` 属性设置分割线的样式。

```jsx
<Divider
  style={{ paddingHorizontal: 16 }}
  textStyle={{ color: '#1989fa' }}
  lineStyle={{ borderColor: '#1989fa' }}
>
  文字
</Divider>
```
