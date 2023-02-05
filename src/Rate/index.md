---
title: Rate 评分
desc: 用于对事物进行评级操作。
demo: /rate

nav:
  path: /

group:
  title: 表单组件
---

## 基础用法

通过 `value` 来绑定当前评分值。

```jsx
<Rate value={3} />
```

```jsx
export default () => {
  const [value, setValue] = useState(3);
  return <Rate value={value} onChange={(current) => setValue(current)} />;
};
```

## 自定义图标

通过 `icon` 属性设置选中时的图标，`voidIcon` 属性设置未选中时的图标。

```jsx
<Rate defaultValue={3} icon="like" voidIcon="like-o" />
```

## 自定义样式

通过 `size` 属性设置图标大小，`color` 属性设置选中时的颜色，`voidColor` 设置未选中时的颜色。

```jsx
<Rate defaultValue={3} size={25} color="#ffd21e" voidIcon="star" voidColor="#eee" />
```

## 半星

设置 `allowHalf` 属性后可以选中半星。

```jsx
<Rate defaultValue={3.5} allowHalf />
```

## 自定义数量

通过 `count` 属性设置评分总数。

```jsx
<Rate defaultValue={1} count="8" />
```

## 禁用状态

通过 `disabled` 属性来禁用评分。

```jsx
<Rate defaultValue={3} disabled />
```

## 只读状态显示小数

设置 `readonly` 和 `allowHalf` 属性后，Rate 组件可以展示任意小数结果。

```jsx
<Rate defaultValue={3.3} readonly allowHalf />
```
