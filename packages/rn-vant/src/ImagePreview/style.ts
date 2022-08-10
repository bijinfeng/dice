import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface Styles {
  wrapper: ViewStyle;
  index: ViewStyle;
  indexText: TextStyle;
}

export const createStyle = (theme: DiceUI.Theme): StyleSheet.NamedStyles<Styles> => {
  return StyleSheet.create<Styles>({
    index: {
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      top: 0,
      width: '100%',
    },
    indexText: {
      color: theme.image_preview_index_text_color,
      fontSize: theme.image_preview_index_font_size,
      lineHeight: theme.image_preview_index_line_height,
    },
    wrapper: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: theme.image_preview_overlay_background,
    },
  });
};
