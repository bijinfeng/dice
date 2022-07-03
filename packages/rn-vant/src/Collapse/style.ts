import { StyleSheet } from 'react-native';
import type { ViewStyle, TextStyle } from 'react-native';

interface Styles {
  contentWrapper: ViewStyle;
  content: TextStyle;
}

export const createStyle = (theme: DiceUI.Theme): Styles => {
  return StyleSheet.create({
    content: {
      color: theme.collapse_item_content_text_color,
      fontSize: theme.collapse_item_content_font_size,
      lineHeight: theme.collapse_item_content_line_height,
    },
    contentWrapper: {
      backgroundColor: theme.collapse_item_content_background_color,
      borderTopColor: theme.border_color,
      borderTopWidth: 1,
      marginHorizontal: theme.collapse_item_content_padding_horizontal,
      paddingVertical: theme.collapse_item_content_padding_vertical,
    },
  });
};
