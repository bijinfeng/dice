---
title: Radio 单选框
desc: 在一组备选项中进行单选。
demo: /basic/radio

nav:
  path: /

group:
  title: 基础组件
---

## 基础用法

通过 `value` 或者 `defaultValue` 绑定值当前选中项的 `value`。

```jsx
<Radio.Group defaultValue={1}>
  <Radio value={1}>单选框 1</Radio>
  <Radio value={2}>单选框 2</Radio>
</Radio.Group>
```

## 禁用状态

通过 `disabled` 属性禁止选项切换，在 `Radio` 上设置 `disabled` 可以禁用单个选项。

```jsx
<Radio.Group defaultValue={1} disabled>
  <Radio value={1}>单选框 1</Radio>
  <Radio value={2}>单选框 2</Radio>
</Radio.Group>
```

## 自定义形状

将 `shape` 属性设置为 `square`，单选框的形状会变成方形

```jsx
<Radio.Group defaultValue={1}>
  <Radio value={1} shape="square">单选框 1</Radio>
  <Radio value={2} shape="square">单选框 2</Radio>
</Radio.Group>
```

## 自定义颜色

通过 `checkedColor` 属性设置选中状态的图标颜色。

```jsx
<Radio.Group defaultValue={1}>
  <Radio value={1} checkedColor="#ee0a24">
    单选框 1
  </Radio>
  <Radio value={2} checkedColor="#ee0a24">
    单选框 2
  </Radio>
</Radio.Group>
```

## 自定义大小

通过 `iconSize` 属性可以自定义图标的大小。

```jsx
<Radio.Group defaultValue={1}>
  <Radio value={1} iconSie={24}>
    单选框 1
  </Radio>
  <Radio value={2} iconSie={24}>
    单选框 2
  </Radio>
</Radio.Group>
```

## 自定义图标

```jsx
const activeIcon = 'https://img.yzcdn.cn/vant/user-active.png';
const inactiveIcon = 'https://img.yzcdn.cn/vant/user-inactive.png';

<Radio.Group defaultValue={1}>
  <Radio
    value={1}
    icon={({ checked }) => (
      <Image style={styles.imgIcon} source={{ uri: checked ? activeIcon : inactiveIcon }} />
    )}
  >
    单选框 1
  </Radio>
  <Radio
    value={2}
    icon={({ checked }) => (
      <Image style={styles.imgIcon} source={{ uri: checked ? activeIcon : inactiveIcon }} />
    )}
  >
    单选框 2
  </Radio>
</Radio.Group>
```

## 水平排列

将 `direction` 属性设置为 `horizontal` 后，复选框组会变成水平排列。

```jsx
<Radio.Group defaultValue={1} direction="horizontal">
  <Radio value={1}>单选框 1</Radio>
  <Radio value={2}>单选框 2</Radio>
</Radio.Group>
```

## 搭配单元格组件使用

搭配单元格组件使用时，需要再引入 `Cell` 和 `Cell.Group` 组件。

```jsx
const [cellValue, setCellValue] = useState<string>('a');

<Radio.Group value={cellValue}>
  <Cell.Group>
    <Cell title="单选框 a" value={<Radio value="a" />} onPress={() => setCellValue('a')} />
    <Cell title="单选框 b" value={<Radio value="b" />} onPress={() => setCellValue('b')} />
  </Cell.Group>
</Radio.Group>
```
