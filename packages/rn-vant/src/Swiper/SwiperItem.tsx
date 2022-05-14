import React, { forwardRef } from 'react';
import { View, Pressable } from 'react-native';

import type { SwiperItemProps } from './type';

const SwiperItem = forwardRef<View, SwiperItemProps>((props, ref) => {
  const { children, onPress, style, ...rest } = props;

  return (
    <Pressable ref={ref} onPress={onPress} style={style} {...rest}>
      {children}
    </Pressable>
  );
});

export default SwiperItem;
