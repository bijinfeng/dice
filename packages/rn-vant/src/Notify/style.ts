import { StyleSheet } from 'react-native';
import constants from '../utils/constants';

export const createStyle = (theme: DiceUI.Theme) => {
  return StyleSheet.create({
    danger: {
      backgroundColor: theme.notify_danger_background_color,
    },
    notify: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      paddingHorizontal: theme.notify_padding_horizontal,
      paddingVertical: theme.notify_padding_vertical,
      width: constants.screenWidth,
    },
    primary: {
      backgroundColor: theme.notify_primary_background_color,
    },
    success: {
      backgroundColor: theme.notify_success_background_color,
    },
    text: {
      color: theme.notify_text_color,
      fontSize: theme.notify_font_size,
      lineHeight: theme.notify_line_height,
    },
    warning: {
      backgroundColor: theme.notify_warning_background_color,
    },
  });
};
