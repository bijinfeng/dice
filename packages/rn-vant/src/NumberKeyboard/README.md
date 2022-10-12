---
title: NumberKeyboard 数字键盘
desc: 虚拟数字键盘，可以配合密码输入框组件或自定义的输入框组件使用。
demo: /number-keyboard

nav:
  path: /

group:
  title: 表单组件
---

## 代码演示

### 基础用法

- 数字键盘提供了 `onInput`、`onDelete`、`onBlur` 事件，分别对应输入内容、删除内容和失去焦点的动作。
- 将 theme 属性设置为 `custom` 来展示键盘的右侧栏，常用于输入金额的场景。
- 通过 `extraKey` 属性可以设置左下角按键内容，比如需要输入身份证号时，可以将 `extraKey` 设置为 `X`。
- 通过 `title` 属性可以设置键盘标题。
- 当 theme 为 `custom` 时，支持以数组的形式配置两个 `extraKey`。
- 通过 `randomKeyOrder` 属性可以随机排序数字键盘，常用于安全等级较高的场景。

```jsx
import React, { useState } from 'react';
import { View } from 'react-native';
import { Cell, NumberKeyboard, Field, useSetState, Toast } from 'rn-vant';

export default () => {
  const [state, set] = useSetState({
    v1: true,
    v2: false,
    v3: false,
    v4: false,
    v5: false,
    v6: false,
  });

  const onInput = (v: string) => Toast.info(`输入${v}`);
  const onDelete = () => Toast.info('删除');

  return (
    <View>
      <Cell.Group inset>
        <Cell title="弹出默认键盘" isLink onPress={() => set({ v1: true })} />
        <Cell title="弹出带右侧栏的键盘" isLink onPress={() => set({ v2: true })} />
        <Cell title="弹出身份证号键盘" isLink onPress={() => set({ v3: true })} />
        <Cell title="弹出带标题的键盘" isLink onPress={() => set({ v4: true })} />
        <Cell title="弹出配置多个按键的键盘" isLink onPress={() => set({ v5: true })} />
        <Cell title="弹出配置随机数字的键盘" isLink onPress={() => set({ v6: true })} />
      </Cell.Group>
      {/* 弹出默认键盘 */}
      <NumberKeyboard
        visible={state.v1}
        onBlur={() => {
          set({ v1: false });
        }}
        onInput={onInput}
        onDelete={onDelete}
      />
      {/* 弹出带右侧栏的键盘 */}
      <NumberKeyboard
        theme="custom"
        extraKey="."
        closeButtonText="完成"
        visible={state.v2}
        onBlur={() => {
          set({ v2: false });
        }}
        onInput={onInput}
        onDelete={onDelete}
      />
      {/* 弹出身份证号键盘 */}
      <NumberKeyboard
        extraKey="X"
        closeButtonText="完成"
        visible={state.v3}
        onBlur={() => {
          set({ v3: false });
        }}
        onInput={onInput}
        onDelete={onDelete}
      />
      {/* 弹出带标题的键盘 */}
      <NumberKeyboard
        title="键盘标题"
        extraKey="."
        closeButtonText="完成"
        visible={state.v4}
        onBlur={() => {
          set({ v4: false });
        }}
        onInput={onInput}
        onDelete={onDelete}
      />
      {/* 弹出配置多个按键的键盘 */}
      <NumberKeyboard
        theme="custom"
        extraKey={['00', '.']}
        closeButtonText="完成"
        visible={state.v5}
        onBlur={() => {
          set({ v5: false });
        }}
        onInput={onInput}
        onDelete={onDelete}
      />
      {/* 弹出配置随机数字的键盘 */}
      <NumberKeyboard
        randomKeyOrder
        visible={state.v6}
        onBlur={() => {
          set({ v6: false });
        }}
        onInput={onInput}
        onDelete={onDelete}
      />
    </View>
  );
};
```

### 双向绑定

可以通过 `value` 绑定键盘当前输入值，并通过 `maxlength` 属性来限制输入长度。

```jsx
import React, { useState } from 'react';
import { View } from 'react-native';
import { NumberKeyboard, Field, Toast } from 'rn-vant';

export default () => {
  const [text, setText] = useState('');
  const [visible, setVisible] = useState(false);

  return (
    <View style={{ paddingTop: 12 }}>
      <Field
        label="双向绑定"
        readOnly
        placeholder="请输入"
        value={text}
        onPress={() => setVisible(true)}
      />
      <NumberKeyboard
        value={text}
        visible={visible}
        maxlength={6}
        onChange={setText}
        onBlur={() => setVisible(false)}
      />
    </View>
  );
};
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前输入值 | _string_ | - |
| show | 是否显示键盘 | _boolean_ | - |
| title | 键盘标题 | _ReactNode_ | - |
| delete | 键盘标题 | _ReactNode_ | - |
| numberKeyRender | 自定义数字按键内容 | _(item: KeyConfig) => ReactNode_ | - |
| deleteRender | 自定义删除按键内容 | _() => ReactNode_ | - |
| extraKeyRender | 自定义左下角按键内容 | _() => ReactNode_ | - |
| theme | 样式风格，可选值为 `custom` | _string_ | `default` |
| maxlength | 输入值最大长度 | _number \| string_ | - |
| transition | 是否开启过场动画 | _boolean_ | `true` |
| zIndex | 键盘 z-index 层级 | _number_ | `100` |
| extraKey | 底部额外按键的内容 | _string \| string[]_ | `''` |
| closeButtonText | 关闭按钮文字，空则不展示 | _string_ | - |
| deleteButtonText | 删除按钮文字，空则展示删除图标 | _string_ | - |
| closeButtonLoading | 是否将关闭按钮设置为加载中状态，仅在 `theme="custom"` 时有效 | _boolean_ | `false` |
| showDeleteKey | 是否展示删除图标 | _boolean_ | `true` |
| blurOnClose | 是否在点击关闭按钮时触发 blur 事件 | _boolean_ | `true` |
| hideOnClickOutside | 是否在点击外部时收起键盘 | _boolean_ | `true` |
| safeAreaInsetBottom | 是否开启[底部安全区适配](/guide/advanced-usage) | _boolean_ | `true` |
| randomKeyOrder | 是否将通过随机顺序展示按键 | _boolean_ | `false` |

### Events

| 事件名   | 说明                           | 回调参数      |
| -------- | ------------------------------ | ------------- |
| onInput  | 点击按键时触发                 | key: 按键内容 |
| onDelete | 点击删除键时触发               | -             |
| onClose  | 点击关闭按钮时触发             | -             |
| onBlur   | 点击关闭按钮或非键盘区域时触发 | -             |
| onShow   | 键盘完全弹出时触发             | -             |
| onHide   | 键盘完全收起时触发             | -             |
