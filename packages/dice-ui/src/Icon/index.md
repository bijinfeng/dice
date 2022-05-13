---
title: Icon 图标
desc: 基于 svg 的图标集，可以通过 Icon 组件使用，也可以在其他组件中通过 icon 属性引用。
demo: /icon
nav:
  path: /

group:
  title: 基础组件
  order: 2
---

## 代码演示

### 基础用法

通过 `name` 属性来指定需要使用的图标，Vant 内置了一套图标库（见右侧示例），可以直接传入对应的名称来使用。

```html
<Icon name="chat-o" />
```

### 图标颜色

通过 `color` 属性来设置图标的颜色。

```html
<Icon name="cart-o" color="#1989fa" /> <Icon name="fire-o" color="#ee0a24" />
```

### 图标大小

通过 `size` 属性来设置图标的尺寸大小。

```html
<Icon name="chat-o" size="{40}" />
```

## API

### Props

| 参数  | 说明     | 类型     | 默认值 |
| ----- | -------- | -------- | ------ |
| name  | 图标名称 | _string_ |        |
| size  | 图标大小 | _number_ |        |
| color | 图标颜色 | _string_ |        |
