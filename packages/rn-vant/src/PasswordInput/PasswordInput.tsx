import React from 'react';
import { View } from 'react-native';
import { useThemeFactory } from '../Theme';
import type { PasswordInputProps, PasswordInputInstance } from './types';
import { createStyle } from './style';

const PasswordInput = React.forwardRef<PasswordInputInstance, PasswordInputProps>(() => {
  const { styles } = useThemeFactory(createStyle);

  return <View style={styles.wrapper} />;
});

export default PasswordInput;
