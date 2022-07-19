import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { shadowNumber } from '../styles/shadow';
import type { PopoverTheme } from './type';

interface Styles {
  action: ViewStyle;
  actionBorder: ViewStyle;
  actionText: TextStyle;
  arrow: ViewStyle;
  content: ViewStyle;
  popover: ViewStyle;
  transparentOverlay: ViewStyle;
  iconWrapper: ViewStyle;
  actionTextWithIcon: TextStyle;
  disabledActionText: TextStyle;
}

export const createStyle = (theme: DiceUI.Theme, color: PopoverTheme): Styles => {
  const borderTopColor = color === 'light' ? theme.border_color : theme.gray_7;
  const backgroundColor =
    color === 'light' ? theme.popover_light_background : theme.popover_dark_background;
  const textColor =
    color === 'light' ? theme.popover_light_text_color : theme.popover_dark_text_color;
  const disabledTextColor =
    color === 'light'
      ? theme.popover_light_action_disabled_text_color
      : theme.popover_dark_action_disabled_text_color;

  return StyleSheet.create<Styles>({
    action: {
      alignItems: 'center',
      flexDirection: 'row',
      height: theme.popover_action_height,
      paddingHorizontal: theme.padding_md,
      width: theme.popover_action_width,
    },
    actionBorder: {
      borderTopColor: borderTopColor,
      borderTopWidth: StyleSheet.hairlineWidth,
    },
    actionText: {
      color: textColor,
      flex: 1,
      fontSize: theme.popover_action_font_size,
      lineHeight: theme.line_height_md,
      textAlign: 'center',
    },
    actionTextWithIcon: {
      textAlign: 'left',
    },
    arrow: {
      borderTopColor: backgroundColor,
    },
    content: {
      backgroundColor: backgroundColor,
      borderRadius: theme.popover_radius,
      overflow: 'hidden',
      padding: 0,
    },
    disabledActionText: {
      color: disabledTextColor,
    },
    iconWrapper: {
      marginRight: theme.padding_xs,
    },
    popover: shadowNumber(3),
    transparentOverlay: {
      backgroundColor: 'transparent',
    },
  });
};
