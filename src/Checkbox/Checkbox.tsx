import React from "react";
import {
  StyleProp,
  Text,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from "react-native";
import { useControllableValue } from "../hooks";
import Icon from "../Icon";
import { useThemeFactory } from "../Theme";
import { isFunction } from "../utils/typeof";
import { GroupContext } from "./content";
import createStyle from "./index.style";

export type CheckboxIconRenderParams = {
  checked: boolean;
  disabled?: boolean;
};

export interface CheckboxProps {
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
  shape?: "round" | "square";
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
  icon?: (
    params: CheckboxIconRenderParams
  ) => React.ReactNode | React.ReactNode;
}

const Checkbox = React.forwardRef<View, CheckboxProps>((props, ref) => {
  const {
    style,
    children,
    shape = "round",
    checkedColor,
    iconSie = 20,
    icon,
    ...restProps
  } = props;
  const [value, onChange] = useControllableValue(props, {
    valuePropName: "checked",
    defaultValuePropName: "defaultChecked",
  });
  const checkboxGroup = React.useContext(GroupContext);
  const prevValue = React.useRef(restProps.value);
  const { styles, theme } = useThemeFactory(createStyle);
  const disabledIconColor = theme.gray_5;

  // success 图标大小
  const successIconSize = 0.8 * iconSie;

  React.useEffect(() => {
    checkboxGroup?.registerValue(restProps.value);
  }, []);

  React.useEffect(() => {
    if (restProps.value !== prevValue.current) {
      checkboxGroup?.cancelValue(prevValue.current);
      checkboxGroup?.registerValue(restProps.value);
    }
    return () => checkboxGroup?.cancelValue(restProps.value);
  }, [restProps.value]);

  // checkboxGroup 存在时，已 group 的为准，否则以 props 为准
  const checked = checkboxGroup
    ? checkboxGroup.value.indexOf(restProps.value) !== -1
    : value;
  const disabled = checkboxGroup
    ? restProps.disabled || checkboxGroup.disabled
    : restProps.disabled;

  const handleCheckChange = () => {
    onChange(!checked);
    if (checkboxGroup && checkboxGroup.toggleOption) {
      checkboxGroup.toggleOption({ label: children, value: restProps.value });
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
          shape === "round" && { borderRadius: iconSie },
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
            color={disabled ? disabledIconColor : "#fff"}
            size={successIconSize}
          />
        )}
      </View>
    );
  };

  return (
    <TouchableWithoutFeedback disabled={disabled} onPress={handleCheckChange}>
      <View style={[styles.checkbox, style]} ref={ref}>
        {renderIcon()}
        <View style={styles.labelContainer}>
          {typeof children === "string" ? (
            <Text
              style={[
                styles.label,
                disabled && styles.labelDisabled,
                { lineHeight: iconSie },
              ]}
            >
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

Checkbox.displayName = "Checkbox";

export default Checkbox;
