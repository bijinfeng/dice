import * as React from 'react';

import { StyleProp, StyleSheet, TextStyle, View, ViewStyle } from 'react-native';
import Checkbox from './Checkbox';
import CheckboxAndroid from './CheckboxAndroid';
import CheckboxIOS from './CheckboxIOS';
import Text from '../Text';
import TouchableRipple from '../TouchableRipple';
import { useTheme } from '../Theme';

type Props = {
  /**
   * Status of checkbox.
   */
  status: 'checked' | 'unchecked' | 'indeterminate';
  /**
   * Whether checkbox is disabled.
   */
  disabled?: boolean;
  /**
   * Label to be displayed on the item.
   */
  label: string;
  /**
   * Function to execute on press.
   */
  onPress?: () => void;
  /**
   * Custom color for unchecked checkbox.
   */
  uncheckedColor?: string;
  /**
   * Custom color for checkbox.
   */
  color?: string;
  /**
   * Additional styles for container View.
   */
  style?: StyleProp<ViewStyle>;
  /**
   * Style that is passed to Label element.
   */
  labelStyle?: StyleProp<TextStyle>;
  /**
   * testID to be used on tests.
   */
  testID?: string;
  /**
   * Checkbox control position.
   */
  position?: 'leading' | 'trailing';
  /**
   * Whether `<Checkbox.Android />` or `<Checkbox.IOS />` should be used.
   * Left undefined `<Checkbox />` will be used.
   */
  mode?: 'android' | 'ios';
};

const CheckboxItem = ({
  style,
  status,
  label,
  onPress,
  labelStyle,
  testID,
  mode,
  position = 'trailing',
  ...props
}: Props) => {
  const theme = useTheme();
  const checkboxProps = { ...props, status, theme };
  const isLeading = position === 'leading';
  let checkbox;

  if (mode === 'android') {
    checkbox = <CheckboxAndroid {...checkboxProps} />;
  } else if (mode === 'ios') {
    checkbox = <CheckboxIOS {...checkboxProps} />;
  } else {
    checkbox = <Checkbox {...checkboxProps} />;
  }

  return (
    <TouchableRipple onPress={onPress} testID={testID}>
      <View style={[styles.container, style]} pointerEvents="none">
        {isLeading && checkbox}
        <Text
          style={[
            styles.label,
            {
              color: theme.colors.text,
              textAlign: isLeading ? 'right' : 'left',
            },
            labelStyle,
          ]}
        >
          {label}
        </Text>
        {!isLeading && checkbox}
      </View>
    </TouchableRipple>
  );
};

CheckboxItem.displayName = 'Checkbox.Item';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  label: {
    flexGrow: 1,
    flexShrink: 1,
    fontSize: 16,
  },
});

export default CheckboxItem;
