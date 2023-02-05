import React from "react";
import { Pressable, Text, View } from "react-native";
import { useControllableValue } from "../hooks";
import Space from "../Space";
import { useThemeFactory } from "../Theme";
import { CheckMark } from "./CheckMark";
import { createStyle } from "./style";
import type { SelectorOption, SelectorProps, SelectorValue } from "./type";

// https://mobile.ant.design/zh/components/selector

const defaultProps = {
  multiple: false,
  defaultValue: [],
  showCheckMark: true,
};

const Selector = <V extends SelectorValue>(p: SelectorProps<V>) => {
  const props = { ...defaultProps, ...p };
  const [value, setValue] = useControllableValue<V[]>(props);
  const { styles } = useThemeFactory(createStyle);

  const handleChange = (val: V[]) => {
    const extend = {
      get items() {
        return props.options.filter((option) => val.includes(option.value));
      },
    };
    setValue(val, extend);
  };

  const handlePress = (option: SelectorOption<V>, active: boolean) => {
    if (props.multiple) {
      const val = active
        ? value.filter((v) => v !== option.value)
        : [...value, option.value];
      handleChange(val);
    } else {
      const val = active ? [] : [option.value];
      handleChange(val);
    }
  };

  const items = props.options.map((option) => {
    const active = (value || []).includes(option.value);
    const disabled = option.disabled || props.disabled;

    return (
      <Pressable
        style={[
          styles.item,
          disabled && styles.itemDisabled,
          active && styles.itemActive,
        ]}
        key={option.value}
        disabled={disabled}
        onPress={() => handlePress(option, active)}
      >
        <Text style={[styles.label, active && styles.labelActie]}>
          {option.label}
        </Text>
        {option.description && (
          <Text style={styles.description}>{option.description}</Text>
        )}
        {active && props.showCheckMark && (
          <View style={styles.markWrapper}>
            <CheckMark style={styles.mark} width={8} height={6} />
          </View>
        )}
      </Pressable>
    );
  });

  return (
    <View style={props.style}>
      <Space>{items}</Space>
    </View>
  );
};

export default Selector;
