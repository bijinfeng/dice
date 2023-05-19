---
title: ImagePicker 图片选择器
desc: 用于将本地的图片上传至服务器，并在上传过程中展示预览图和上传进度。
demo: /image-picker
nav:
  path: /

group:
  title: 表单组件
---

## 基础用法

```tsx
import React from 'react';
import { ImagePicker } from '@pingtou/rn-vant';

const defaultValue = [
  {
    url: 'https://img.yzcdn.cn/vant/sand.jpg',
    fileName: '图片名称',
  },
  {
    url: 'https://img.yzcdn.cn/vant/tree.jpg',
    fileName: '图片名称',
  },
];

export default () => {
  return <ImagePicker defaultValue={defaultValue} />;
};
```
