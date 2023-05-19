---
title: Tab 标签页
desc: 选项卡组件，用于在不同的内容区域之间进行切换。
demo: /tab

nav:
  path: /

group:
  title: 导航组件
---

## 代码演示

### 基础用法

通过 `active` 绑定当前激活标签对应的索引值，默认情况下启用第一个标签。

```jsx
import React from 'react';
import { Text } from 'react-native';
import { Tabs } from '@pingtou/rn-vant';

export default () => {
  reutrn (
    <Tabs active={0}>
      {[1, 2, 3].map(idx => (
        <Tabs.TabPane key={idx} title={`标签${idx}`}>
          <Text>内容 {idx}</Text>
        </Tabs.TabPane>
      ))}
    </Tabs>
  );
};
```

### 标签栏滚动

标签数量超过 5 个时，标签栏可以在水平方向上滚动，切换时会自动将当前标签居中。

```jsx
import React from 'react';
import { Text } from 'react-native';
import { Tabs } from '@pingtou/rn-vant';

export default () => {
  reutrn (
    <Tabs active={0}>
      {[1, 2, 3, 4, 5, 6, 7, 8].map(idx => (
        <Tabs.TabPane key={idx} title={`标签${idx}`}>
          <Text>内容 {idx}</Text>
        </Tabs.TabPane>
      ))}
    </Tabs>
  );
};
```

### 禁用标签

设置 `disabled` 属性即可禁用标签，如果需要监听禁用标签的点击事件，可以在 `Tabs` 上监听`disabled` 事件。

```jsx
import React from 'react';
import { Text } from 'react-native';
import { Tabs } from '@pingtou/rn-vant';

export default () => {
  return (
    <Tabs active="c">
      <Tabs.TabPane title="标签1">
        <Text>内容1</Text>
      </Tabs.TabPane>
      <Tabs.TabPane title="标签2" disabled>
        <Text>内容2</Text>
      </Tabs.TabPane>
      <Tabs.TabPane title="标签3">
        <Text>内容3</Text>
      </Tabs.TabPane>
    </Tabs>
  );
};
```
