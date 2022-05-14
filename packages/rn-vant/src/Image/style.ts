import { StyleSheet } from 'react-native';
import type { ImageProps } from './interface';

type ExtraProps = Pick<ImageProps, 'round' | 'radius'>;

const createStyles = (themeVar: DiceUI.Theme, { round, radius }: ExtraProps) => {
  return StyleSheet.create({
    errorIcon: {
      color: themeVar.image_error_icon_color,
      fontSize: themeVar.image_error_icon_size,
    },

    hintText: {
      color: themeVar.image_placeholder_text_color,
      fontSize: themeVar.image_placeholder_font_size,
      lineHeight: themeVar.line_height_md,
      padding: themeVar.padding_md,
      textAlign: 'center',
    },

    hintWrapper: {
      alignItems: 'center',
      bottom: 0,
      justifyContent: 'center',
      left: 0,
      position: 'absolute',
      right: 0,
      top: 0,
    },

    image: { height: '100%', width: '100%' },

    loadingIcon: {
      color: themeVar.image_loading_icon_color,
      fontSize: themeVar.image_loading_icon_size,
    },

    wrapper: {
      backgroundColor: themeVar.image_placeholder_background_color,
      borderRadius: round ? 9999 : radius,
      height: themeVar.image_default_size,
      overflow: 'hidden',
      position: 'relative',
      width: themeVar.image_default_size,
    },
  });
};

export default createStyles;
