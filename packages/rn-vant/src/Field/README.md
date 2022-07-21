---
title: Field 输入框
desc: 用户可以在文本框内输入或编辑文字。
demo: /field

nav:
  path: /

group:
  title: 表单组件
---

## 代码演示

### 基础用法

可以通过 `value` 和 `input` 双向绑定输入框的值，通过 `placeholder` 设置占位提示文字。

```jsx
// Field 是基于 Cell 实现的，可以使用 Cell.Group 作为容器来提供外边框。
<Cell.Group inset>
  <Field
    label="文本"
    tooltip="提示tooltip"
    intro={<Text>We must make sure that your are a human.</Text>}
    placeholder="请输入文本"
  />
</Cell.Group>
```

### 自定义类型

根据 `type` 属性定义不同类型的输入框，默认值为 `text`。

```jsx
<Cell.Group inset>
  <Field label="文本" placeholder="请输入文本" />
  <Field label="手机号" type="tel" placeholder="请输入手机号" />
  <Field label="整数" type="digit" placeholder="请输入整数" />
  <Field label="数字" type="number" placeholder="请输入数字（支持小数）" />
  <Field label="密码" type="password" placeholder="请输入密码" />
</Cell.Group>
```

### 禁用输入框

通过 `readonly` 将输入框设置为只读状态，通过 `disabled` 将输入框设置为禁用状态。

```jsx
<Cell.Group inset>
  <Field label="文本" value="输入框只读" readOnly />
  <Field label="文本" value="输入框已禁用" disabled />
</Cell.Group>
```

### 显示图标

通过 `leftIcon` 和 `rightIcon` 配置输入框两侧的图标，通过设置 `clearable` 在输入过程中展示清除图标。

```jsx
<Cell.Group inset>
  <Field
    label="文本"
    leftIcon={<SmileO />}
    rightIcon={<WarningO />}
    placeholder="显示图标"
    onClickLeftIcon={() => Toast.info('左侧图标点击')}
    onClickRightIcon={() => Toast.info('右侧图标点击')}
  />
  <Field clearable label="文本" leftIcon={<MusicO />} placeholder="显示清除图标" />
</Cell.Group>
```

### 错误提示

设置 `required` 属性表示这是一个必填项，可以配合 `error` 或 `errorMessage` 属性显示对应的错误提示。

```jsx
<Cell.Group inset>
  <Field error required label="用户名" placeholder="请输入用户名" />
  <Field required label="手机号" placeholder="请输入手机号" errorMessage="手机号格式错误" />
</Cell.Group>
```

### 插入按钮

通过 button 插槽可以在输入框尾部插入按钮。

```jsx
 <Field
  center
  clearable
  label="短信验证码"
  placeholder="请输入短信验证码"
  button={
    <Button size="small" type="primary">
      发送
    </Button>
  }
/>
```

### 格式化输入内容

通过 `formatter` 属性可以对输入的内容进行格式化，通过 `formatTrigger` 属性可以指定执行格式化的时机，默认在输入时进行格式化。

```jsx
import React, { useState } from 'react';
import { Field, Cell } from 'rn-vant';

export default () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');

  const formatter = (val: string | number) => val.toString().replace(/\d/g, '');

  return (
    <Cell.Group inset>
      <Field
        value={value1}
        label="文本"
        formatter={formatter}
        placeholder="在输入时执行格式化"
        onChange={setValue1}
      />
      <Field
        value={value2}
        label="文本"
        formatter={formatter}
        formatTrigger="onBlur"
        placeholder="在失焦时执行格式化"
        onChange={setValue2}
      />
    </Cell.Group>
  );
}
```
