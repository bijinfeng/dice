import React, { FC } from 'react';
import color from 'color';
import type { StyleProp, ViewStyle, TouchableWithoutFeedback } from 'react-native';
import { black } from '../../styles/colors';
import IconButton from '../IconButton';
import type { IconNames } from '../Icon';

type Props = React.ComponentPropsWithoutRef<typeof IconButton> & {
  /**
   *  Custom color for action icon.
   */
  color?: string;
  /**
   * Name of the icon to show.
   */
  icon: IconNames;
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
  ref?: React.RefObject<TouchableWithoutFeedback>;
};

const AppbarAction: FC<Props> = ({
  size = 20,
  color: iconColor = color(black).alpha(0.54).rgb().string(),
  icon,
  disabled,
  onPress,
  accessibilityLabel,
  ...rest
}) => (
  <IconButton
    size={size}
    onPress={onPress}
    color={iconColor}
    icon={icon}
    disabled={disabled}
    accessibilityLabel={accessibilityLabel}
    animated
    {...rest}
  />
);

AppbarAction.displayName = 'Appbar.Action';

export default AppbarAction;
