import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import type { Vars } from '../styles';

export const imagePreviewDefaultVars = (vars: Vars) => ({
  image_preview_index_text_color: vars.white,
  image_preview_index_font_size: vars.font_size_md,
  image_preview_index_line_height: vars.line_height_md,
  image_preview_overlay_background: 'rgba(0, 0, 0, 0.9)',
  image_preview_close_icon_size: 22,
  image_preview_close_icon_color: vars.gray_5,
  image_preview_close_icon_margin: vars.padding_md,
});

interface Styles {
  wrapper: ViewStyle;
  index: ViewStyle;
  indexText: TextStyle;
  icon: ViewStyle;
}

export const createStyle = (theme: DiceUI.Theme): StyleSheet.NamedStyles<Styles> => {
  return StyleSheet.create<Styles>({
    icon: {
      position: 'absolute',
      right: theme.image_preview_close_icon_margin,
      top: theme.image_preview_close_icon_margin,
    },
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
