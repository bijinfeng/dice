import React, { FC, memo } from 'react';
import {
  NativeModules,
  Platform,
  StyleProp,
  Switch as NativeSwitch,
  ViewStyle,
} from 'react-native';
import setColor from 'color';
import { grey400, grey800, grey50, white, black } from '../../styles/colors';
import { useTheme } from '../Theme';

const version = NativeModules.PlatformConstants
  ? NativeModules.PlatformConstants.reactNativeVersion
  : undefined;

type NativeSwitchProps = React.ComponentPropsWithRef<typeof NativeSwitch>;

interface Props {
  /**
   * 是否为禁用状态
   * @default false
   */
  disabled?: boolean;
  value?: boolean;
  color?: string;
  onValueChange?: NativeSwitchProps['onValueChange'];
  style?: StyleProp<ViewStyle>;
}

const Switch: FC<Props> = memo(({ value, disabled, onValueChange, color, style }) => {
  const theme = useTheme();
  const checkedColor = color || theme.colors.accent;

  const onTintColor =
    Platform.OS === 'ios'
      ? checkedColor
      : disabled
      ? theme.dark
        ? setColor(white).alpha(0.1).rgb().string()
        : setColor(black).alpha(0.12).rgb().string()
      : setColor(checkedColor).alpha(0.5).rgb().string();

  const thumbTintColor =
    Platform.OS === 'ios'
      ? undefined
      : disabled
      ? theme.dark
        ? grey800
        : grey400
      : value
      ? checkedColor
      : theme.dark
      ? grey400
      : grey50;

  const props =
    version && version.major === 0 && version.minor <= 56
      ? {
          onTintColor,
          thumbTintColor,
        }
      : Platform.OS === 'web'
      ? {
          activeTrackColor: onTintColor,
          thumbColor: thumbTintColor,
          activeThumbColor: checkedColor,
        }
      : {
          thumbColor: thumbTintColor,
          trackColor: {
            true: onTintColor,
            false: '',
          },
        };

  return (
    <NativeSwitch
      value={value}
      disabled={disabled}
      onValueChange={disabled ? undefined : onValueChange}
      style={style}
      {...props}
    />
  );
});

export default Switch;
