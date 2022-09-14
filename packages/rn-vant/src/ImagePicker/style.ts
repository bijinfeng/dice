import { StyleSheet } from 'react-native';
import type { Vars } from '../styles';

export const imagePickerDefaultVars = (vars: Vars) => ({
  image_picker_size: 80,
  image_picker_icon_size: 24,
  image_picker_icon_color: vars.gray_4,
  image_picker_text_color: vars.text_color_2,
  image_picker_text_font_size: vars.font_size_sm,
  image_picker_upload_background: vars.gray_1,
  image_picker_upload_active_color: vars.active_color,
  image_picker_delete_color: vars.white,
  image_picker_delete_icon_size: 14,
  image_picker_delete_background: 'rgba(0, 0, 0, 0.7)',
  image_picker_file_background: vars.background,
  image_picker_file_icon_size: 20,
  image_picker_file_icon_color: vars.gray_7,
  image_picker_file_name_padding_vertical: 0,
  image_picker_file_name_padding_horizontal: vars.padding_base,
  image_picker_file_name_margin_top: vars.padding_xs,
  image_picker_file_name_font_size: vars.font_size_sm,
  image_picker_file_name_text_color: vars.gray_7,
  image_picker_mask_text_color: vars.white,
  image_picker_mask_background: 'rgba(50, 50, 51, 0.88)',
  image_picker_mask_icon_size: 22,
  image_picker_mask_message_font_size: vars.font_size_sm,
  image_picker_mask_message_line_height: vars.line_height_xs,
  image_picker_loading_icon_size: 22,
  image_picker_loading_icon_color: vars.white,
  image_picker_disabled_opacity: vars.disabled_opacity,
});

export const createItemStyles = (theme: DiceUI.Theme) => {
  return StyleSheet.create({
    delete: {
      alignItems: 'center',
      backgroundColor: theme.image_picker_delete_background,
      borderBottomLeftRadius: 12,
      height: theme.image_picker_delete_icon_size,
      justifyContent: 'center',
      position: 'absolute',
      right: 0,
      top: 0,
      width: theme.image_picker_delete_icon_size,
    },
    mask: {
      ...StyleSheet.absoluteFillObject,
      alignItems: 'center',
      backgroundColor: theme.image_picker_mask_background,
      flexDirection: 'column',
      justifyContent: 'center',
    },
    maskMessage: {
      color: theme.image_picker_mask_text_color,
      fontSize: theme.image_picker_mask_message_font_size,
      lineHeight: theme.image_picker_mask_message_line_height,
      marginTop: 6,
      paddingHorizontal: theme.padding_base,
    },
    preview: {
      marginBottom: theme.padding_xs,
      marginRight: theme.padding_xs,
      position: 'relative',
    },
  });
};

export const createStyles = (theme: DiceUI.Theme) => {
  return StyleSheet.create({
    container: {
      position: 'relative',
    },
    upload: {
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    },
    uploadText: {
      color: theme.image_picker_text_color,
      fontSize: theme.image_picker_text_font_size,
      marginTop: theme.padding_xs,
    },
    wrapper: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    wrapperDisabled: {
      opacity: theme.image_picker_disabled_opacity,
    },
  });
};
