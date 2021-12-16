---
title: NavBar 导航栏
desc: 为页面提供导航功能，常用于页面顶部。
demo: /basic/navbar
nav:
  title: 文档
  path: /docs

group:
  title: 基础组件
  order: 1
---

### 基础用法

```jsx
<NavBar
  title="标题"
  leftArrow
  leftText="返回"
  rightText="按钮"
  onPressLeft={() => Toast.message('返回')}
  onPressRight={() => Toast.message('按钮')}
/>
```

### 自定义内容

自定义导航栏两侧的内容。

```jsx
<NavBar
  title="标题"
  leftArrow
  leftText="返回"
  onPressLeft={() => Toast.message('返回')}
  rightText={<Icon name="search" size={20} />}
  onPressRight={() => Toast.message('按钮')}
/>
```