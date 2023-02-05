import { StyleSheet, TextStyle, ViewStyle } from "react-native";

interface Styles {
  picker: ViewStyle;
  toolbar: ViewStyle;
  button: ViewStyle;
  buttonText: TextStyle;
  confirmButton: TextStyle;
  cancelButton: TextStyle;
  title: TextStyle;
  columns: ViewStyle;
  maskTop: ViewStyle;
  maskBottom: ViewStyle;
}

export const createStyle = (theme: DiceUI.Theme): Styles => {
  return StyleSheet.create<Styles>({
    button: {
      paddingHorizontal: theme.picker_action_padding_horizontal,
      paddingVertical: theme.picker_action_padding_vertical,
    },
    buttonText: {
      fontSize: theme.picker_action_font_size,
    },
    cancelButton: {
      color: theme.picker_cancel_action_color,
    },
    columns: {
      flexDirection: "row",
      position: "relative",
    },
    confirmButton: {
      color: theme.picker_confirm_action_color,
    },
    maskBottom: {
      bottom: 0,
      left: 0,
      position: "absolute",
      width: "100%",
    },
    maskTop: {
      left: 0,
      position: "absolute",
      top: 0,
      width: "100%",
    },
    picker: {
      backgroundColor: theme.picker_background,
    },
    title: {
      color: theme.text_color,
      fontSize: theme.picker_title_font_size,
      fontWeight: theme.font_weight_bold,
      lineHeight: theme.picker_title_line_height,
      maxWidth: "50%",
    },
    toolbar: {
      alignItems: "center",
      flexDirection: "row",
      height: theme.picker_toolbar_height,
      justifyContent: "space-between",
    },
  });
};

interface ItemStyles {
  item: ViewStyle;
  itemText: TextStyle;
}

export const createItemStyle = (theme: DiceUI.Theme): ItemStyles => {
  return StyleSheet.create<ItemStyles>({
    item: {
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: theme.picker_option_padding_horizontal,
      paddingVertical: theme.picker_option_padding_vertical,
    },
    itemText: {
      color: theme.picker_option_text_color,
      fontSize: theme.picker_option_font_size,
    },
  });
};
