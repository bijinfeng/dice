---
title: Switch 开关
desc: 用于在打开和关闭状态之间进行切换。
demo: /switch

nav:
  path: /

group:
  title: 基础组件
---

## 基础用法

通过 `defaultChecked` 默认开关的选中状态，`true` 表示开，`false` 表示关。

```jsx
<Switch defaultChecked />
```

## 禁用状态

通过 `disabled` 属性来禁用开关，禁用状态下开关不可点击。

```jsx
<Switch disabled defaultChecked />
```

## 加载状态

通过 `loading` 属性设置开关为加载状态，加载状态下开关不可点击。

```jsx
<Switch loading defaultChecked />
```

## 自定义大小

通过 `size` 属性自定义开关的大小。

```jsx
<Switch size={24} defaultChecked />
```

## 自定义颜色

`activeColor` 属性表示打开时的背景色，`inactiveColor` 表示关闭时的背景色。

```jsx
<Switch activeColor="#ee0a24" inactiveColor="#dcdee0" defaultChecked />
```

