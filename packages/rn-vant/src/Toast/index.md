---
title: Toast 轻提示
desc: 在页面中间弹出黑色半透明提示，用于消息通知、加载提示、操作结果提示等场景。
demo: /toast

nav:
  path: /

group:
  title: 基础组件
---

## 引入

```jsx
import { Toast } from '@pingtou/rn-vant';
```

## 文字提示

```jsx
Toast.message('提示内容')
```

## 加载提示

使用 `Toast.loading` 方法展示加载提示。

```jsx
Toast.loading('加载中...')
```

## 成功/失败提示

使用 `Toast.success` 方法展示成功提示，使用 `Toast.fail` 方法展示失败提示。

```jsx
Toast.success('成功文案');
Toast.fail('失败文案');
```

## 自定义图标

通过 `icon` 选项可以自定义图标，支持传入图标名称，通过loadingType 属性可以自定义加载图标类型。

```jsx
Toast.show({
  text: '自定义图标',
  icon: 'like-o',
})

Toast.loading({
  text: '加载中...',
  loadingType: 'spinner',
})
```

## 自定义位置

Toast 默认渲染在屏幕正中位置，通过 `position` 属性可以控制 Toast 展示的位置。

```jsx
Toast.message({
  text: '提示内容',
  position: 'top',
})

Toast.message({
  text: '提示内容',
  position: 'bottom',
})
```
