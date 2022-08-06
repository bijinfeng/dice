import React, { FC, useState } from 'react';
import { Picker, Toast, Popup, Field } from 'rn-vant';
import { ScrollView, ViewStyle } from 'react-native';
import { DemoBlock } from '../../components';

const columns = [
  { text: '杭州', value: 'Hangzhou' },
  { text: '宁波', value: 'Ningbo' },
  { text: '温州', value: 'Wenzhou' },
  { text: '绍兴', value: 'Shaoxing' },
  { text: '湖州', value: 'Huzhou' },
];

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

const cardStyle: ViewStyle = {
  borderRadius: 8,
  marginHorizontal: 12,
};

const PickerDemo: FC = () => {
  const [showPicker, setShowPicker] = useState(false);
  const [pickerValue, setPickerValue] = useState('');

  const onChange = (value: string, _: any, index: number) => {
    Toast(`当前值：${value}, 当前索引：${index}`);
  };

  const handleFileChange = (value: string) => {
    setPickerValue(value);
    setShowPicker(false);
  };

  return (
    <ScrollView>
      <DemoBlock title="基础用法">
        <Picker
          title="标题"
          columns={columns}
          onChange={onChange}
          onCancel={() => Toast.info('点击取消按钮')}
          onConfirm={() => Toast.info('点击确认按钮')}
          style={cardStyle}
        />
      </DemoBlock>
      <DemoBlock title="搭配弹出层使用">
        <Field
          label="城市"
          placeholder="选择城市"
          isLink
          readOnly
          onPress={() => setShowPicker(true)}
          value={pickerValue}
        />
        <Popup round position="bottom" visible={showPicker} onClose={() => setShowPicker(false)}>
          <Picker
            title="标题"
            columns={columns}
            onCancel={() => setShowPicker(false)}
            onConfirm={handleFileChange}
            value={pickerValue}
          />
        </Popup>
      </DemoBlock>
      <DemoBlock title="多列选择">
        <Picker title="标题" columns={multiColumns} style={cardStyle} />
      </DemoBlock>
      <DemoBlock title="级联选择">
        <Picker title="标题" columns={cascadeColumns} style={cardStyle} />
      </DemoBlock>
    </ScrollView>
  );
};

export default PickerDemo;
