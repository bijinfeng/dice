import React from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import Checkbox from './Checkbox';
import { useControllableValue } from '../hooks';

export type CheckboxValueType = string | number | boolean;

export interface CheckboxOptionType {
  label: React.ReactNode;
  value: CheckboxValueType;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  onChange?: () => void;
}

export interface CheckboxGroupContext {
  toggleOption?: (option: CheckboxOptionType) => void;
  value?: any;
  disabled?: boolean;
  registerValue: (val: string) => void;
  cancelValue: (val: string) => void;
}

export const GroupContext = React.createContext<CheckboxGroupContext | null>(null);

export interface CheckboxGroupProps {
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
  defaultValue?: Array<CheckboxValueType>;
  /**
   * 指定选中的选项
   */
  value?: Array<CheckboxValueType>;
  /**
   * 变化时回调函数
   */
  onChange?: (checkedValue: Array<CheckboxValueType>) => void;
  /**
   * 指定可选项
   */
  options?: Array<CheckboxOptionType | string>;
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

const CheckboxGroup = React.forwardRef<View, CheckboxGroupProps>((props, ref) => {
  const { style, options = [], direction = 'vertical', ...restProps } = props;
  const [value = [], onChange] = useControllableValue<Array<CheckboxValueType>>(props);
  let { children } = props;
  const [registeredValues, setRegisteredValues] = React.useState<CheckboxValueType[]>([]);

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

  const cancelValue = (val: string) => {
    setRegisteredValues(prevValues => prevValues.filter(v => v !== val));
  };

  const registerValue = (val: string) => {
    setRegisteredValues(prevValues => [...prevValues, val]);
  };

  // 切换复选框的状态
  const toggleOption = (option: CheckboxOptionType) => {
    const optionIndex = value.indexOf(option.value);
    const newValue = [...value];
    if (optionIndex === -1) {
      newValue.push(option.value);
    } else {
      newValue.splice(optionIndex, 1);
    }
    const opts = getOptions();
    onChange?.(
      newValue
        .filter(val => registeredValues.indexOf(val) !== -1)
        .sort((a, b) => {
          const indexA = opts.findIndex(opt => opt.value === a);
          const indexB = opts.findIndex(opt => opt.value === b);
          return indexA - indexB;
        })
    );
  };

  if (options && options.length > 0) {
    children = getOptions().map(option => (
      <Checkbox
        key={option.value.toString()}
        disabled={'disabled' in option ? option.disabled : restProps.disabled}
        value={option.value}
        checked={value.indexOf(option.value) !== -1}
        onChange={option.onChange}
        style={option.style}
      >
        {option.label}
      </Checkbox>
    ));
  }

  return (
    <View ref={ref} style={[{ flexDirection: direction === 'vertical' ? 'column' : 'row' }, style]}>
      <GroupContext.Provider
        value={{
          toggleOption,
          value,
          disabled: restProps.disabled,
          registerValue,
          cancelValue,
        }}
      >
        {children}
      </GroupContext.Provider>
    </View>
  );
});

CheckboxGroup.displayName = 'Checkbox.Group';

export default React.memo(CheckboxGroup);
