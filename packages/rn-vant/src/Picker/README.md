---
title: Picker 选择器
desc: 提供多个选项集合供用户选择，支持单列选择、多列选择和级联选择，通常与弹出层组件配合使用。
demo: /picker

nav:
  path: /

group:
  title: 表单组件
---

## 基础用法

### 选项配置

Picker 组件通过 columns 属性配置选项数据，columns 是一个包含字符串或对象的数组。

### 顶部栏

顶部栏包含标题、确认按钮和取消按钮，点击确认按钮触发 confirm 事件，点击取消按钮触发 cancel 事件。

```jsx
import React, { FC, useState } from 'react';
import { Picker, Toast, Popup, Field } from '@pingtou/rn-vant';

const columns = [
  { text: '杭州', value: 'Hangzhou' },
  { text: '宁波', value: 'Ningbo' },
  { text: '温州', value: 'Wenzhou' },
  { text: '绍兴', value: 'Shaoxing' },
  { text: '湖州', value: 'Huzhou' },
];

export default () => {
  const onChange = (value: string, _: any, index: number) => {
    Toast(`当前值：${value}, 当前索引：${index}`);
  };

  return (
    <Picker
      title="标题"
      columns={columns}
      onChange={onChange}
      onCancel={() => Toast.info('点击取消按钮')}
      onConfirm={() => Toast.info('点击确认按钮')}
    />
  );
};
```

### 搭配弹出层使用

在实际场景中，Picker 通常作为用于辅助表单填写，可以搭配 Popup 和 Field 实现该效果。

```jsx
import React, { useState } from 'react';
import { Picker, Toast, Popup, Field } from '@pingtou/rn-vant';

const columns = [
  { text: '杭州', value: 'Hangzhou' },
  { text: '宁波', value: 'Ningbo' },
  { text: '温州', value: 'Wenzhou' },
  { text: '绍兴', value: 'Shaoxing' },
  { text: '湖州', value: 'Huzhou' },
];

export default () => {
  const [showPicker, setShowPicker] = useState(false);
  const [pickerValue, setPickerValue] = useState('');

  const handleFileChange = (value: string) => {
    setPickerValue(value);
    setShowPicker(false);
  };

  return (
    <>
      <Field
        label="城市"
        placeholder="选择城市"
        isLink
        readonly
        onPress={() => setShowPicker(true)}
        value={pickerValue}
      />
      <Popup round position="bottom" visible={showPicker} onClose={() => setShowPicker(false)}>
        <Picker
          title="标题"
          columns={columns}
          onCancel={() => setShowPicker(false)}
          onConfirm={handleFileChange}
          style={cardStyle}
          value={pickerValue}
        />
      </Popup>
    </>
  );
};
```

### 多列选择

columns 属性可以通过二维数组的形式配置多列选择。

```jsx
const multiColumns = [
  // 第一列
  [
    { text: '周一', value: 'Monday' },
    { text: '周二', value: 'Tuesday' },
    { text: '周三', value: 'Wednesday' },
    { text: '周四', value: 'Thursday' },
    { text: '周五', value: 'Friday' },
  ],
  // 第二列
  [
    { text: '上午', value: 'Morning' },
    { text: '下午', value: 'Afternoon' },
    { text: '晚上', value: 'Evening' },
  ],
];

<Picker title="标题" columns={multiColumns} />
```

### 级联选择

使用 columns 的 children 字段可以实现选项级联的效果。

```jsx
const cascadeColumns = [
  {
    text: '浙江',
    value: 'Zhejiang',
    children: [
      {
        text: '杭州',
        value: 'Hangzhou',
        children: [
          { text: '西湖区', value: 'Xihu' },
          { text: '余杭区', value: 'Yuhang' },
        ],
      },
      {
        text: '温州',
        value: 'Wenzhou',
        children: [
          { text: '鹿城区', value: 'Lucheng' },
          { text: '瓯海区', value: 'Ouhai' },
        ],
      },
    ],
  },
  {
    text: '福建',
    value: 'Fujian',
    children: [
      {
        text: '福州',
        value: 'Fuzhou',
        children: [
          { text: '鼓楼区', value: 'Gulou' },
          { text: '台江区', value: 'Taijiang' },
        ],
      },
      {
        text: '厦门',
        value: 'Xiamen',
        children: [
          { text: '思明区', value: 'Siming' },
          { text: '海沧区', value: 'Haicang' },
        ],
      },
    ],
  },
];

<Picker title="标题" columns={cascadeColumns} />
```
