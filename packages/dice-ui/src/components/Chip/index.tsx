import React, { FC } from 'react';
import {
  AccessibilityState,
  Animated,
  Platform,
  StyleProp,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
  TextStyle,
} from 'react-native';
import color from 'color';
import type { IconNames } from '../Icon';
import Icon from '../Icon';
import Surface from '../Surface';
import Text from '../Text';
import TouchableRipple from '../TouchableRipple';
import { useTheme } from '../Theme';
import { black, white } from '../../styles/colors';
import type { EllipsizeProp } from '../../types';
import styles from './index.style';

type Props = React.ComponentProps<typeof Surface> & {
  /**
   * Mode of the chip.
   * - `flat` - flat chip without outline.
   * - `outlined` - chip with an outline.
   */
  mode?: 'flat' | 'outlined';
  /**
   * Text content of the `Chip`.
   */
  children: React.ReactNode;
  /**
   * Icon to display for the `Chip`. Both icon and avatar cannot be specified.
   */
  icon?: IconNames;
  /**
   * Avatar to display for the `Chip`. Both icon and avatar cannot be specified.
   */
  avatar?: React.ReactNode;
  /**
   * Whether chip is selected.
   */
  selected?: boolean;
  /**
   * Whether to style the chip color as selected.
   */
  selectedColor?: string;
  /**
   * Whether the chip is disabled. A disabled chip is greyed out and `onPress` is not called on touch.
   */
  disabled?: boolean;
  /**
   * Accessibility label for the chip. This is read by the screen reader when the user taps the chip.
   */
  accessibilityLabel?: string;
  /**
   * Accessibility label for the close icon. This is read by the screen reader when the user taps the close icon.
   */
  closeIconAccessibilityLabel?: string;
  /**
   * Function to execute on press.
   */
  onPress?: () => void;
  /**
   * Function to execute on long press.
   */
  onLongPress?: () => void;
  /**
   * Function to execute on close button press. The close button appears only when this prop is specified.
   */
  onClose?: () => void;
  /**
   * Style of chip's text
   */
  textStyle?: TextStyle;
  style?: StyleProp<ViewStyle>;
  /**
   * Pass down testID from chip props to touchable for Detox tests.
   */
  testID?: string;
  /**
   * Ellipsize Mode for the children text
   */
  ellipsizeMode?: EllipsizeProp;
};

const Chip: FC<Props> = ({
  mode = 'flat',
  children,
  icon,
  avatar,
  selected = false,
  disabled = false,
  accessibilityLabel,
  closeIconAccessibilityLabel = 'Close',
  onPress,
  onLongPress,
  onClose,
  textStyle,
  style,
  testID,
  selectedColor,
  ellipsizeMode,
  ...rest
}) => {
  const theme = useTheme();
  const { current: elevation } = React.useRef<Animated.Value>(new Animated.Value(0));

  const handlePressIn = () => {
    const { scale } = theme.animation;
    Animated.timing(elevation, {
      toValue: 4,
      duration: 200 * scale,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    const { scale } = theme.animation;
    Animated.timing(elevation, {
      toValue: 0,
      duration: 150 * scale,
      useNativeDriver: true,
    }).start();
  };

  const { dark, colors } = theme;
  const defaultBackgroundColor =
    mode === 'outlined' ? colors.surface : dark ? '#383838' : '#ebebeb';

  const { backgroundColor = defaultBackgroundColor, borderRadius = 16 } = (StyleSheet.flatten(
    style
  ) || {}) as ViewStyle;

  const borderColor =
    mode === 'outlined'
      ? color(selectedColor !== undefined ? selectedColor : color(dark ? white : black))
          .alpha(0.29)
          .rgb()
          .string()
      : backgroundColor;
  const textColor = disabled
    ? colors.disabled
    : color(selectedColor !== undefined ? selectedColor : colors.text)
        .alpha(0.87)
        .rgb()
        .string();
  const iconColor = disabled
    ? colors.disabled
    : color(selectedColor !== undefined ? selectedColor : colors.text)
        .alpha(0.54)
        .rgb()
        .string();

  const backgroundColorString =
    typeof backgroundColor === 'string' ? backgroundColor : defaultBackgroundColor;
  const selectedBackgroundColor = (
    dark
      ? color(backgroundColorString).lighten(mode === 'outlined' ? 0.2 : 0.4)
      : color(backgroundColorString).darken(mode === 'outlined' ? 0.08 : 0.2)
  )
    .rgb()
    .string();

  const underlayColor = selectedColor
    ? color(selectedColor).fade(0.5).rgb().string()
    : selectedBackgroundColor;

  const accessibilityTraits = ['button'];
  const accessibilityState: AccessibilityState = {
    selected,
    disabled,
  };

  if (selected) {
    accessibilityTraits.push('selected');
  }

  if (disabled) {
    accessibilityTraits.push('disabled');
  }

  return (
    <Surface
      style={[
        styles.container,
        {
          elevation: Platform.OS === 'android' ? elevation : 0,
          backgroundColor: selected ? selectedBackgroundColor : backgroundColor,
          borderColor,
          borderRadius,
        },
        style,
      ]}
      {...rest}
    >
      <TouchableRipple
        borderless
        delayPressIn={0}
        style={[{ borderRadius }, styles.touchable]}
        onPress={onPress}
        onLongPress={onLongPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        underlayColor={underlayColor}
        disabled={disabled}
        accessibilityLabel={accessibilityLabel}
        // @ts-expect-error We keep old a11y props for backwards compat with old RN versions
        accessibilityTraits={accessibilityTraits}
        accessibilityComponentType="button"
        accessibilityRole="button"
        accessibilityState={accessibilityState}
        testID={testID}
      >
        <View style={[styles.content, { paddingRight: onClose ? 32 : 4 }]}>
          {avatar && !icon ? (
            <View style={[styles.avatarWrapper, disabled && { opacity: 0.26 }]}>
              {React.isValidElement(avatar)
                ? React.cloneElement(avatar, {
                    style: [styles.avatar, avatar.props.style],
                  })
                : avatar}
            </View>
          ) : null}
          {icon || selected ? (
            <View style={[styles.icon, avatar ? [styles.avatar, styles.avatarSelected] : null]}>
              {icon ? (
                <Icon name={icon} color={avatar ? white : iconColor} size={18} />
              ) : (
                <Icon name="success" color={avatar ? white : iconColor} size={18} />
              )}
            </View>
          ) : null}
          <Text
            selectable={false}
            numberOfLines={1}
            style={[
              styles.text,
              {
                ...theme.fonts.regular,
                color: textColor,
                marginRight: onClose ? 0 : 8,
                marginLeft: avatar || icon || selected ? 4 : 8,
              },
              textStyle,
            ]}
            ellipsizeMode={ellipsizeMode}
          >
            {children}
          </Text>
        </View>
      </TouchableRipple>
      {onClose ? (
        <View style={styles.closeButtonStyle}>
          <TouchableWithoutFeedback
            onPress={onClose}
            // @ts-expect-error We keep old a11y props for backwards compat with old RN versions
            accessibilityTraits="button"
            accessibilityComponentType="button"
            accessibilityRole="button"
            accessibilityLabel={closeIconAccessibilityLabel}
          >
            <View style={[styles.icon, styles.closeIcon]}>
              <Icon name="clear" size={16} color={iconColor} />
            </View>
          </TouchableWithoutFeedback>
        </View>
      ) : null}
    </Surface>
  );
};

export default Chip;
