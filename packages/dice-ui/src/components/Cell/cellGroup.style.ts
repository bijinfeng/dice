import { StyleSheet } from 'react-native';

export const createStyle = (theme: DiceUI.Theme) => {
  return StyleSheet.create({
    inset: {
      borderRadius: theme.border_radius_lg,
      margin: theme.padding_md,
      overflow: 'hidden',
    },
    title: {
      color: theme.cell_group_title_color,
      fontSize: theme.cell_group_title_font_size,
      lineHeight: theme.cell_group_title_line_height,
      paddingBottom: theme.cell_group_title_padding_bottom,
      paddingHorizontal: theme.cell_group_title_padding_horizontal,
      paddingTop: theme.cell_group_title_padding_top,
    },
    titleInset: {
      paddingBottom: theme.padding_xs,
      paddingLeft: theme.padding_xl,
      paddingRight: theme.padding_md,
      paddingTop: theme.padding_md,
    },
    wrapper: {
      backgroundColor: theme.cell_group_background_color,
    },
    wrapperBorder: {
      borderBottomColor: theme.border_color,
      borderBottomWidth: 1,
      borderTopColor: theme.border_color,
      borderTopWidth: 1,
    },
  });
};
