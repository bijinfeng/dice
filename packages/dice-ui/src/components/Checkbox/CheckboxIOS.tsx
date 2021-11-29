import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import color from 'color';
import Icon, { IconNames } from '../Icon';
import TouchableRipple from '../TouchableRipple';
import { useTheme } from '../Theme';
import type { $RemoveChildren } from '../../types';

type Props = $RemoveChildren<typeof TouchableRipple> & {
  /**
   * Status of checkbox.
   */
  status: 'checked' | 'unchecked' | 'indeterminate';
  /**
   * Whether checkbox is disabled.
   */
  disabled?: boolean;
  /**
   * Function to execute on press.
   */
  onPress?: () => void;
  /**
   * Custom color for checkbox.
   */
  color?: string;
  /**
   * testID to be used on tests.
   */
  testID?: string;
};

const CheckboxIOS = ({ status, disabled, onPress, testID, ...rest }: Props) => {
  const theme = useTheme();
  const checked = status === 'checked';
  const indeterminate = status === 'indeterminate';

  const checkedColor = disabled ? theme.colors.disabled : rest.color || theme.colors.accent;

  let rippleColor;

  if (disabled) {
    rippleColor = color(theme.colors.text).alpha(0.16).rgb().string();
  } else {
    rippleColor = color(checkedColor).fade(0.32).rgb().string();
  }

  const icon: IconNames = indeterminate ? 'success' : 'success';

  return (
    <TouchableRipple
      {...rest}
      borderless
      rippleColor={rippleColor}
      onPress={onPress}
      disabled={disabled}
      // @ts-expect-error We keep old a11y props for backwards compat with old RN versions
      accessibilityTraits={disabled ? ['button', 'disabled'] : 'button'}
      accessibilityComponentType="button"
      accessibilityRole="checkbox"
      accessibilityState={{ disabled, checked }}
      accessibilityLiveRegion="polite"
      style={styles.container}
      testID={testID}
    >
      <View style={{ opacity: indeterminate || checked ? 1 : 0 }}>
        <Icon name={icon} size={24} color={checkedColor} />
      </View>
    </TouchableRipple>
  );
};

CheckboxIOS.displayName = 'Checkbox.IOS';

const styles = StyleSheet.create({
  container: {
    borderRadius: 18,
    padding: 6,
  },
});

export default CheckboxIOS;
