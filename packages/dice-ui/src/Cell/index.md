---
title: Cell 单元格
desc: 单元格为列表中的单个展示项。
demo: /basic/cell

nav:
  title: 文档
  path: /docs

group:
  title: 基础组件
---

## 基础用法

Cell 可以单独使用，也可以与 Cell.Group 搭配使用，Cell.Group 可以为 Cell 提供上下外边框。

```jsx
<Cell.Group>
  <Cell title="单元格" value="内容" />
  <Cell title="单元格" value="内容" label="描述信息" />
</Cell.Group>
```

## 卡片风格

通过 Cell.Group 的 inset 属性，可以将单元格转换为圆角卡片风格

```jsx
<Cell.Group inset>
  <Cell title="单元格" value="内容" />
  <Cell title="单元格" value="内容" label="描述信息" />
</Cell.Group>
```

## 单元格大小

通过 size 属性可以控制单元格的大小。

```jsx
<Cell title="单元格" value="内容" size="large" />
<Cell title="单元格" value="内容" size="large" label="描述信息" />
```

## 展示图标

通过 icon 属性在标题左侧展示图标。

```jsx
<Cell title="单元格" icon="location-o" />
```

## 只设置 value

只设置 value 时，内容会靠左对齐。

```jsx
<Cell value="内容" />
```

## 展示箭头

设置 isLink 属性后会在单元格右侧显示箭头，并且可以通过 arrowDirection 属性控制箭头方向。

```jsx
<Cell title="单元格" isLink />
<Cell title="单元格" isLink value="内容" />
<Cell title="单元格" isLink arrowDirection="down" value="内容" />
```

## 分组标题

通过 Cell.Group 的 title 属性可以指定分组标题。

```jsx
<Cell.Group title="分组1">
  <Cell title="单元格" value="内容" />
</Cell.Group>
<Cell.Group title="分组2">
  <Cell title="单元格" value="内容" />
</Cell.Group>
```

## 垂直居中

通过 center 属性可以让 Cell 的左右内容都垂直居中。

```jsx
<Cell center title="单元格" value="内容" label="描述信息" />
```
