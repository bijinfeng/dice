import React, { FC } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import type { $Omit } from '../../types';
import AppbarAction from './AppbarAction';

type AppbarActionProps = React.ComponentPropsWithoutRef<typeof AppbarAction>;

type Props = $Omit<AppbarActionProps, 'icon'> & {
  /**
   *  Custom color for back icon.
   */
  color?: string;
  /**
   * Optional icon size.
   */
  size?: number;
  /**
   * Whether the button is disabled. A disabled button is greyed out and `onPress` is not called on touch.
   */
  disabled?: boolean;
  /**
   * Accessibility label for the button. This is read by the screen reader when the user taps the button.
   */
  accessibilityLabel?: string;
  /**
   * Function to execute on press.
   */
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

const AppbarBackAction: FC<Props> = ({ accessibilityLabel = 'Back', ...rest }) => (
  <AppbarAction accessibilityLabel={accessibilityLabel} {...rest} icon="arrow-left" />
);

AppbarBackAction.displayName = 'Appbar.BackAction';

export default AppbarBackAction;
