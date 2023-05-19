---
title: Collapse 折叠面板
desc: 将一组内容放置在多个折叠面板中，点击面板的标题可以展开或收缩其内容。
demo: /collapse

nav:
  path: /

group:
  title: 展示组件
---

## 引入

```js
import { Collapse } from '@pingtou/rn-vant';
```

## 代码演示

### 基础用法

通过 `initExpanded` 控制展开的面板列表，`initExpanded` 为数组格式。

```jsx
import React from 'react';
import { Collapse } from '@pingtou/rn-vant';

export default () => {
  return (
    <Collapse initExpanded={['1']}>
      <Collapse.Item title="标题1" name="1">
        代码是写出来给人看的，附带能在机器上运行
      </Collapse.Item>
      <Collapse.Item title="标题2" name="2">
        代码是写出来给人看的，附带能在机器上运行
      </Collapse.Item>
      <Collapse.Item title="标题3" name="3">
        代码是写出来给人看的，附带能在机器上运行
      </Collapse.Item>
    </Collapse>
  );
};
```

### 手风琴

通过 `accordion` 可以设置为手风琴模式，最多展开一个面板，此时 `initExpanded` 为字符串格式。

```jsx
import React from 'react';
import { Collapse } from '@pingtou/rn-vant';
import { Text } from 'react-native';
import { QuestionO } from '@pingtou/rn-vant-icons';

export default () => {
  return (
    <Collapse initExpanded="1" accordion>
      <Collapse.Item icon={<QuestionO />} title={<Text>自定义标题</Text>} name="1">
        代码是写出来给人看的，附带能在机器上运行
      </Collapse.Item>
      <Collapse.Item title="标题2" name="2">
        代码是写出来给人看的，附带能在机器上运行
      </Collapse.Item>
      <Collapse.Item title="标题3" name="3">
        代码是写出来给人看的，附带能在机器上运行
      </Collapse.Item>
    </Collapse>
  );
};
```

### 禁用状态

通过 `disabled` 属性来禁用单个面板。

```jsx
import React from 'react';
import { Collapse } from '@pingtou/rn-vant';

export default () => {
  return (
    <Collapse>
      <Collapse.Item title="标题1" name="1">
        代码是写出来给人看的，附带能在机器上运行
      </Collapse.Item>
      <Collapse.Item title="标题2" name="2" disabled>
        代码是写出来给人看的，附带能在机器上运行
      </Collapse.Item>
      <Collapse.Item title="标题3" name="3" disabled>
        代码是写出来给人看的，附带能在机器上运行
      </Collapse.Item>
    </Collapse>
  );
};
```

## API

### Collapse Props

| 参数         | 说明                  | 类型                                                                   | 默认值  |
| ------------ | --------------------- | ---------------------------------------------------------------------- | ------- |
| initExpanded | 当前展开面板的 name   | 手风琴模式：_number \| string_<br>非手风琴模式：_(number \| string)[]_ | -       |
| accordion    | 是否开启手风琴模式    | _boolean_                                                              | `false` |
| border       | 是否显示外边框        | _boolean_                                                              | `true`  |
| nativeRef    | 组件根部 DOM 元素引用 | _Ref_                                                                  | -       |

### Collapse Events

| 事件名   | 说明           | 回调参数                                       |
| -------- | -------------- | ---------------------------------------------- |
| onChange | 切换面板时触发 | initExpanded: 类型与 initExpanded 绑定的值一致 |

### CollapseItem Props

| 参数       | 说明                                 | 类型                | 默认值  |
| ---------- | ------------------------------------ | ------------------- | ------- |
| name       | 唯一标识符，默认为索引值             | _number \| string_  | `index` |
| icon       | 标题栏左侧图标                       | _string\|ReactNode_ | -       |
| size       | 标题栏大小，可选值为 `large`         | _string_            | -       |
| title      | 标题栏左侧内容                       | _ReactNode_         | -       |
| value      | 标题栏右侧内容                       | _ReactNode_         | -       |
| label      | 标题栏描述信息                       | _ReactNode_         | -       |
| border     | 是否显示内边框                       | _boolean_           | `true`  |
| isLink     | 是否展示标题栏右侧箭头并开启点击反馈 | _boolean_           | `true`  |
| disabled   | 是否禁用面板                         | _boolean_           | `false` |
| titleClass | 左侧标题额外类名                     | _string_            | -       |
| valueClass | 右侧内容额外类名                     | _string_            | -       |
| labelClass | 描述信息额外类名                     | _string_            | -       |
