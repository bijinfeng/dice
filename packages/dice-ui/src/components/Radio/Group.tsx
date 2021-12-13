import React from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import Radio from './Radio';
import { useControllableValue } from '../../hooks';

export type RadioValueType = string | number | boolean;

export interface RadioOptionType {
  label: React.ReactNode;
  value: RadioValueType;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  onChange?: () => void;
}

export interface RadioGroupContext {
  toggleOption?: (option: RadioOptionType) => void;
  value?: any;
  disabled?: boolean;
}

export const GroupContext = React.createContext<RadioGroupContext | null>(null);

export interface RadioGroupProps {
  /**
   * group 样式
   */
  style?: StyleProp<ViewStyle>;
  /**
   * 整组失效
   */
  disabled?: boolean;
  /**
   * 默认选中的选项
   */
  defaultValue?: RadioValueType;
  /**
   * 指定选中的选项
   */
  value?: RadioValueType;
  /**
   * 变化时回调函数
   */
  onChange?: (checkedValue: RadioValueType) => void;
  /**
   * 指定可选项
   */
  options?: Array<RadioOptionType | string>;
  /**
   * 子元素
   */
  children?: React.ReactNode;
  /**
   * 排列方向
   * @default vertical
   */
  direction?: 'vertical' | 'horizontal';
}

const RadioGroup = React.forwardRef<View, RadioGroupProps>((props, ref) => {
  const { style, options = [], direction = 'vertical', ...restProps } = props;
  const [value, onChange] = useControllableValue<RadioValueType>(props);
  let { children } = props;

  const getOptions = () =>
    options.map(option => {
      if (typeof option === 'string') {
        return {
          label: option,
          value: option,
        };
      }
      return option;
    });

  // 切换复选框的状态
  const toggleOption = (option: RadioOptionType) => {
    onChange(option.value);
  };

  if (options && options.length > 0) {
    children = getOptions().map(option => (
      <Radio
        key={option.value.toString()}
        disabled={'disabled' in option ? option.disabled : restProps.disabled}
        value={option.value}
        checked={value === option.value}
        onChange={option.onChange}
        style={option.style}
      >
        {option.label}
      </Radio>
    ));
  }

  return (
    <View ref={ref} style={[{ flexDirection: direction === 'vertical' ? 'column' : 'row' }, style]}>
      <GroupContext.Provider
        value={{
          toggleOption,
          value,
          disabled: restProps.disabled,
        }}
      >
        {children}
      </GroupContext.Provider>
    </View>
  );
});

RadioGroup.displayName = 'Radio.Group';

export default React.memo(RadioGroup);
