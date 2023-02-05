import React, { forwardRef } from "react";
import { Pressable, View } from "react-native";

import type { SwiperItemProps } from "./type";

const SwiperItem = forwardRef<View, SwiperItemProps>((props, ref) => {
  const { children, ...rest } = props;

  return (
    <Pressable ref={ref} collapsable={false} {...rest}>
      {children}
    </Pressable>
  );
});

export default SwiperItem;
