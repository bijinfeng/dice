import React from 'react';
import { View } from 'react-native';
import { ImagePicker } from 'rn-vant';
import { DemoBlock } from '../../components';

const defaultValue = [
  {
    url: 'https://img.yzcdn.cn/vant/sand.jpg',
  },
  {
    url: 'https://img.yzcdn.cn/vant/tree.jpg',
  },
];

const ImagePickerExample = () => {
  return (
    <View>
      <DemoBlock title="基础用法">
        <ImagePicker defaultValue={defaultValue} />
      </DemoBlock>
    </View>
  );
};

export default ImagePickerExample;
