---
title: Popup 弹出层
desc: 弹出层容器，用于展示弹窗、信息提示等内容，支持多个弹出层叠加展示。
demo: /popup

nav:
  path: /

group:
  title: 基础组件
---

## 基础用法

通过 `visible` 控制弹出层是否展示。

```jsx
import React, { useState } from 'react';
import { Popup } from 'rn-vant';

export default () => {
  const [visible, setVisible] = useState(false);

  return (
    <Popup visible={visible}>
      <Text>demo</Text>
    </Popup>
  );
}
```

## 弹出位置

通过 `position` 属性设置弹出位置，默认居中弹出，可以设置为 `top`、`bottom`、`left`、`right`。

```jsx
<Popup visible={visible} position="top">
  <Text>demo</Text>
</Popup>
```

## 关闭图标

设置 `closeable` 属性后，会在弹出层的右上角显示关闭图标，并且可以通过 `closeIcon` 属性自定义图标，使用 `closeIconPosition` 属性可以自定义图标位置。

```jsx
<Popup
  visible={visible}
  position="top"
  closeable
  closeIcon="close"
  closeIconPosition="top-left"
>
  <Text>demo</Text>
</Popup>
```

## 圆角弹窗

设置 `round` 属性后，弹窗会根据弹出位置添加不同的圆角样式。

```jsx
<Popup visible={visible} round>
  <Text>demo</Text>
</Popup>
```
