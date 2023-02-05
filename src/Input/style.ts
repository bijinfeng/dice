import { StyleSheet, TextStyle, ViewStyle } from "react-native";

interface InputStyles {
  body: ViewStyle;
  control: TextStyle;
  disabledControl: TextStyle;
  errorControl: ViewStyle;
}

export const createInputStyle = (
  theme: DiceUI.Theme
): StyleSheet.NamedStyles<InputStyles> => {
  return StyleSheet.create<InputStyles>({
    body: {
      alignItems: "center",
      flexDirection: "row",
      flex: 1,
    },
    control: {
      color: theme.field_input_text_color,
      flex: 1,
      fontSize: theme.cell_font_size,
      paddingTop: 3,
      textAlignVertical: "top",
    },
    disabledControl: {
      color: theme.field_input_disabled_text_color,
    },
    errorControl: {
      color: theme.field_input_error_text_color,
    },
  });
};

interface TextAreaStyles {
  container: ViewStyle;
  wordLimit: TextStyle;
}

export const createTextAreaStyle = (
  theme: DiceUI.Theme
): StyleSheet.NamedStyles<TextAreaStyles> => {
  return StyleSheet.create<TextAreaStyles>({
    container: {
      flex: 1,
    },
    wordLimit: {
      color: theme.field_word_limit_color,
      fontSize: theme.field_word_limit_font_size,
      lineHeight: theme.field_word_limit_line_height,
      marginTop: theme.padding_base,
      textAlign: "right",
    },
  });
};
