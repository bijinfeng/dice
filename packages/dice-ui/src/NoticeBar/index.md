---
title: NoticeBar 通知栏
desc: 用于循环播放展示一组消息通知。
demo: /notice-bar
nav:
  path: /

group:
  title: 基础组件
  order: 1
---

### 基础用法

通过 `text` 属性设置通知栏的内容，通过 `leftIcon` 属性设置通知栏左侧的图标。

```jsx
<NoticeBar leftIcon="volume-o" text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。" />
```

### 滚动播放

通知栏的内容长度溢出时会自动打点，通过 `scrollable` 属性可以控制内容长度溢出时自动滚动。

```jsx
<NoticeBar scrollable text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。" />
```

### 多行展示

文字较长时，可以通过设置 `wrapable` 属性来开启多行展示。

```jsx
<NoticeBar wrapable text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。" />
```

### 通知栏模式

通知栏支持 `closeable` 和 `link` 两种模式。

```jsx
<!-- closeable 模式，在右侧显示关闭按钮 -->
<NoticeBar mode="closeable">技术是开发它的人的共同灵魂。</NoticeBar>

<!-- link 模式，在右侧显示链接箭头 -->
<NoticeBar mode="link">技术是开发它的人的共同灵魂。</NoticeBar>
```

### 自定义样式

通过 `color` 属性设置文本颜色，通过 `background` 属性设置背景色。

```jsx
<NoticeBar
  leftIcon="info-o"
  background="rgb(236, 249, 255)"
  color="rgb(25, 137, 250)"
  text="技术是开发它的人的共同灵魂。"
/>
```
