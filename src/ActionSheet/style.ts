import type { TextStyle, ViewStyle } from "react-native";
import { StyleSheet } from "react-native";

interface Styles {
  container: ViewStyle;
  item: ViewStyle;
  name: TextStyle;
  gap: ViewStyle;
  cancel: ViewStyle;
  cancelText: TextStyle;
  description: TextStyle;
  descriptionGap: ViewStyle;
  subname: TextStyle;
  disabled: ViewStyle;
}

export const createStyle = (theme: DiceUI.Theme): Styles => {
  const itemStyle: TextStyle = {
    paddingHorizontal: theme.padding_md,
    paddingVertical: 14,
    backgroundColor: theme.action_sheet_item_background,
    alignItems: "center",
  };

  return StyleSheet.create<Styles>({
    cancel: {
      ...itemStyle,
    },
    cancelText: {
      color: theme.action_sheet_cancel_text_color,
      fontSize: theme.action_sheet_item_font_size,
      lineHeight: theme.action_sheet_item_line_height,
    },
    container: {
      maxHeight: theme.action_sheet_max_height,
    },
    description: {
      color: theme.action_sheet_description_color,
      fontSize: theme.action_sheet_description_font_size,
      lineHeight: theme.action_sheet_description_line_height,
      paddingHorizontal: theme.padding_md,
      paddingVertical: 20,
      textAlign: "center",
    },
    descriptionGap: {
      borderBottomColor: theme.border_color,
      borderBottomWidth: StyleSheet.hairlineWidth,
      marginHorizontal: theme.padding_md,
    },
    disabled: {
      color: theme.action_sheet_item_disabled_text_color,
    },
    gap: {
      backgroundColor: theme.action_sheet_cancel_padding_color,
      height: theme.action_sheet_cancel_padding_top,
    },
    item: {
      ...itemStyle,
    },
    name: {
      color: theme.action_sheet_item_text_color,
      fontSize: theme.action_sheet_item_font_size,
      lineHeight: theme.action_sheet_item_line_height,
    },
    subname: {
      color: theme.action_sheet_subname_color,
      fontSize: theme.action_sheet_subname_font_size,
      lineHeight: theme.action_sheet_subname_line_height,
      marginTop: theme.padding_xs,
    },
  });
};
