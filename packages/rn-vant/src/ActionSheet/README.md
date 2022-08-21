---
title: ActionSheet 动作面板
desc: 底部弹起的模态面板，包含与当前情境相关的多个选项。
demo: /action-sheet

nav:
  path: /

group:
  order: 3
  title: 反馈组件
---

## 基础用法

动作面板通过 `actions` 属性来定义选项，`actions` 属性是一个由对象构成的数组，数组中的每个对象配置一列，对象格式见文档下方表格。

```typescript
import React, { memo, useState } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Cell, ActionSheet, ActionSheetAction } from 'rn-vant';

const defaultActions: ActionSheetAction[] = [
  { name: '选项一' },
  { name: '选项二' },
  { name: '选项三' },
];

export default () => {
  const [visible, setVisible] = useState(false);

  const onClose = () => {
    setVisible(false);
  };

  return <ActionSheet visible={visible} actions={defaultActions} onClose={onClose} />;
};
```

## 展示取消按钮

设置 `cancelText` 属性后，会在底部展示取消按钮，点击后关闭当前面板并触发 `cancel` 事件。

```jsx
<ActionSheet
  visible={visible}
  actions={defaultActions}
  onClose={onClose}
  cancelText="取消"
  onCancel={onCancel}
/>
```

## 展示描述信息

通过 `description` 可以在菜单顶部显示描述信息，通过选项的 `subname` 属性可以在选项文字的右侧展示描述信息。

```jsx
const actions = [
  { name: '选项一' },
  { name: '选项二' },
  { name: '选项三', subname: '描述信息' },
];

<ActionSheet
  visible={visible}
  actions={defaultActions}
  onClose={onClose}
   description="这是一段描述信息"
/>
```

## 选项状态

可以通过 `loading` 和 `disabled` 将选项设置为加载状态或禁用状态，或者通过 `color` 设置选项的颜色

```js
const actions = [
  { name: '着色选项', color: '#ee0a24' },
  { name: '禁用选项', disabled: true },
  { name: '加载选项', loading: true },
];
```

## 自定义面板

通过 `children` 可以自定义面板的展示内容，同时可以使用 `title` 属性展示标题栏

```jsx
 <ActionSheet visible={visible1} onClose={() => setVisible(false)} title="标题" closeable>
  <View>
    <Text style={{ paddingHorizontal: 16, paddingTop: 16, paddingBottom: 160 }}>内容</Text>
  </View>
</ActionSheet>
```

## 使用 iOS 原生的 ActionSheet

在 iOS 环境下，通过 `useNativeIOS` 可以使用原生的 ActionSheet

```jsx
<ActionSheet
  visible={visible}
  actions={actions}
  onClose={onClose}
  cancelText={cancelText}
  description={description}
  useNativeIOS={useNativeIOS}
/>
```
