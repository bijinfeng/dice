import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import type { Vars } from '../styles';

export const searchDefaultVars = (vars: Vars) => ({
  search_padding_vertical: 10,
  search_padding_horizontal: vars.padding_sm,
  search_background_color: vars.white,
  search_content_background_color: vars.gray_1,
  search_input_height: 34,
  search_label_padding_vertical: 0,
  search_label_padding_horizontal: 5,
  search_label_color: vars.text_color,
  search_label_font_size: vars.font_size_md,
  search_left_icon_color: vars.gray_6,
  search_action_padding_vertical: 0,
  search_action_padding_horizontal: vars.padding_xs,
  search_action_text_color: vars.text_color,
  search_action_font_size: vars.font_size_md,
});

interface Styles {
  container: ViewStyle;
  content: ViewStyle;
  round: ViewStyle;
  field: ViewStyle;
  label: TextStyle;
  action: ViewStyle;
  actionText: TextStyle;
  showAction: ViewStyle;
}

export const createStyle = (theme: DiceUI.Theme): Styles => {
  return StyleSheet.create<Styles>({
    action: {
      paddingHorizontal: theme.search_action_padding_horizontal,
      paddingVertical: theme.search_action_padding_vertical,
    },
    actionText: {
      color: theme.search_action_text_color,
      fontSize: theme.search_action_font_size,
      lineHeight: theme.search_input_height,
    },
    container: {
      alignItems: 'center',
      backgroundColor: theme.search_background_color,
      flexDirection: 'row',
      paddingHorizontal: theme.search_padding_horizontal,
      paddingVertical: theme.search_padding_vertical,
    },
    content: {
      backgroundColor: theme.search_content_background_color,
      borderRadius: theme.border_radius_sm,
      flex: 1,
      flexDirection: 'row',
      overflow: 'hidden',
      paddingLeft: theme.padding_sm,
    },
    field: {
      backgroundColor: 'transparent',
      flex: 1,
      paddingHorizontal: 0,
      paddingVertical: 5,
    },
    label: {
      color: theme.search_label_color,
      fontSize: theme.search_label_font_size,
      lineHeight: theme.search_input_height,
      paddingHorizontal: theme.search_label_padding_horizontal,
      paddingVertical: theme.search_label_padding_vertical,
    },
    round: {
      borderRadius: theme.border_radius_max,
    },
    showAction: {
      paddingRight: 0,
    },
  });
};
