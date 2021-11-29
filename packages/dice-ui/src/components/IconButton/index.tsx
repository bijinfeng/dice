import React, { FC } from 'react';

import {
  View,
  Text,
  ViewStyle,
  StyleSheet,
  StyleProp,
  GestureResponderEvent,
  TouchableWithoutFeedback,
} from 'react-native';
import color from 'color';

import TouchableRipple from '../TouchableRipple';
import Icon, { IconNames } from '../Icon';
import CrossFadeIcon from '../CrossFadeIcon';
import { withTheme } from '../Theme';

import type { $RemoveChildren } from '../../types';

type Props = $RemoveChildren<typeof TouchableRipple> & {
  /**
   * Icon to display.
   */
  icon: IconNames;
  text?: string;
  /**
   * Color of the icon.
   */
  color?: string;
  /**
   * Size of the icon.
   */
  size?: number;
  /**
   * Whether the button is disabled. A disabled button is greyed out and `onPress` is not called on touch.
   */
  disabled?: boolean;
  /**
   * Whether an icon change is animated.
   */
  animated?: boolean;
  /**
   * Accessibility label for the button. This is read by the screen reader when the user taps the button.
   */
  accessibilityLabel?: string;
  /**
   * Function to execute on press.
   */
  onPress?: (e: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
  ref?: React.RefObject<TouchableWithoutFeedback>;
  /**
   * @optional
   */
  theme: DiceUI.Theme;
};

const IconButton: FC<Props> = ({
  icon,
  text,
  color: customColor,
  size = 24,
  accessibilityLabel,
  disabled,
  onPress,
  animated = false,
  theme,
  style,
  ...rest
}) => {
  const iconColor = typeof customColor !== 'undefined' ? customColor : theme.colors.text;
  const rippleColor = color(iconColor).alpha(0.32).rgb().string();
  const IconComponent = animated ? CrossFadeIcon : Icon;
  const buttonSize = size * 1.5;

  const onlyButtonStyle = {
    width: buttonSize,
    height: buttonSize,
    borderRadius: buttonSize / 2,
  };

  return (
    <TouchableRipple
      borderless
      onPress={onPress}
      rippleColor={rippleColor}
      style={[styles.container, !text && onlyButtonStyle, disabled && styles.disabled, style]}
      accessibilityLabel={accessibilityLabel}
      // @ts-expect-error We keep old a11y props for backwards compat with old RN versions
      accessibilityTraits={disabled ? ['button', 'disabled'] : 'button'}
      accessibilityComponentType="button"
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      disabled={disabled}
      hitSlop={
        TouchableRipple.supported
          ? { top: 10, left: 10, bottom: 10, right: 10 }
          : { top: 6, left: 6, bottom: 6, right: 6 }
      }
      {...rest}
    >
      <View style={styles.content}>
        <IconComponent color={iconColor} name={icon} size={size} />
        {text && <Text style={[styles.text, { color: customColor }]}>{text}</Text>}
      </View>
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 6,
    overflow: 'hidden',
  },
  content: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  disabled: {
    opacity: 0.32,
  },
  text: {
    fontSize: 12,
    marginTop: 6,
  },
});

export default withTheme(IconButton);
