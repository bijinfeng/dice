import React from 'react';
import { View } from 'react-native';
import type { ImagePickerProps } from './types';

const ImagePicker = (props: ImagePickerProps) => {
  const { children } = props;

  return <View>{ children }</View>
};

export default ImagePicker;
