---
title: Empty 空状态
desc: 空状态时的占位提示。
demo: /empty

nav:
  path: /

group:
  title: 展示组件
---

## 代码演示

### 基础用法

```html
<Empty description="描述文字" />
```

### 图片类型

Empty 组件内置了多种占位图片类型，可以在不同业务场景下使用。

```html
<!-- 通用错误 -->
<Empty image="error" description="描述文字" />
<!-- 网络错误 -->
<Empty image="network" description="描述文字" />
<!-- 搜索提示 -->
<Empty image="search" description="描述文字" />
```

### 自定义大小

通过 `imageSize` 属性图片的大小。

```html
<Empty imageSize="100" description="描述文字" />
```

### 自定义图片

需要自定义图片时，可以在 image 属性中传入任意图片 URL。

```html
<Empty
  image="https://cdn.jsdelivr.net/npm/@vant/assets/custom-empty-image.png"
  imageSize="{80}"
  description="描述文字"
/>
```

### 底部内容

通过 `children` 可以在 Empty 组件的下方插入内容。

```html
<Empty description="描述文字">
  <Button round type="primary" style={{ width: 160, height: 40 }}>
    按钮
  </Button>
</Empty>
```

## API

### Props

| 参数        | 说明                                                            | 类型                | 默认值    |
| ----------- | --------------------------------------------------------------- | ------------------- | --------- |
| image       | 图片类型，可选值为 `error` `network` `search`，支持传入图片 URL | _string\|ReactNode_ | `default` |
| imageSize   | 图片大小                                                        | _number_            | -         |
| description | 图片下方的描述文字                                              | _ReactNode_         | -         |
