import { StyleSheet } from "react-native";

export const createStyle = (theme: DiceUI.Theme) => {
  return StyleSheet.create({
    content: {
      color: theme.notice_bar_text_color,
      fontSize: theme.notice_bar_font_size,
    },

    leftIcon: {
      minWidth: theme.notice_bar_icon_min_width,
    },

    noWrapable: {
      height: theme.notice_bar_height,
      paddingHorizontal: theme.notice_bar_padding_horizontal,
      paddingVertical: theme.notice_bar_padding_vertical,
    },

    rightIcon: {
      justifyContent: "flex-end",
      minWidth: theme.notice_bar_icon_min_width,
    },

    wrap: {
      flex: 1,
      overflow: "hidden",
    },

    wrapable: {
      paddingHorizontal: theme.notice_bar_wrapable_padding_horizontal,
      paddingVertical: theme.notice_bar_wrapable_padding_vertical,
    },

    wrapper: {
      alignItems: "center",
      backgroundColor: theme.notice_bar_background_color,
      flexDirection: "row",
      overflow: "hidden",
    },
  });
};
