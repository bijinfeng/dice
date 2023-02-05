---
title: Dialog 弹出框
desc: 弹出模态框，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作，支持函数调用和组件调用两种方式。
demo: /dialog

nav:
  path: /

group:
  title: 反馈组件
---

## 代码演示

### 消息提示

用于提示一些消息，只包含一个确认按钮。

```js
Dialog.alert({
  title: '标题',
  message: '代码是写出来给人看的，附带能在机器上运行。',
}).then(() => {
  // on close
});

Dialog.alert({
  message: '生命远不止连轴转和忙到极限，人类的体验远比这辽阔、丰富得多。',
}).then(() => {
  // on close
});
```

### 消息确认

用于确认消息，包含取消和确认按钮。

```js
Dialog.confirm({
  title: '标题',
  message:
    '如果解决方法是丑陋的，那就肯定还有更好的解决方法，只是还没有发现而已。',
})
  .then(() => {
    // on confirm
  })
  .catch(() => {
    // on cancel
  });
```

### 圆角按钮风格

将 theme 选项设置为 `round-button` 可以展示圆角按钮风格的弹窗。

```js
Dialog.alert({
  title: '标题',
  message: '代码是写出来给人看的，附带能在机器上运行。',
  theme: 'round-button',
}).then(() => {
  // on close
});

Dialog.alert({
  message: '生命远不止连轴转和忙到极限，人类的体验远比这辽阔、丰富得多。',
  theme: 'round-button',
}).then(() => {
  // on close
});
```

### 异步关闭

通过 `onConfirm` 和 `onCancel` 属性返回Promise函数，在弹窗关闭前进行特定操作。

```js
Dialog.show({
  title: '标题',
  message: '弹窗内容',
  showCancelButton: true,
  onCancel: () => {
    return new Promise(res => {
      setTimeout(() => {
        res(true);
        Toast.success({ message: '取消按钮异步' });
      }, 3000);
    });
  },
  onConfirm: () => {
    return new Promise(res => {
      setTimeout(() => {
        res(true);
        Toast.success({ message: '确认按钮异步' });
      }, 3000);
    });
  },
});
```

## API

### 方法

| 方法名         | 说明             | 参数      | 返回值            |
| -------------- | ---------------- | --------- | ----------------- |
| Dialog         | 弹窗组件         | `options` | `React.ReactNode` |
| Dialog.show    | 展示提示弹窗     | `options` | `Promise`         |
| Dialog.alert   | 展示消息提示弹窗 | `options` | `Promise`         |
| Dialog.confirm | 展示消息确认弹窗 | `options` | `Promise`         |

### Props

通过函数调用 `Dialog` 时，支持传入以下选项：

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visible | 是否显示弹窗 | _boolean_ | - |
| title | 标题 | _string_ | - |
| width | 弹窗宽度，默认单位为`px` | _number \| string_ | `320px` |
| message | 文本内容，支持通过`\n`换行 | _string_ | - |
| messageAlign | 内容对齐方式，可选值为`left` `right` | _string_ | `center` |
| theme | 样式风格，可选值为`round` | _string_ | `default` |
| className | 自定义类名 | _any_ | - |
| showConfirmButton | 是否展示确认按钮 | _boolean_ | `true` |
| showCancelButton | 是否展示取消按钮 | _boolean_ | `false` |
| confirmButtonText | 确认按钮文案 | _string_ | `确认` |
| confirmButtonColor | 确认按钮颜色 | _string_ | `#ee0a24` |
| cancelButtonText | 取消按钮文案 | _string_ | `取消` |
| cancelButtonColor | 取消按钮颜色 | _string_ | `black` |
| overlay | 是否展示遮罩层 | _boolean_ | `true` |
| overlayClass | 自定义遮罩层类名 | _string_ | - |
| overlayStyle | 自定义遮罩层样式 | _object_ | - |
| closeable | 是否展示关闭图标 | _boolean_ | `false` |
| closeOnPopstate | 是否在页面回退时自动关闭 | _boolean_ | `true` |
| lockScroll | 是否锁定背景滚动 | _boolean_ | `true` |
| onCancel | 点击取消按钮时触发 | _Function_ | - |
| onConfirm | 点击确认按钮时触发 | _Function_ | - |
| onClose | Dialog 关闭时的回调 | _Function_ | - |
| onClosed | Dialog 完全关闭时的回调 | _Function_ | - |
| footer | 自定义底部按钮区域 | _ReactNode_ | - |
