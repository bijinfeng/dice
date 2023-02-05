import isFunction from "lodash-es/isFunction";
import React, { forwardRef } from "react";
import { Text, View } from "react-native";
import { useControllableValue } from "../hooks";
import { useThemeFactory } from "../Theme";
import BaseInput from "./BaseInput";
import { createTextAreaStyle } from "./style";
import type { InputInstance, TextAreaProps } from "./type";

const TextArea = forwardRef<InputInstance, TextAreaProps>((props, ref) => {
  const { showWordLimit = false, maxLength, rows = 2 } = props;
  const [value, setValue] = useControllableValue<string>(props);
  const { styles } = useThemeFactory(createTextAreaStyle);

  const renderWordLimit = () => {
    const count = (value ? `${value}` : "").length;

    if (isFunction(showWordLimit))
      return showWordLimit({ currentCount: count, maxLength });

    if (maxLength) return `${count}/${maxLength}`;

    return null;
  };

  return (
    <View style={styles.container}>
      <BaseInput
        {...props}
        value={value}
        onChange={setValue}
        rows={rows}
        ref={ref}
      />
      {!!showWordLimit && (
        <Text style={styles.wordLimit}>{renderWordLimit()}</Text>
      )}
    </View>
  );
});

export default TextArea;
