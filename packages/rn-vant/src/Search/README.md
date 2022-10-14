---
title: Search 搜索
desc: 用于搜索场景的输入框组件。
demo: /search

nav:
  path: /

group:
  title: 表单组件
---

## 代码演示

### 基础用法

`value` 用于控制搜索框中的文字，`background` 可以自定义搜索框外部背景色。

```jsx
/**
 * title: 基础用法
 */
import React, { useState } from 'react';
import { Search } from 'rn-vant';

export default () => {
  const [value, setValue] = useState('');
  return <Search value={value} onChange={setValue} placeholder="请输入搜索关键词" />;
};
```

### 事件监听

Search 组件提供了 `onSearch` 和 `onCancel` 事件，`onSearch` 事件在点击键盘上的搜索/回车按钮后触发，`onCancel` 事件在点击搜索框右侧取消按钮时触发。

```jsx
/**
 * title: 事件监听
 */
import React, { useState } from 'react';
import { Search, Toast } from 'rn-vant';

export default () => {
  const [value, setValue] = useState('');
  return (
    <Search
      value={value}
      onChange={setValue}
      placeholder="请输入搜索关键词"
      showAction
      onSearch={(val) => {
        Toast(val);
        setValue(val);
      }}
      onCancel={() => {
        Toast('取消');
        setValue('');
      }}
      onClear={() => {
        Toast('清除');
        setValue('');
      }}
      onClickInput={() => {
        Toast('点击输入区域时触发');
      }}
    />
  );
};
```

### 搜索框内容对齐

通过 `align` 属性设置搜索框内容的对齐方式，可选值为 `center`、`right`。

```jsx
/**
 * title: 搜索框内容对齐
 */
import React, { useState } from 'react';
import { Search } from 'rn-vant';

export default () => {
  const [value, setValue] = useState('');
  return (
    <Search value={value} onChange={setValue} align="center" placeholder="请输入搜索关键词" />
  );
};
```

### 禁用搜索框

通过 `disabled` 属性禁用搜索框。

```jsx
/**
 * title: 禁用搜索框
 */
import React, { useState } from 'react';
import { Search } from 'rn-vant';

export default () => {
  const [value, setValue] = useState('');
  return <Search disabled value={value} onChange={setValue} placeholder="请输入搜索关键词" />;
};
```

### 自定义背景色

通过 `background` 属性可以设置搜索框外部的背景色，通过 `shape` 属性设置搜索框的形状，可选值为 `round`。

```jsx
/**
 * title: 自定义背景色
 */
import React, { useState } from 'react';
import { Search } from 'rn-vant';

export default () => {
  const [value, setValue] = useState('');
  return (
    <Search
      shape="round"
      background="#4fc08d"
      value={value}
      onChange={setValue}
      placeholder="请输入搜索关键词"
    />
  );
};
```

### 自定义按钮

使用 `actionText` 属性可以自定义右侧按钮的内容。使用后，`onCancel` 事件将不再触发。

```jsx
/**
 * title: 自定义按钮
 */
import React, { useState } from 'react';
import { Search } from 'rn-vant';

export default () => {
  const [value, setValue] = useState('');
  return (
    <Search
      showAction
      label="地址"
      actionText="搜索"
      value={value}
      onChange={setValue}
      placeholder="请输入搜索关键词"
    />
  );
};
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| label | 搜索框左侧文本 | _ReactNode_ | - |
| shape | 搜索框形状，可选值为 `round` | _string_ | `square` |
| background | 搜索框外部背景色 | _string_ | `#f2f2f2` |
| maxLength | 输入的最大字符数 | _number \| string_ | - |
| placeholder | 占位提示文字 | _string_ | - |
| clearable | 是否启用清除图标，点击清除图标后会清空输入框 | _boolean_ | `true` |
| clearIcon | 清除图标 | _ReactNode_ | `clear` |
| clearTrigger | 显示清除图标的时机，`always` 表示输入框不为空时展示，<br>`focus` 表示输入框聚焦且不为空时展示 | _string_ | `focus` |
| autoFocus | 是否自动聚焦，iOS 系统不支持该属性 | _boolean_ | `false` |
| showAction | 是否在搜索框右侧显示取消按钮 | _boolean_ | `false` |
| actionText | 取消按钮文字 | _ReactNode_ | `取消` |
| action | 自定义右侧操作内容，会覆盖 `showAction` 和 `actionText` 行为 | _ReactNode_ | - |
| disabled | 是否禁用输入框 | _boolean_ | `false` |
| readOnly | 是否将输入框设为只读状态，只读状态下无法输入内容 | _boolean_ | `false` |
| error | 是否将输入内容标红 | _boolean_ | `false` |
| errorMessage | 底部错误提示文案，为空时不展示 | _string_ | - |
| formatter | 输入内容格式化函数 | _(val: string) => string_ | - |
| formatTrigger | 格式化函数触发的时机，可选值为 `onBlur` | _string_ | `onChange` |
| align | 输入框内容对齐方式，可选值为 `center` `right` | _string_ | `left` |
| leftIcon | 输入框左侧 | _ReactNode_ | `search` |
| rightIcon | 输入框右侧 | _ReactNode_ | - |

### Events

| 事件名       | 说明                 | 回调参数                       |
| ------------ | -------------------- | ------------------------------ |
| onSearch     | 确定搜索时触发       | _value: string (当前输入的值)_ |
| onChange     | 输入框内容变化时触发 | _value: string (当前输入的值)_ |
| onFocus      | 输入框获得焦点时触发 | _event: Event_                 |
| onBlur       | 输入框失去焦点时触发 | _event: Event_                 |
| onClickInput | 点击输入区域时触发   | _event: MouseEvent_            |
| onClear      | 点击清除按钮后触发   | _event: MouseEvent_            |
| onCancel     | 点击取消按钮时触发   | -                              |

### 方法

通过 ref 可以获取到 Search 实例并调用实例方法。

| 方法名 | 说明           | 参数 | 返回值 |
| ------ | -------------- | ---- | ------ |
| focus  | 获取输入框焦点 | -    | -      |
| blur   | 取消输入框焦点 | -    | -      |

### 类型定义

通过 `SearchInstance` 获取 Search 实例的类型定义。

```js
import { useRef } from 'react';
import type { SearchInstance } from 'rn-vant';

const searchRef = useRef<SearchInstance>();

searchRef.current?.focus();
```
