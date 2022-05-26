---
title: Tag 标签
desc: 用于标记关键词和概括主要内容。
demo: /tag

nav:
  path: /

group:
  title: 展示组件
---

### 基础用法

通过 `type` 属性控制标签颜色。

```jsx
<Tag type="primary">标签</Tag>
<Tag type="success">标签</Tag>
<Tag type="danger">标签</Tag>
<Tag type="warning">标签</Tag>
```

### 空心样式

设置 `plain` 属性设置为空心样式。

```jsx
<Tag plain type="primary">
  标签
</Tag>
```

### 圆角样式

通过 `round` 设置为圆角样式。

```jsx
<Tag round type="primary">
  标签
</Tag>
```

### 标记样式

通过 `mark` 设置为标记样式(半圆角)。

```jsx
<Tag mark type="primary">
  标签
</Tag>
```

### 可关闭标签

添加 `closeable` 属性表示标签是可关闭的，关闭标签时会触发 `close` 事件，在 `close` 事件中可以执行隐藏标签的逻辑。

```jsx
<Tag show={show} closeable size="medium" type="primary" onClose={() => setShow(false)}>
  标签
</Tag>
```

### 标签大小

通过 `size` 属性调整标签大小。

```jsx
<Tag type="primary" size="mini">标签</Tag>
<Tag type="primary">标签</Tag>
<Tag type="primary" size="medium">标签</Tag>
<Tag type="primary" size="large">标签</Tag>
```

### 自定义颜色

通过 `color` 和 `textColor` 属性设置标签颜色。

```jsx
<Tag color="#7232dd">标签</Tag>
<Tag color="#ffe1e1" textColor="#ad0000">标签</Tag>
<Tag color="#7232dd" plain>标签</Tag>
```
