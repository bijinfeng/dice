import * as React from 'react';
import { Platform } from 'react-native';
import CheckboxIOS from './CheckboxIOS';
import CheckboxAndroid from './CheckboxAndroid';

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
   * testID to be used on tests.
   */
  testID?: string;
};

const Checkbox = (props: Props) =>
  Platform.OS === 'ios' ? <CheckboxIOS {...props} /> : <CheckboxAndroid {...props} />;

export default Checkbox;
