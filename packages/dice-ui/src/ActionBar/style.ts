import { StyleSheet } from 'react-native';
import type { ViewStyle, TextStyle } from 'react-native';
import Constants from '../utils/constants';

type IconStyles = {
  container: ViewStyle;
  text: TextStyle;
  icon: ViewStyle;
};

export const createIconStyle = (theme: DiceUI.Theme): IconStyles => {
  return StyleSheet.create<IconStyles>({
    container: {
      alignItems: 'center',
      height: theme.action_bar_icon_height,
      justifyContent: 'center',
      minWidth: theme.action_bar_icon_width,
    },
    icon: {
      color: theme.action_bar_icon_color,
      fontSize: theme.action_bar_icon_font_size,
      marginBottom: theme.padding_base,
    },
    text: {
      color: theme.action_bar_icon_color,
      fontSize: theme.action_bar_icon_font_size,
      lineHeight: theme.action_bar_icon_font_size,
      textAlign: 'center',
    },
  });
};

type ButtonStyles = {
  button: ViewStyle;
  first: ViewStyle;
  last: ViewStyle;
  warning: ViewStyle;
  danger: ViewStyle;
  text: TextStyle;
};

export const createButtonStyles = (theme: DiceUI.Theme): ButtonStyles => {
  const fontSize = Constants.screenWidth <= 321 ? theme.font_size_md : 13;

  return StyleSheet.create<ButtonStyles>({
    button: {
      flex: 1,
      height: theme.action_bar_button_height,
    },
    danger: {
      backgroundColor: theme.action_bar_button_danger_color,
    },
    first: {
      borderBottomLeftRadius: theme.border_radius_max,
      borderTopLeftRadius: theme.border_radius_max,
      marginLeft: 5,
    },
    last: {
      borderBottomRightRadius: theme.border_radius_max,
      borderTopRightRadius: theme.border_radius_max,
      marginRight: 5,
    },
    text: {
      fontSize,
      fontWeight: theme.font_weight_bold,
    },
    warning: {
      backgroundColor: theme.action_bar_button_warning_color,
    },
  });
};

type BarStyles = {
  bar: ViewStyle;
};

export const createBarStyles = (theme: DiceUI.Theme): BarStyles => {
  return StyleSheet.create<BarStyles>({
    bar: {
      alignItems: 'center',
      backgroundColor: theme.action_bar_background,
      flexDirection: 'row',
      height: theme.action_bar_height,
    },
  });
};
