import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import type { Type, Size } from './index';

const createStyle = (theme: DiceUI.Theme, type: Type, size: Size, plain?: boolean) => {
  const buttonTypeStyleMaps: Record<Type, ViewStyle> = {
    default: {
      backgroundColor: theme.button_default_background_color,
      borderColor: theme.button_default_border_color,
      borderStyle: 'solid',
      borderWidth: theme.button_border_width,
    },
    danger: {
      backgroundColor: theme.button_danger_background_color,
      borderColor: theme.button_danger_border_color,
      borderStyle: 'solid',
      borderWidth: theme.button_border_width,
    },
    primary: {
      backgroundColor: theme.button_primary_background_color,
      borderColor: theme.button_primary_border_color,
      borderStyle: 'solid',
      borderWidth: theme.button_border_width,
    },
    success: {
      backgroundColor: theme.button_success_background_color,
      borderColor: theme.button_success_border_color,
      borderStyle: 'solid',
      borderWidth: theme.button_border_width,
    },
    warning: {
      backgroundColor: theme.button_warning_background_color,
      borderColor: theme.button_warning_border_color,
      borderStyle: 'solid',
      borderWidth: theme.button_border_width,
    },
  };

  const buttonSizeStyleMaps: Record<Size, ViewStyle> = {
    normal: {},
    small: {
      height: theme.button_small_height,
    },
    large: {
      height: theme.button_large_height,
      width: '100%',
    },
    mini: {
      height: theme.button_mini_height,
    },
  };

  const contentPadding: Record<Size, ViewStyle> = {
    normal: {
      paddingHorizontal: theme.button_normal_padding_horizontal,
    },
    small: {
      paddingHorizontal: theme.button_small_padding_horizontal,
    },
    large: {},
    mini: {
      paddingHorizontal: theme.button_mini_padding_horizontal,
    },
  };

  const textSizeStyleMaps: Record<Size, TextStyle> = {
    normal: {
      fontSize: theme.button_normal_font_size,
    },
    large: {
      fontSize: theme.button_default_font_size,
    },
    mini: {
      fontSize: theme.button_mini_font_size,
    },
    small: {
      fontSize: theme.button_small_font_size,
    },
  };

  const textTypeStyleMaps: Record<Type, TextStyle> = {
    default: {
      color: theme.button_default_color,
    },
    danger: {
      color: plain ? theme.button_danger_background_color : theme.button_danger_color,
    },
    primary: {
      color: plain ? theme.button_primary_background_color : theme.button_primary_color,
    },
    success: {
      color: plain ? theme.button_success_background_color : theme.button_success_color,
    },
    warning: {
      color: plain ? theme.button_warning_background_color : theme.button_warning_color,
    },
  };

  return StyleSheet.create({
    back: {
      backgroundColor: theme.black,
      borderColor: theme.black,
      height: '100%',
      left: 0,
      opacity: 0,
      position: 'absolute',
      right: 0,
      width: '100%',
    },
    button: {
      alignItems: 'center',
      borderRadius: theme.button_border_radius,
      flexDirection: 'row',
      height: theme.button_default_height,
      justifyContent: 'center',
      overflow: 'hidden',
      position: 'relative',
      ...buttonTypeStyleMaps[type],
      ...buttonSizeStyleMaps[size],
    },
    content: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      ...contentPadding[size],
    },
    disabled: {
      opacity: theme.button_disabled_opacity,
    },
    icon: {
      color: textTypeStyleMaps[type].color,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      fontSize: textSizeStyleMaps[size].fontSize * 1.2,
    },
    plain: {
      backgroundColor: theme.button_plain_background_color,
    },

    round: {
      borderRadius: theme.button_round_border_radius,
    },

    square: {
      borderRadius: 0,
    },

    text: {
      ...textTypeStyleMaps[type],
      ...textSizeStyleMaps[size],
    },
  });
};

export default createStyle;
