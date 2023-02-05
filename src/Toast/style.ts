import type { TextStyle, ViewStyle } from "react-native";
import { StyleSheet } from "react-native";

type Styles = {
  toast: ViewStyle;
  info: ViewStyle;
  default: ViewStyle;
  text: TextStyle;
  wrapper: ViewStyle;
};

const createStyle = (theme: DiceUI.Theme): Styles => {
  return StyleSheet.create<Styles>({
    default: {
      minHeight:
        theme.toast_default_min_height + theme.toast_default_padding * 2,
      padding: theme.toast_default_padding,
      width: theme.toast_default_width + theme.toast_default_padding * 2,
    },
    info: {
      minHeight: 0,
      minWidth:
        theme.toast_text_min_width + theme.toast_text_padding_horizontal * 2,
      paddingHorizontal: theme.toast_text_padding_horizontal,
      paddingVertical: theme.toast_text_padding_vertical,
    },
    text: {
      color: theme.toast_text_color,
      fontSize: theme.toast_font_size,
      lineHeight: theme.toast_line_height,
    },
    toast: {
      alignItems: "center",
      backgroundColor: theme.toast_background_color,
      borderRadius: theme.toast_border_radius,
      justifyContent: "center",
      maxWidth: theme.toast_max_width,
    },
    wrapper: {
      position: "absolute",
    },
  });
};

export default createStyle;
