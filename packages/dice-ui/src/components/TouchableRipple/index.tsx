import React, { FC } from 'react';
import {
  BackgroundPropType,
  StyleProp,
  Platform,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
  StyleSheet,
} from 'react-native';
import color from 'color';
import { useTheme } from '../Theme';

const ANDROID_VERSION_LOLLIPOP = 21;
const ANDROID_VERSION_PIE = 28;
const SUPPORTED = Platform.OS === 'android' && Platform.Version >= ANDROID_VERSION_LOLLIPOP;

type Props = React.ComponentProps<typeof TouchableWithoutFeedback> & {
  borderless?: boolean;
  background?: BackgroundPropType;
  disabled?: boolean;
  onPress?: () => void | null;
  rippleColor?: string;
  underlayColor?: string;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

const TouchableRipple: FC<Props> = ({
  style,
  background,
  borderless = false,
  disabled: disabledProp,
  rippleColor,
  underlayColor,
  children,
  ...rest
}) => {
  const theme = useTheme();
  const disabled = disabledProp || !rest.onPress;
  const calculatedRippleColor =
    rippleColor ||
    color(theme.text_color)
      .alpha(theme.dark ? 0.32 : 0.2)
      .rgb()
      .string();

  // A workaround for ripple on Android P is to use useForeground + overflow: 'hidden'
  // https://github.com/facebook/react-native/issues/6480
  const useForeground =
    Platform.OS === 'android' && Platform.Version >= ANDROID_VERSION_PIE && borderless;

  if (SUPPORTED) {
    return (
      <TouchableNativeFeedback
        {...rest}
        disabled={disabled}
        useForeground={useForeground}
        background={
          background != null
            ? background
            : TouchableNativeFeedback.Ripple(calculatedRippleColor, borderless)
        }
      >
        <View style={[borderless && styles.overflowHidden, style]}>
          {React.Children.only(children)}
        </View>
      </TouchableNativeFeedback>
    );
  }

  return (
    <TouchableHighlight
      {...rest}
      disabled={disabled}
      style={[borderless && styles.overflowHidden, style]}
      underlayColor={
        underlayColor != null
          ? underlayColor
          : color(calculatedRippleColor).fade(0.5).rgb().string()
      }
    >
      {React.Children.only(children)}
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  overflowHidden: {
    overflow: 'hidden',
  },
});

type TouchableRippleType = typeof TouchableRipple;

interface TouchableRippleInterface extends TouchableRippleType {
  supported: boolean;
}

const LastTouchableRipple = TouchableRipple as TouchableRippleInterface;
LastTouchableRipple.supported = SUPPORTED;

export default LastTouchableRipple;
