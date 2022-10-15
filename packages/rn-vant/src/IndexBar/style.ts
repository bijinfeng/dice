import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import type { Vars } from '../styles';

export const indexBarDefaultVars = (vars: Vars) => ({
  index_bar_sidebar_z_index: 2,
  index_bar_index_font_size: vars.font_size_xs,
  index_bar_index_line_height: vars.line_height_xs,
  index_bar_index_active_color: vars.primary_color,
  index_anchor_z_index: 1,
  index_anchor_padding_vertical: 0,
  index_anchor_padding_horizontal: vars.padding_md,
  index_anchor_text_color: vars.text_color,
  index_anchor_font_weight: vars.font_weight_bold,
  index_anchor_font_size: vars.font_size_md,
  index_anchor_line_height: 32,
  index_anchor_background_color: 'transparent',
  index_anchor_sticky_text_color: vars.primary_color,
  index_anchor_sticky_background_color: vars.white,
});

interface Styles {
  wrapper: ViewStyle;
  sidebar: ViewStyle;
  index: TextStyle;
  indexActive: TextStyle;
}

export const createStyle = (theme: DiceUI.Theme): Styles => {
  return StyleSheet.create<Styles>({
    index: {
      fontSize: theme.index_bar_index_font_size,
      fontWeight: theme.font_weight_bold,
      lineHeight: theme.index_bar_index_line_height,
      paddingLeft: theme.padding_md,
      paddingRight: theme.padding_xs,
      paddingVertical: 0,
    },
    indexActive: {
      color: theme.index_bar_index_active_color,
    },
    sidebar: {
      position: 'absolute',
      right: 0,
      textAlign: 'center',
    },
    wrapper: {
      position: 'relative',
    },
  });
};

interface AnchoreStyles {
  anchore: ViewStyle;
  anchoreText: TextStyle;
  sticky: ViewStyle;
  stickyText: TextStyle;
}

export const createAnchoreStyle = (theme: DiceUI.Theme): AnchoreStyles => {
  return StyleSheet.create<AnchoreStyles>({
    anchore: {
      backgroundColor: theme.index_anchor_background_color,
      paddingHorizontal: theme.index_anchor_padding_horizontal,
      paddingVertical: theme.index_anchor_padding_vertical,
      zIndex: theme.index_anchor_z_index,
    },
    anchoreText: {
      color: theme.index_anchor_text_color,
      fontSize: theme.index_anchor_font_size,
      fontWeight: theme.index_anchor_font_weight,
      lineHeight: theme.index_anchor_line_height,
    },
    sticky: {
      backgroundColor: theme.index_anchor_sticky_background_color,
      borderBottomColor: theme.gray_3,
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    stickyText: {
      color: theme.index_anchor_sticky_text_color,
    },
  });
};
