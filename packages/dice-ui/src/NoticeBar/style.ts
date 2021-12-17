import { StyleSheet } from 'react-native';

export const createStyle = (theme: DiceUI.Theme) => {
  return StyleSheet.create({
    content: {
      position: 'absolute',
    },

    leftIcon: {
      fontSize: theme.notice_bar_font_size,
      minWidth: theme.notice_bar_icon_min_width,
    },

    noWrapable: {
      paddingHorizontal: theme.notice_bar_wrapable_padding_horizontal,
      paddingVertical: theme.notice_bar_wrapable_padding_vertical,
    },

    rightIcon: {
      fontSize: theme.notice_bar_font_size,
      justifyContent: 'flex-end',
      minWidth: theme.notice_bar_icon_min_width,
    },

    wrap: {
      alignItems: 'center',
      flex: 1,
      height: '100%',
      overflow: 'hidden',
      position: 'relative',
    },

    wrapable: {
      height: theme.notice_bar_height,
      paddingHorizontal: theme.notice_bar_padding_horizontal,
      paddingVertical: theme.notice_bar_padding_vertical,
    },

    wrapper: {
      alignItems: 'center',
      backgroundColor: theme.notice_bar_background_color,
      flex: 1,
      flexDirection: 'row',
      position: 'relative',
    },
  });
};
