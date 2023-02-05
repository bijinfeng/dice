---
title: Notify 消息提示
desc: 在页面顶部展示消息提示，支持函数调用和组件调用两种方式。
demo: /notify

nav:
  path: /

group:
  title: 反馈组件
---

## 代码演示

### 基础用法

```js
Notify.show('通知内容')
```

### 通知类型

支持 `primary`、`success`、`warning`、`danger` 四种通知类型，默认为 `danger`。

```js
// 主要通知
Notify.show({ type: 'primary', message: '通知内容' });

// 成功通知
Notify.show({ type: 'success', message: '通知内容' });

// 危险通知
Notify.show({ type: 'danger', message: '通知内容' });

// 警告通知
Notify.show({ type: 'warning', message: '通知内容' });
```

### 自定义通知

自定义消息通知的颜色和展示时长。

```js
// 自定义颜色
Notify.show({ color: '#ad0000', background: '#ffe1e1', message: '自定义颜色' })

// 自定义时长
Notify.show({ message: '自定义时长', duration: 1000 })
```

### 组件调用

如果需要在 Notify 内嵌入组件或其他自定义内容，可以使用组件调用的方式。

```tsx
import React, { useState } from 'react';
import { Notify, Cell, Icon } from 'rn-vant';
import { Text } from 'react-native';

export default () => {
  const [show, setShow] = useState(false);

  const showNotify = () => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 2000);
  };

  return (
    <Cell.Group inset>
      <Cell title="组件调用" isLink onPress={showNotify}>
        <Notify type="success" visible={show}>
          <Icon name="bell" style={{ marginRight: 4 }} color="white" size={14} />
          <Text>通知内容</Text>
        </Notify>
      </Cell>
    </Cell.Group>
  )
}
```

## API

### 方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| Notify.show | 展示提示 | `options \| message` | notify 实例 |
| Notify.clear | 关闭提示 | - | `void` |
| Notify.setDefaultOptions | 修改默认配置，对所有 Notify 生效 | `options` | `void` |
| Notify.resetDefaultOptions | 重置默认配置，对所有 Notify 生效 | - | `void` |

### Options

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 类型，可选值为 `primary` `success` `warning` | _string_ | `danger` |
| message | 展示文案，支持通过`\n`换行 | _string\|React.ReactNode_ | - |
| duration | 展示时长(ms)，值为 0 时，notify 不会消失 | _number_ | `3000` |
| color | 字体颜色 | _string_ | `white` |
| background | 背景颜色 | _string_ | - |
| onPress | 点击时的回调函数 | _(event: MouseEvent): void_ | - |
| onClose | 关闭时的回调函数 | _() => void_ | - |
