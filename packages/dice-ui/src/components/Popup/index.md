---
title: Popup 弹出层
desc: 弹出层容器，用于展示弹窗、信息提示等内容，支持多个弹出层叠加展示。
demo: /basic/popup

nav:
  title: 文档
  path: /docs

group:
  title: 基础组件
---

## 基础用法

执行 `Popup.open` 即可展示弹出层。

```jsx
import { Popup } from 'dice-ui';

Popup.open(
  <View>
    <Text>demo</Text>
  </View>,
);
```

## 弹出位置

通过 `side` 属性设置弹出位置, 默认为 `bottom`, 可以设置为 `top`、`bottom`、`left`、`right`。

```jsx
Popup.open(
  <View>
    <Text>demo</Text>
  </View>,
  {
    side: 'top',
  }
);
```

## 关闭图标

设置 `closeable` 属性后，会在弹出层的右上角显示关闭图标，并且可以通过 `closeIcon` 属性自定义图标，使用 `closeIconPosition` 属性可以自定义图标位置。

```jsx
Popup.open(
  <View>
    <Text>demo</Text>
  </View>,
  {
    closeable: true,
    closeIcon: 'close',
    closeIconPosition: 'top-left'
  }
);
```

## 圆角弹窗

设置 `round` 属性后，弹窗会根据弹出位置添加不同的圆角样式。

```jsx
Popup.open(
  <View>
    <Text>demo</Text>
  </View>,
  {
    round: true,
  }
);
```
