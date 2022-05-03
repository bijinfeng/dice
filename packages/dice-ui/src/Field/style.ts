import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface Styles {
  label: TextStyle;
  disabledLabel: TextStyle;
  value: TextStyle;
  body: ViewStyle;
  control: TextStyle;
  disabledControl: TextStyle;
  labelWrapper: ViewStyle;
}

export const createStyle = (theme: DiceUI.Theme): StyleSheet.NamedStyles<Styles> => {
  return StyleSheet.create<Styles>({
    body: {
      alignItems: 'center',
      flexDirection: 'row',
      flex: 1,
    },
    control: {
      flex: 1,
      height: theme.cell_line_height,
      textAlignVertical: 'top',
    },
    disabledControl: {
      color: theme.field_input_disabled_text_color,
    },
    disabledLabel: {
      color: theme.field_disabled_text_color,
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
  });
};
