import type { TextStyle, ViewStyle } from "react-native";
import { StyleSheet } from "react-native";

interface Styles {
  item: ViewStyle;
  itemActive: ViewStyle;
  itemDisabled: ViewStyle;
  label: TextStyle;
  labelActie: TextStyle;
  description: TextStyle;
  markWrapper: ViewStyle;
  mark: ViewStyle;
}

export const createStyle = (theme: DiceUI.Theme): Styles => {
  return StyleSheet.create<Styles>({
    description: {
      color: theme.text_color_2,
      fontSize: theme.font_size_sm,
    },
    item: {
      alignItems: "center",
      backgroundColor: theme.selector_color,
      borderColor: theme.selector_border_color,
      borderRadius: theme.selector_border_radius,
      borderWidth: theme.selector_border_width,
      overflow: "hidden",
      paddingHorizontal: theme.selector_padding_horizontal,
      paddingVertical: theme.selector_padding_vertical,
      position: "relative",
    },
    itemActive: {
      backgroundColor: theme.selector_checkd_color,
      borderColor: theme.selector_checkedborder_color,
    },
    itemDisabled: {
      opacity: 0.4,
    },
    label: {
      color: theme.selector_text_color,
      fontSize: theme.font_size_md,
      lineHeight: theme.font_size_md * 1.4,
    },
    labelActie: {
      color: theme.selector_checked_text_color,
    },
    mark: {
      left: 0,
      position: "absolute",
      top: 0,
    },
    markWrapper: {
      borderBottomColor: theme.selector_checked_text_color,
      borderBottomWidth: 8,
      borderLeftColor: "transparent",
      borderLeftWidth: 10,
      borderRightColor: theme.selector_checked_text_color,
      borderRightWidth: 10,
      borderTopColor: "transparent",
      borderTopWidth: 8,
      bottom: 0,
      height: 0,
      position: "absolute",
      right: 0,
      width: 0,
    },
  });
};
