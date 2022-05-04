import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface Styles {
  label: TextStyle;
  disabledLabel: TextStyle;
  value: TextStyle;
  body: ViewStyle;
  control: TextStyle;
  disabledControl: TextStyle;
  labelWrapper: ViewStyle;
  errorControl: ViewStyle;
  container: ViewStyle;
  errorMessage: TextStyle;
  intro: TextStyle;
  wordLimit: TextStyle;
}

export const createStyle = (theme: DiceUI.Theme): StyleSheet.NamedStyles<Styles> => {
  return StyleSheet.create<Styles>({
    body: {
      alignItems: 'center',
      flexDirection: 'row',
      flex: 1,
    },
    container: {
      flex: 1,
    },
    control: {
      color: theme.field_input_text_color,
      flex: 1,
      fontSize: theme.cell_font_size,
      paddingTop: 3,
      textAlignVertical: 'top',
    },
    disabledControl: {
      color: theme.field_input_disabled_text_color,
    },
    disabledLabel: {
      color: theme.field_disabled_text_color,
    },
    errorControl: {
      color: theme.field_input_error_text_color,
    },
    errorMessage: {
      color: theme.field_error_message_color,
      fontSize: theme.field_error_message_font_size,
      lineHeight: theme.cell_line_height,
    },
    intro: {
      color: theme.field_intro_color,
      fontSize: theme.field_error_message_font_size,
      lineHeight: 1.4 * theme.field_error_message_font_size,
      textAlign: 'left',
    },
    label: {
      color: theme.field_label_color,
      textAlign: 'left',
    },
    labelWrapper: {
      alignItems: 'center',
      alignSelf: 'flex-start',
      flexDirection: 'row',
      marginRight: theme.field_label_margin_right,
      width: theme.field_label_width,
    },
    value: {
      overflow: 'visible',
    },
    wordLimit: {
      color: theme.field_word_limit_color,
      fontSize: theme.field_word_limit_font_size,
      lineHeight: theme.field_word_limit_line_height,
      marginTop: theme.padding_base,
      textAlign: 'right',
    },
  });
};
