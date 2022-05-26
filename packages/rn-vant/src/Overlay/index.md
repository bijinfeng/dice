---
title: Overlay 遮罩层
desc: 创建一个遮罩层，用于强调特定的页面元素，并阻止用户进行其他操作。
demo: /overlay

nav:
  path: /

group:
  title: 反馈组件
---

## 基础用法

```jsx
import React, { memo, useState } from 'react';
import { Button, Overlay } from 'rn-vant';
import { View } from 'react-native';

const Example = memo(() => {
  const [visible, setVisible] = useState(false);

  return (
    <View>
      <Button type="primary" onPress={() => setVisible(true)}>
        显示遮罩层
      </Button>
      <Overlay visible={visible} onBackdropPress={() => setVisible(false)} />
    </View>
  );
});

export default Example;
```

## 嵌入内容

通过给 `Overlay.View` 添加 children 可以在遮罩层上嵌入任意内容。

```jsx
import React, { memo, useState } from 'react';
import { Button, Overlay } from 'rn-vant';
import { View } from 'react-native';

const Example = memo(() => {
  const [visible, setVisible] = useState(false);

  return (
    <View>
      <Button type="primary" onPress={() => setVisible(true)}>
        嵌入内容
      </Button>
      <Overlay visible={visible} onBackdropPress={() => setVisible(false)}>
        <View style={{ width: 120, height: 120, backgroundColor: '#fff', borderRadius: 4 }} />
      </Overlay>
    </View>
  );
});

export default Example;
```
