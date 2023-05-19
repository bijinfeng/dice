---
title: Stepper 步进器
desc: 步进器由增加按钮、减少按钮和输入框组成，用于在一定范围内输入、调整数字。
demo: /stepper

nav:
  path: /

group:
  title: 表单组件
---

## 代码演示

### 基础用法

通过 `value` 绑定输入值，可以通过 `onChange` 事件监听到输入值的变化。

```jsx
import React, { useState } from 'react';
import { Stepper } from '@pingtou/rn-vant';

export default () => {
  const [value, setValue] = useState(1);

  return <Stepper min={0} value={value} onChange={setValue} />;
};
```

### 步长设置

通过 `step` 属性设置每次点击增加或减少按钮时变化的值，默认为 `1`。

```jsx
<Stepper step={2} defaultValue={1} />
```

### 限制输入范围

通过 `min` 和 `max` 属性限制输入值的范围。

```jsx
<Stepper step={2} min={5} max={8} defaultValue={1} />
```

### 限制输入整数

设置 `integer` 属性后，输入框将限制只能输入整数。

```jsx
<Stepper step={2} defaultValue={1} integer />
```

### 禁用状态

通过设置 `disabled` 属性来禁用步进器，禁用状态下无法点击按钮或修改输入框。

```jsx
<Stepper step={2} defaultValue={1} disabled />
```

### 禁用输入框

通过设置 `disableInput` 属性来禁用输入框，此时按钮仍然可以点击。

```jsx
<Stepper step={2} defaultValue={1} disableInput />
```

### 固定小数位数

通过设置 `decimalLength` 属性可以保留固定的小数位数。

```jsx
<Stepper step={2} defaultValue={1} decimalLength={1} />
```

### 自定义大小

通过 `inputWidth` 属性设置输入框宽度，通过 `buttonSize` 属性设置按钮大小和输入框高度。

```jsx
<Stepper defaultValue={1} inputWidth={40} buttonSize={32} />
```

### 异步变更

通过 `beforeChange` 属性可以在输入值变化前进行校验和拦截。

```jsx
import React, { useState } from 'react';
import { Stepper, Toast } from '@pingtou/rn-vant';

let timer: ReturnType<typeof setTimeout>;

export default () => {
  const [value, setValue] = useState(1);

  return (
    <Stepper
      min={0}
      value={value}
      onChange={setValue}
      beforeChange={() => {
        Toast.loading({ forbidClick: true });
        clearTimeout(timer);

        return new Promise(resolve => {
          timer = setTimeout(() => {
            Toast.clear();
            resolve(true);
          }, 500);
        });
      }}
    />
  );
};
```

### 圆角风格

将 `theme` 设置为 `round` 来展示圆角风格的步进器。

```jsx
<Stepper defaultValue={1} theme="round" buttonSize={22} disableInput />
```

## API

### Props

| 参数          | 说明                                                              | 类型                            | 默认值  |
| ------------- | ----------------------------------------------------------------- | ------------------------------- | ------- |
| value         | 当前输入的值                                                      | _number_                        | -       |
| min           | 最小值                                                            | _number_                        | `1`     |
| max           | 最大值                                                            | _number_                        | -       |
| defaultValue  | 初始值，当 value 为空时生效                                       | _number_                        | `1`     |
| step          | 步长，每次点击时改变的值                                          | _number_                        | `1`     |
| inputWidth    | 输入框宽度，默认单位为 `px`                                       | _number_                        | `32px`  |
| buttonSize    | 按钮大小以及输入框高度，默认单位为 `px`                           | _number_                        | `28px`  |
| decimalLength | 固定显示的小数位数                                                | _number_                        | -       |
| theme         | 样式风格，可选值为 `round`                                        | _string_                        | -       |
| placeholder   | 输入框占位提示文字                                                | _string_                        | -       |
| integer       | 是否只允许输入整数                                                | _boolean_                       | `false` |
| disabled      | 是否禁用步进器                                                    | _boolean_                       | `false` |
| disablePlus   | 是否禁用增加按钮                                                  | _boolean_                       | `false` |
| disableMinus  | 是否禁用减少按钮                                                  | _boolean_                       | `false` |
| disableInput  | 是否禁用输入框                                                    | _boolean_                       | `false` |
| beforeChange  | 输入值变化前的回调函数，返回 `false` 可阻止输入，支持返回 Promise | _(value) => boolean \| Promise_ | `false` |
| showPlus      | 是否显示增加按钮                                                  | _boolean_                       | `true`  |
| showMinus     | 是否显示减少按钮                                                  | _boolean_                       | `true`  |
| showInput     | 是否显示输入框                                                    | _boolean_                       | `true`  |
| longPress     | 是否开启长按手势                                                  | _boolean_                       | `true`  |
| allowEmpty    | 是否允许输入的值为空                                              | _boolean_                       | `false` |

### Events

| 事件名   | 说明                     | 回调参数                                                 |
| -------- | ------------------------ | -------------------------------------------------------- |
| onClick  | 点击输入框时触发         | _event: NativeSyntheticEvent\<NativeTouchEvent\>_        |
| onChange | 当绑定值变化时触发的事件 | _value?: string_                                         |
| onPlus   | 点击增加按钮时触发       | _event: GestureResponderEvent, val: number_              |
| onMinus  | 点击减少按钮时触发       | _event: GestureResponderEvent, val: number_              |
| onFocus  | 输入框聚焦时触发         | _event: NativeSyntheticEvent\<TextInputFocusEventData\>_ |
| onBlur   | 输入框失焦时触发         | _event: NativeSyntheticEvent\<TextInputFocusEventData\>_ |
