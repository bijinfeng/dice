---
title: ImagePreview 图片预览
desc: 图片预览，支持函数调用和组件调用两种方式。
demo: /image-preview
nav:
  path: /

group:
  title: 展示组件
---

## 基础用法

直接传入图片数组，即可展示图片预览。

```jsx
import React from 'react';
import { Cell, ImagePreview } from 'rn-vant';

const images = [
  'https://img.yzcdn.cn/vant/apple-1.jpg',
  'https://img.yzcdn.cn/vant/apple-2.jpg',
  'https://img.yzcdn.cn/vant/apple-3.jpg',
];

export default () => {
  return (
    <Cell
      title="预览图片"
      isLink
      onPress={() => {
        ImagePreview.open({
          images,
          onChange: index => console.log(`当前展示第${index + 1}张`),
        });
      }}
    />
  );
};
```
