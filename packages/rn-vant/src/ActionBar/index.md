---
title: ActionBar 动作栏
desc: 用于为页面相关操作提供便捷交互。
demo: /action-bar

nav:
  path: /

group:
  title: 基础组件
---

## 代码演示

### 基础用法

```jsx
<ActionBar>
  <ActionBar.Icon
    icon={<Icon name="chat-o" />}
    text="客服"
    onPress={() => console.log('chat click')}
  />
  <ActionBar.Icon
    icon={<Icon name="chat" />}
    text="购物车"
    onPress={() => console.log('cart click')}
  />
  <ActionBar.Icon
    icon={<Icon name="shop-o" />}
    text="店铺"
    onPress={() => console.log('shop click')}
  />
  <ActionBar.Button
    type="danger"
    text="立即购买"
    onPress={() => console.log('button click')}
  />
</ActionBar>
```

### 徽标提示

在 `ActionBarIcon` 设置 `badge` 属性后，会在图标右上角展示相应的徽标。

```jsx
<ActionBar>
  <ActionBar.Icon icon={<Icon name="chat-o" />} badge={{ dot: true }} text="客服" />
  <ActionBar.Icon icon={<Icon name="cart-o" />} badge={{ content: 5 }} text="购物车" />
  <ActionBar.Icon icon={<Icon name="shop-o" />} badge={{ content: 12 }} text="店铺" />
  <ActionBar.Button type="warning" text="加入购物车" />
  <ActionBar.Button type="danger" text="立即购买" />
</ActionBar>
```

### 自定义按钮颜色

通过 `ActionBarButton` 的 `color` 属性可以自定义按钮的颜色。

```jsx
<ActionBar>
  <ActionBar.Icon icon={<Icon name="chat-o" />} text="客服" />
  <ActionBar.Icon icon={<Icon name="cart-o" />} text="购物车" />
  <ActionBar.Button color="#be99ff" type="warning" text="加入购物车" />
  <ActionBar.Button color="#7232dd" type="danger" text="立即购买" />
</ActionBar>
```

## API

### ActionBarProps

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| safeAreaInsetBottom | 是否开启底部安全区适配 | _boolean_ | `true` |

### ActionBarIcon Props

| 参数    | 说明               | 类型              | 默认值 |
| ------- | ------------------ | ----------------- | ------ |
| text    | 按钮文字           | _ReactNode_       | -      |
| icon    | 图标               | _ReactNode_       | -      |
| badge   | 图标右上角徽标设置 | _BadgeProps_      | -      |
| onPress | 点击事件           | _() => void_ | -      |

### ActionBarButton Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| text | 按钮文字 | _ReactNode_ | - |
| type | 按钮类型，可选值为 `primary` `info` `warning` `danger` | _string_ | `default` |
| color | 按钮颜色，支持传入 `linear-gradient` 渐变色 | _string_ | - |
| icon | 左侧图标 | _ReactNode_ | - |
| disabled | 是否禁用按钮 | _boolean_ | `false` |
| loading | 是否显示为加载状态 | _boolean_ | `false` |
| onPress | 点击事件 | _() => void_ | - |
