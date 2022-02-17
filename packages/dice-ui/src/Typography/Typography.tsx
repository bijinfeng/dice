import React from 'react';
import { Text } from 'react-native';
import type { TypographyBaseProps } from './type';

const Typography = (props: TypographyBaseProps): JSX.Element => {
  const { children, onPress, style } = props;

  return (
    <Text style={style} onPress={onPress}>
      {children}
    </Text>
  );
};

export default Typography;
