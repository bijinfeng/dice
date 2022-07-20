import React, { forwardRef } from 'react';
import { View, Text } from 'react-native';
import isFunction from 'lodash-es/isFunction';
import { useControllableValue } from '../hooks';
import { useThemeFactory } from '../Theme';
import BaseInput from './BaseInput';
import { createTextAreaStyle } from './style';
import type { TextAreaProps, InputInstance } from './type';

const TextArea = forwardRef<InputInstance, TextAreaProps>((props, ref) => {
  const { showWordLimit = false, maxLength, rows = 2 } = props;
  const [value, setValue] = useControllableValue<string>(props);
  const { styles } = useThemeFactory(createTextAreaStyle);

  const renderWordLimit = () => {
    const count = (value ? `${value}` : '').length;

    if (isFunction(showWordLimit)) return showWordLimit({ currentCount: count, maxLength });

    if (maxLength) return `${count}/${maxLength}`;

    return null;
  };

  return (
    <View style={styles.container}>
      <BaseInput {...props} value={value} onChange={setValue} rows={rows} ref={ref} />
      {!!showWordLimit && <Text style={styles.wordLimit}>{renderWordLimit()}</Text>}
    </View>
  );
});

export default TextArea;
