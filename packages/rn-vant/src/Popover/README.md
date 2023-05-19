---
title: Popover 气泡弹出框
desc: 弹出式的气泡菜单。
demo: /popover

nav:
  path: /

group:
  title: 展示组件
---

## 引入

```js
import { Popover } from '@pingtou/rn-vant';
```

## 代码演示

### 基础用法

当 Popover 弹出时，会基于 `reference` 属性的内容进行定位。

```tsx
import React from 'react';
import { Button, Popover, Toast, PopoverAction } from '@pingtou/rn-vant';

const actions: PopoverAction[] = [{ text: '选项一' }, { text: '选项二' }, { text: '选项三' }];

export default () => {
  const select = (option: PopoverAction) => Toast.info(option.text);

  return (
    <Popover
      actions={actions}
      onSelect={select}
      reference={<Button type="primary">浅色风格</Button>}
    />
  );
};
```

### 选项配置

- 在 `actions` 数组中，可以通过 `icon` 字段来定义选项的图标。
- 在 `actions` 数组中，可以通过 `disabled` 字段来禁用某个选项。

```tsx
import React from 'react';
import { Button, Popover, Toast, PopoverAction, Space } from '@pingtou/rn-vant';
import { AddO, MusicO, MoreO } from '@pingtou/rn-vant-icons';

const disabledActions: PopoverAction[] = [
  { text: '选项一', disabled: true },
  { text: '选项二', disabled: true },
  { text: '选项三' },
];
const iconActions: PopoverAction[] = [
  { text: '选项一', icon: <AddO /> },
  { text: '选项二', icon: <MusicO /> },
  { text: '选项三', icon: <MoreO /> },
];

export default () => {
  const select = (option: PopoverAction) => Toast.info(option.text);

  return (
    <Space>
      <Popover
        actions={iconActions}
        onSelect={select}
        reference={<Button type="primary">展示图标</Button>}
      />
      <Popover
        actions={disabledActions}
        onSelect={select}
        reference={<Button type="primary">禁用选项</Button>}
      />
    </Space>
  );
};
```

### 自定义内容

通过 children，可以在 Popover 内部放置任意内容。

```tsx
import React, { useRef } from 'react';
import { Button, Popover, Grid, PopoverInstance } from '@pingtou/rn-vant';
import { PhotoO } from '@pingtou/rn-vant-icons';

export default () => {
  const popover = useRef<PopoverInstance>(null);

  return (
    <Popover ref={popover} reference={<Button type="primary">自定义内容</Button>}>
      <Grid border={false} columnNum={3} square style={{ width: 240 }}>
        {Array.from({ length: 6 }, (_, i) => (
          <Grid.Item
            onPress={() => popover.current?.hide()}
            key={i}
            icon={<PhotoO />}
            text="文字"
          />
        ))}
      </Grid>
    </Popover>
  );
};
```

## API

### Props

| 参数                | 说明                                      | 类型                     | 默认值   |
| ------------------- | ----------------------------------------- | ------------------------ | -------- |
| actions             | 选项列表                                  | _Action[]_               | `[]`     |
| placement           | 弹出位置                                  | _string_                 | `bottom` |
| theme               | 主题风格，可选值为 `dark`                 | _string_                 | `light`  |
| duration            | 动画时长，单位毫秒，设置为 0 可以禁用动画 | _number_                 | `300`    |
| offset              | 出现位置的偏移量                          | _number_                 | `0`      |
| overlay             | 是否显示遮罩层                            | _boolean_                | `false`  |
| overlayStyle        | 自定义遮罩层样式                          | _StyleProp\<ViewStyle\>_ | -        |
| closeOnClickAction  | 是否在点击选项后关闭                      | _boolean_                | `true`   |
| closeOnClickOutside | 是否在点击外部元素后关闭菜单              | _boolean_                | `true`   |
| closeOnClickOverlay | 是否在点击遮罩层后关闭菜单                | _boolean_                | `true`   |
| children            | 自定义菜单内容                            | _React.ReactNode_        | -        |
| reference           | 触发 Popover 显示的元素内容               | _React.ReactNode_        | -        |

### Action 数据结构

`actions` 属性是一个由对象构成的数组，数组中的每个对象配置一列，对象可以包含以下值：

| 键名      | 说明                     | 类型        |
| --------- | ------------------------ | ----------- |
| text      | 选项文字                 | _string_    |
| icon      | 文字左侧的图标           | _ReactNode_ |
| color     | 选项文字颜色             | _string_    |
| disabled  | 是否为禁用状态           | _boolean_   |

### Events

| 事件名         | 说明                     | 回调参数                        |
| -------------- | ------------------------ | ------------------------------- |
| onSelect       | 点击选项时触发           | _action: Action, index: number_ |
| onOpen         | 打开菜单时触发           | -                               |
| onClose        | 关闭菜单时触发           | -                               |
| onOpened       | 打开菜单且动画结束后触发 | -                               |
| onClosed       | 关闭菜单且动画结束后触发 | -                               |
| onClickOverlay | 点击遮罩层时触发         | _event: MouseEvent_             |

### 方法

通过 ref 可以获取到 Popover 实例并调用实例方法。

| 方法名 | 说明         | 参数 | 返回值 |
| ------ | ------------ | ---- | ------ |
| show   | 显示 popover | -    | -      |
| hide   | 关闭 popover | -    | -      |
