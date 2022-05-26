---
title: Checkbox 复选框
desc: 在一组备选项中进行多选。
demo: /checkbox

nav:
  path: /

group:
  order: 2
  title: 表单组件
---

## 基础用法

通过 `defaultChecked` 和 `checked` 绑定复选框的勾选状态。

```jsx
<Checkbox defaultChecked>复选框</Checkbox>
```

## 禁用状态

通过设置 `disabled` 属性可以禁用复选框。

```jsx
<Checkbox disabled>复选框</Checkbox>
```

## 自定义形状

将 `shape` 属性设置为 `square`，复选框的形状会变成方形。

```jsx
<Checkbox shape="square">复选框</Checkbox>
```

## 自定义颜色

通过 `checkedColor` 属性设置选中状态的图标颜色。

```jsx
<Checkbox checkedColor="#ee0a24">复选框</Checkbox>
```

## 自定义大小

通过 `iconSize` 属性可以自定义图标的大小。

```jsx
<Checkbox iconSie={24} defaultChecked>复选框</Checkbox>
```

## 自定义图标

```jsx
const activeIcon = 'https://img.yzcdn.cn/vant/user-active.png';
const inactiveIcon = 'https://img.yzcdn.cn/vant/user-inactive.png';

<Checkbox
  icon={checked => (
    <Image style={styles.imgIcon} source={{ uri: checked ? activeIcon : inactiveIcon }} />
  )}
>
  复选框
</Checkbox>
```

## 复选框组

复选框可以与复选框组一起使用，复选框组通过 `value` 数组绑定复选框的勾选状态。

```jsx
<Checkbox.Group>
  <Checkbox value="a">复选框 a</Checkbox>
  <Checkbox value="b">复选框 b</Checkbox>
</Checkbox.Group>
```

## 水平排列

将 `direction` 属性设置为 `horizontal` 后，复选框组会变成水平排列。

```jsx
<Checkbox.Group direction="horizontal">
  <Checkbox value="a">复选框 a</Checkbox>
  <Checkbox value="b">复选框 b</Checkbox>
</Checkbox.Group>
```

## 搭配单元格组件使用

搭配单元格组件使用时，需要再引入 `Cell` 和 `Cell.Group` 组件。

```jsx
const [cellValue, setCellValue] = useState<string[]>([]);

const toggle = (check: string) => {
  const index = cellValue.indexOf(check);
  const nextCellValue = [...cellValue];
  if (index === -1) {
    nextCellValue.push(check);
  } else {
    nextCellValue.splice(index, 1);
  }
  setCellValue(nextCellValue);
};

<Cell.Group inset>
  <Cell
    title="复选框a"
    value={<Checkbox checked={cellValue.includes('a')} />}
    onPress={() => toggle('a')}
  />
  <Cell
    title="复选框b"
    value={<Checkbox checked={cellValue.includes('b')} />}
    onPress={() => toggle('b')}
  />
</Cell.Group>
```
