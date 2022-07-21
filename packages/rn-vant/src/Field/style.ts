import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface Styles {
  label: TextStyle;
  disabledLabel: TextStyle;
  value: TextStyle;
  body: ViewStyle;
  labelWrapper: ViewStyle;
  container: ViewStyle;
  errorMessage: TextStyle;
  intro: TextStyle;
  prefix: ViewStyle;
  suffix: ViewStyle;
  children: ViewStyle;
}

export const createStyle = (theme: DiceUI.Theme): StyleSheet.NamedStyles<Styles> => {
  return StyleSheet.create<Styles>({
    body: {
      alignItems: 'center',
      flexDirection: 'row',
      flex: 1,
    },
    children: {
      alignItems: 'center',
      flexDirection: 'row',
      minHeight: theme.cell_line_height,
      textAlign: 'left',
    },
    container: {
      flex: 1,
    },
    disabledLabel: {
      color: theme.field_disabled_text_color,
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
    prefix: {
      paddingRight: theme.padding_xs,
    },
    suffix: {
      paddingLeft: theme.padding_xs,
    },
    value: {
      overflow: 'visible',
    },
  });
};
