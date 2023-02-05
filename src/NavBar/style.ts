import { StyleSheet } from "react-native";

export const createStyle = (theme: DiceUI.Theme) => {
  return StyleSheet.create({
    leftArrow: {
      color: theme.nav_bar_icon_color,
      height: theme.nav_bar_height,
      justifyContent: "center",
      marginRight: theme.padding_base,
      minWidth: theme.nav_bar_arrow_size,
    },
    leftText: {
      color: theme.nav_bar_icon_color,
      fontSize: 14,
    },
    leftWrapper: {
      alignItems: "center",
      bottom: 0,
      flexDirection: "row",
      left: 0,
      marginHorizontal: theme.padding_md,
      position: "absolute",
      top: 0,
      zIndex: 3,
    },
    rightText: {
      color: theme.nav_bar_icon_color,
      fontSize: 14,
    },
    rightWrapper: {
      alignItems: "center",
      bottom: 0,
      flexDirection: "row",
      marginHorizontal: theme.padding_md,
      position: "absolute",
      right: 0,
      top: 0,
      zIndex: 3,
    },
    titleText: {
      color: theme.nav_bar_title_text_color,
      fontSize: theme.nav_bar_title_font_size,
      textAlign: "center",
    },

    wrapper: {
      backgroundColor: theme.nav_bar_background_color,
      height: theme.nav_bar_height,
      justifyContent: "center",
      position: "relative",
    },
  });
};
