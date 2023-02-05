import { StyleProp, StyleSheet, TextStyle } from "react-native";

export const createCellStyle = (theme: DiceUI.Theme, disabled = false) => {
  const text: StyleProp<TextStyle> = {
    alignItems: "center",
    justifyContent: "center",
    minHeight: theme.cell_line_height,
    lineHeight: theme.cell_line_height,
    color: disabled ? theme.cell_disabled_text_color : theme.cell_text_color,
    fontSize: theme.cell_font_size,
    textAlignVertical: "center",
  };

  return StyleSheet.create({
    icon: {
      height: 24,
      justifyContent: "center",
    },
    label: {
      color: theme.cell_label_color,
      fontSize: theme.cell_label_font_size,
      lineHeight: theme.cell_label_line_height,
      marginTop: theme.cell_label_margin_top,
    },
    larbelLarge: {
      fontSize: theme.cell_large_label_font_size,
    },
    required: {
      color: theme.cell_required_color,
      fontSize: theme.cell_font_size,
      left: -theme.padding_xs,
      lineHeight: theme.cell_line_height,
      position: "absolute",
      top: 0,
    },
    title: {
      ...text,
    },
    titleLarge: {
      fontSize: theme.cell_large_title_font_size,
    },
    value: {
      ...text,
      color: theme.cell_value_color,
      flex: 1,
      textAlign: "right",
    },
    wrapper: {
      backgroundColor: theme.cell_background_color,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: theme.cell_padding_horizontal,
      paddingVertical: theme.cell_padding_vertical,
      position: "relative",
    },
    wrapperLarge: {
      paddingVertical: theme.cell_large_padding_vertical,
    },
  });
};

export const createCellGroupStyle = (theme: DiceUI.Theme) => {
  return StyleSheet.create({
    divide: {
      backgroundColor: theme.cell_border_color,
      height: 1,
      marginHorizontal: theme.cell_padding_horizontal,
    },
    inset: {
      borderRadius: theme.cell_group_inset_radius,
      marginHorizontal: theme.cell_group_inset_padding_horizontal,
      marginVertical: theme.cell_group_inset_padding_vertical,
      overflow: "hidden",
    },
    title: {
      color: theme.cell_group_title_color,
      fontSize: theme.cell_group_title_font_size,
      lineHeight: theme.cell_group_title_line_height,
      paddingBottom: theme.cell_group_title_padding_bottom,
      paddingHorizontal: theme.cell_group_title_padding_horizontal,
      paddingTop: theme.cell_group_title_padding_top,
    },
    titleInset: {
      paddingHorizontal: theme.cell_group_inset_title_padding_horizontal,
      paddingVertical: theme.cell_group_inset_title_padding_vertical,
    },
    wrapper: {
      backgroundColor: theme.cell_group_background_color,
    },
    wrapperBorder: {
      borderBottomColor: theme.border_color,
      borderBottomWidth: 1,
      borderTopColor: theme.border_color,
      borderTopWidth: 1,
    },
  });
};
