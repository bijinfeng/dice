import React from 'react';
import { View, StyleProp, ViewStyle, Text, TouchableWithoutFeedback } from 'react-native';
import Icon from '@rn-vant/icons';
import { GroupContext } from './context';
import createStyle from './index.style';
import { useThemeFactory } from '../Theme';
import { useControllableValue } from '../hooks';
import { isFunction } from '../utils/typeof';

export type RadioIconRenderParams = {
  checked: boolean;
  disabled?: boolean;
};

export interface RadioProps {
  /**
   * 失效状态
   */
  disabled?: boolean;
  /**
   * 指定当前是否选中
   */
  checked?: boolean;
  value?: any;
  /**
   * 初始是否选中
   */
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  /**
   * 形状
   * @default round
   */
  shape?: 'round' | 'square';
  /**
   * 选中状态颜色
   */
  checkedColor?: string;
  /**
   * 图标大小
   */
  iconSie?: number;
  /**
   * 自定义图标
   */
  icon?: (params: RadioIconRenderParams) => React.ReactNode | React.ReactNode;
}

const Radio = React.forwardRef<View, RadioProps>((props, ref) => {
  const {
    style,
    children,
    shape = 'round',
    checkedColor,
    iconSie = 20,
    icon,
    ...restProps
  } = props;
  const [value, onChange] = useControllableValue(props, {
    valuePropName: 'checked',
    defaultValuePropName: 'defaultChecked',
  });
  const radioGroup = React.useContext(GroupContext);
  const { styles, theme } = useThemeFactory(createStyle);
  const disabledIconColor = theme.gray_5;

  // success 图标大小
  const successIconSize = 0.8 * iconSie;

  // radioGroup 存在时，已 group 的为准，否则以 props 为准
  const checked = radioGroup ? radioGroup.value === restProps.value : value;
  const disabled = radioGroup ? restProps.disabled || radioGroup.disabled : restProps.disabled;

  const handleCheckChange = () => {
    onChange(!checked);
    if (radioGroup && radioGroup.toggleOption) {
      radioGroup.toggleOption({ label: children, value: restProps.value });
    }
  };

  const renderIcon = () => {
    if (icon) {
      return isFunction(icon) ? icon({ checked, disabled }) : icon;
    }

    return (
      <View
        style={[
          styles.icon,
          {
            width: iconSie,
            height: iconSie,
          },
          checked && styles.iconChecked,
          shape === 'round' && { borderRadius: iconSie },
          checked &&
            checkedColor && {
              backgroundColor: checkedColor,
              borderColor: checkedColor,
            },
          disabled && styles.iconDisabled,
        ]}
      >
        {checked && (
          <Icon
            name="success"
            color={disabled ? disabledIconColor : '#fff'}
            size={successIconSize}
          />
        )}
      </View>
    );
  };

  return (
    <TouchableWithoutFeedback disabled={disabled} onPress={handleCheckChange}>
      <View style={[styles.radio, style]} ref={ref}>
        {renderIcon()}
        <View style={styles.labelContainer}>
          {typeof children === 'string' ? (
            <Text style={[styles.label, disabled && styles.labelDisabled, { lineHeight: iconSie }]}>
              {children}
            </Text>
          ) : (
            children
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
});

Radio.displayName = 'Radio';

export default Radio;
