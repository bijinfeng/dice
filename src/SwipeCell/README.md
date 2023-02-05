---
title: SwipeCell 滑动单元格
desc: 可以左右滑动来展示操作按钮的单元格组件。
demo: /swipe-cell

nav:
  path: /

group:
  title: 反馈组件
---

## 引入

```js
import { SwipeCell } from 'rn-vant';
```

## 代码演示

### 基础用法

`SwipeCell` 组件提供了 `leftAction` 和 `rightRight` 两个属性，用于定义两侧滑动区域的内容。

```tsx
import React from 'react';
import { SwipeCell, Button, Cell } from 'rn-vant';

export default () => {
  return (
    <SwipeCell
      leftAction={
        <Button square type="primary">
          选择
        </Button>
      }
      rightAction={
        <>
          <Button square type="danger">
            删除
          </Button>
          <Button square type="primary">
            收藏
          </Button>
        </>
      }
    >
      <Cell title="单元格" value="内容" />
    </SwipeCell>
  );
};
```

### 事件监听

```tsx
import React from 'react';
import { SwipeCell, Button, Cell, Toast } from 'rn-vant';

export default () => {
  return (
    <SwipeCell
      onOpen={() => Toast.info('打开')}
      onClose={() => Toast.info('关闭')}
      rightAction={
        <Button style={{ height: '100%' }} square type="danger">
          删除
        </Button>
      }
    >
      <Cell title="单元格" value="内容" />
    </SwipeCell>
  );
};
```

### 自定义内容

`SwipeCell` 可以嵌套任意内容，比如嵌套一个商品卡片。

```tsx
import React from 'react';
import { View } from 'react-native';
import { SwipeCell, Button, Typography, Image } from 'rn-vant';

export default () => {
  return (
    <SwipeCell
      rightAction={
        <Button style={{ height: '100%' }} square type="danger">
          删除
        </Button>
      }
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'stretch',
          paddingHorizontal: 16,
          paddingVertical: 10,
          backgroundColor: 'white',
        }}
      >
        <Image
          wrapperStyle={{ width: 88, height: 99, marginRight: 10 }}
          source={{ uri: 'https://img.yzcdn.cn/vant/ipad.jpeg' }}
        />
        <View style={{ justifyContent: 'space-between', flex: 1 }}>
          <View>
            <Typography.Title level={5}>商品标题</Typography.Title>
            <Typography.Text type="secondary">这里是商品描述</Typography.Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignContent: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Typography.Text strong size="lg">
              ¥2.00
            </Typography.Text>
            <Typography.Text size="sm" type="secondary">
              x2
            </Typography.Text>
          </View>
        </View>
      </View>
    </SwipeCell>
  );
};
```

### 外部调用

通过 `ref` 获取 SwipeCell 实例的类型定义。

```tsx
import React, { useRef } from 'react';
import { View } from 'react-native';
import { SwipeCell, Button, Cell, SwipeCellInstance } from 'rn-vant';
import { Arrow, ArrowLeft, Cross } from '@rn-vant/icons';

export default () => {
  const ref = useRef<SwipeCellInstance>(null);

  return (
    <View>
      <SwipeCell
        ref={ref}
        leftAction={
          <Button square type="primary">
            选择
          </Button>
        }
        rightAction={
          <Button square type="danger">
            删除
          </Button>
        }
      >
        <Cell title="单元格" value="内容" />
      </SwipeCell>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <Button icon={<ArrowLeft />} onPress={() => ref.current?.open('left')}>
          左滑打开
        </Button>
        <Button icon={<Arrow />} onPress={() => ref.current?.open('right')}>
          右滑打开
        </Button>
        <Button icon={<Cross />} onPress={() => ref.current?.close()}>
          关闭
        </Button>
      </View>
    </View>
  );
};
```

## API

### Props

| 参数        | 说明                           | 类型               | 默认值  |
| ----------- | ------------------------------ | ------------------ | ------- |
| name        | 标识符，可以在事件参数中获取到 | _number \| string_ | `''`    |
| leftAction  | 左侧滑动区域的内容             | _React.ReactNode \| SwipeCellRenderAction_        | --      |
| rightAction | 右侧滑动区域的内容             | _React.ReactNode \| SwipeCellRenderAction_        | --      |
| disabled    | 是否禁用滑动                   | _boolean_          | `false` |

### Events

| 事件名  | 说明       | 回调参数                                                  |
| ------- | ---------- | --------------------------------------------------------- |
| onOpen  | 打开时触发 | _{ name: string \| number, position: 'left' \| 'right' }_ |
| onClose | 关闭时触发 | _{ name: string \| number, position: 'left' \| 'right' }_ |

### 方法

通过 ref 可以获取到 SwipeCell 实例并调用实例方法。

| 方法名 | 说明             | 参数                      | 返回值 |
| ------ | ---------------- | ------------------------- | ------ |
| open   | 打开单元格侧边栏 | position: `left \| right` | -      |
| close  | 收起单元格侧边栏 | -                         | -      |
