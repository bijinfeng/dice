---
title: Selector 选择组
desc: 在一组选项中选择一个或多个。
demo: /selector

nav:
  path: /

group:
  title: 表单组件
---

## 代码演示

### 基础用法

提供多个选项供用户选择，一般在筛选和表单中使用。

```jsx
import React, { memo } from 'react';
import { ScrollView } from 'react-native';
import { Selector } from 'rn-vant';
import { DemoBlock } from '../../components';

const options = [
  {
    label: '选项一',
    value: '1',
  },
  {
    label: '选项二',
    value: '2',
  },
  {
    label: '选项三',
    value: '3',
  },
];

const SelectorExample = memo(() => {
  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <DemoBlock title="单选" inset>
        <Selector
          options={options}
          defaultValue={['1']}
          onChange={(arr, extend) => console.log(arr, extend.items)}
        />
      </DemoBlock>
      <DemoBlock title="多选" inset>
        <Selector
          options={options}
          defaultValue={['2', '3']}
          multiple
          onChange={(arr, extend) => console.log(arr, extend.items)}
        />
      </DemoBlock>
      <DemoBlock title="禁用状态" inset>
        <Selector
          disabled
          defaultValue={['1']}
          options={[
            {
              label: '选项一',
              value: '1',
            },
            {
              label: '选项二',
              value: '2',
              disabled: true,
            },
            {
              label: '选项三',
              value: '3',
            },
          ]}
        />
      </DemoBlock>
      <DemoBlock title="描述选项" inset>
        <Selector
          options={[
            {
              label: '选项一',
              value: '1',
              description: '描述信息',
            },
            {
              label: '选项二',
              value: '2',
              description: '描述信息',
            },
          ]}
        />
      </DemoBlock>
    </ScrollView>
  );
});

export default SelectorExample;
```

## API

### Props

| 属性          | 说明             | 类型                                                                    | 默认值  |
| ------------- | ---------------- | ----------------------------------------------------------------------- | ------- |
| value         | 选中项           | `SelectorValue[]`                                                       | -       |
| defaultValue  | 默认项           | `SelectorValue[]`                                                       | `[]`    |
| onChange      | 选项改变时触发   | `(value: SelectorValue[], extend: { items: SelectorOption[] }) => void` | -       |
| disabled      | 是否全局禁止选中 | `boolean`                                                               | `false` |
| multiple      | 是否允许多选     | `boolean`                                                               | `false` |
| options       | 可选项           | `SelectorOption[]`                                                      | -       |
| showCheckMark | 是否显示对勾角标 | `boolean`                                                               | `true`  |

## 类型定义

### SelectorValue

```jsx
type SelectorValue = string | number;
```

### SelectorOption

| 属性        | 说明     | 类型            | 默认值  |
| ----------- | -------- | --------------- | ------- |
| description | 描述     | `ReactNode`     | -       |
| disabled    | 是否禁用 | `boolean`       | `false` |
| label       | 文字     | `ReactNode`     | -       |
| value       | 选项的值 | `SelectorValue` | -       |

### SelectorValue

```jsx
type SelectorValue = string | number;
```

## 泛型

`Selector` 支持泛型，你可以通过下面的这种方式手动控制 `value` `onChange` 等属性的类型：

```jsx
<Selector<'a' | 'b' | number>
  options={options}
  defaultValue={['a']}
  onChange={arr => console.log(arr)}
/>
```

### SelectorOption

| 属性        | 说明     | 类型            | 默认值  |
| ----------- | -------- | --------------- | ------- |
| description | 描述     | `ReactNode`     | -       |
| disabled    | 是否禁用 | `boolean`       | `false` |
| label       | 文字     | `ReactNode`     | -       |
| value       | 选项的值 | `SelectorValue` | -       |
