import { StyleSheet } from 'react-native';
import type { ViewStyle, TextStyle } from 'react-native';

type Styles = {
  empty: ViewStyle;
  description: TextStyle;
  bottom: ViewStyle;
};

export const createStyle = (theme: DiceUI.Theme): Styles => {
  return StyleSheet.create<Styles>({
    bottom: {
      marginTop: theme.empty_bottom_margin_top,
    },
    description: {
      color: theme.empty_description_color,
      fontSize: theme.empty_description_font_size,
      lineHeight: theme.empty_description_line_height,
      marginTop: theme.empty_description_margin_top,
      paddingHorizontal: theme.empty_description_padding_horizontal,
      paddingVertical: theme.empty_description_padding_vertical,
    },
    empty: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: theme.empty_padding_horizontal,
      paddingVertical: theme.empty_padding_vertical,
    },
  });
};
