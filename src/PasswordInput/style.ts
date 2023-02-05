import { StyleSheet, ViewStyle } from "react-native";
import type { Vars } from "../styles";

export const passwordInputDefaultVars = (vars: Vars) => ({
  password_input_height: 50,
  password_input_margin_vertical: 0,
  password_input_margin_horizontal: vars.padding_md,
  password_input_font_size: 20,
  password_input_border_radius: 6,
  password_input_background_color: vars.white,
  password_input_info_color: vars.gray_6,
  password_input_info_font_size: vars.font_size_md,
  password_input_error_info_color: vars.danger_color,
  password_input_dot_size: 10,
  password_input_dot_color: vars.black,
  password_input_text_color: vars.text_color,
  password_input_cursor_color: vars.text_color,
  password_input_cursor_width: 1,
  password_input_cursor_height: "40%",
  password_input_cursor_animation_duration: 1,
  password_input_item_border_radius: 0,
});

interface Styles {
  wrapper: ViewStyle;
}

export const createStyle = (theme: DiceUI.Theme): Styles => {
  return StyleSheet.create<Styles>({
    wrapper: {
      marginHorizontal: theme.password_input_margin_horizontal,
      marginVertical: theme.password_input_margin_vertical,
      position: "relative",
    },
  });
};
