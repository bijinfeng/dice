---
title: Button 按钮

group:
  order: 1
  title: 基础组件
---

# Button 按钮

按钮用于触发一个操作，如提交表单。

## 示例

<code src="./demo/basic.tsx"></code>

## 朴素按钮

通过 `plain` 属性将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色。

```jsx
<Button plain type="primary">朴素按钮</Button>
<Button plain type="success">朴素按钮</Button>
```

## 禁用状态

通过 `disabled` 属性来禁用按钮，禁用状态下按钮不可点击。

```jsx
<Button disabled type="primary">禁用状态</Button>
<Button disabled type="success">禁用状态</Button>
```

## 加载状态

通过 `loading` 属性设置按钮为加载状态，加载状态下默认会隐藏按钮文字，可以通过 `loadingText` 设置加载状态下的文字。

```jsx
<Button loading type="primary" />
<Button loading type="primary" loadingType="spinner" />
<Button loading type="success" loadingText="加载中..." />
```

## 按钮形状

通过 `square` 设置方形按钮，通过 `round` 设置圆形按钮。

```jsx
<Button square type="primary">方形按钮</Button>
<Button round type="success">圆形按钮</Button>
```

## 图标按钮

通过 `icon` 属性设置按钮图标，支持 `Icon` 组件里的所有图标，也可以传入自定义 Icon 组件

```jsx
<Button icon="plus" type="primary" />
<Button icon="plus" type="primary">按钮</Button>
```

## 按钮尺寸

支持 `large`、`normal`、`small`、`mini` 四种尺寸，默认为 `normal`。

```jsx
<Button type="primary" size="large">大号按钮</Button>
<Button type="primary" size="normal">普通按钮</Button>
<Button type="primary" size="small">小型按钮</Button>
<Button type="primary" size="mini">迷你按钮</Button>
```

## 自定义颜色

通过 `color` 属性可以自定义按钮的颜色。

```jsx
<Button color="#7232dd">单色按钮</Button>
<Button color="#7232dd" plain>单色按钮</Button>
```

## API

<API id="Button"></API>
