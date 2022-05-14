import { StyleSheet } from 'react-native';
import type { TagProps, TagSize, TagType } from './interface';

type Params = Pick<
  TagProps,
  'color' | 'textColor' | 'plain' | 'round' | 'size' | 'type' | 'hairline'
>;

const createStyle = (theme: DiceUI.Theme, params: Params) => {
  const { type = 'default', textColor, size = 'mini', round, plain, hairline, color } = params;

  const backgroundColorMaps: Record<TagType, string> = {
    danger: theme.tag_danger_color,
    default: theme.tag_default_color,
    primary: theme.tag_primary_color,
    success: theme.tag_success_color,
    warning: theme.tag_warning_color,
  };
  const paddingHorizontalMaps: Record<TagSize, number> = {
    large: theme.tag_large_padding_horizontal,
    medium: theme.tag_medium_padding_horizontal,
    mini: theme.tag_padding_horizontal,
  };
  const paddingVerticalMaps: Record<TagSize, number> = {
    large: theme.tag_large_padding_vertical,
    medium: theme.tag_medium_padding_vertical,
    mini: 0,
  };

  const backgroundColor = color || backgroundColorMaps[type] || theme.tag_default_color;
  const paddingHorizontal = paddingHorizontalMaps[size] || theme.tag_padding_horizontal;
  const paddingVertical = paddingVerticalMaps[size] || 0;

  return StyleSheet.create({
    tag: {
      backgroundColor: 'transparent',
      flexDirection: 'row',
      overflow: 'visible',
    },

    text: {
      color: plain ? backgroundColor : textColor,
      fontSize: size === 'large' ? theme.tag_large_font_size : theme.tag_font_size,
      lineHeight: theme.tag_line_height,
      paddingHorizontal: paddingHorizontal,
      paddingVertical: paddingVertical,
    },

    wrapper: {
      alignItems: 'center',
      backgroundColor: plain ? theme.tag_plain_background_color : backgroundColor,
      borderColor: backgroundColor,
      borderRadius: round
        ? theme.tag_round_border_radius
        : size === 'large'
        ? theme.tag_large_border_radius
        : theme.tag_border_radius,
      borderStyle: 'solid',
      borderWidth: hairline ? StyleSheet.hairlineWidth : 1,
      flexBasis: 'auto',
      flexDirection: 'row',
      overflow: 'hidden',
    },

    wrapperMark: {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: theme.tag_round_border_radius,
      borderTopLeftRadius: 0,
      borderTopRightRadius: theme.tag_round_border_radius,
    },
  });
};

export default createStyle;
