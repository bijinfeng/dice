import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import type { Vars } from '../styles';

export const numberKeyBoardDefaultVars = (vars: Vars) => ({
  number_keyboard_background_color: vars.gray_2,
  number_keyboard_key_height: 48,
  number_keyboard_key_font_size: 28,
  number_keyboard_key_background_color: vars.white,
  number_keyboard_key_active_color: vars.gray_3,
  number_keyboard_delete_font_size: vars.font_size_lg,
  number_keyboard_title_color: vars.gray_7,
  number_keyboard_title_height: 34,
  number_keyboard_title_font_size: vars.font_size_lg,
  number_keyboard_close_padding_vertical: 0,
  number_keyboard_close_padding_horizontal: vars.padding_md,
  number_keyboard_close_color: vars.link_color,
  number_keyboard_close_font_size: vars.font_size_md,
  number_keyboard_button_text_color: vars.white,
  number_keyboard_button_background_color: vars.primary_color,
  number_keyboard_z_index: 100,
});

interface Styles {
  wrapper: ViewStyle;
  body: ViewStyle;
  keys: ViewStyle;
  sideBar: ViewStyle;
  widthTitle: ViewStyle;
  header: ViewStyle;
  title: TextStyle;
  close: ViewStyle;
  closeText: TextStyle;
}

export const createStyle = (theme: DiceUI.Theme): Styles => {
  return StyleSheet.create<Styles>({
    body: {
      flexDirection: 'row',
      paddingLeft: 6,
      paddingTop: 6,
    },
    close: {
      alignItems: 'center',
      height: theme.number_keyboard_title_height + 6,
      justifyContent: 'center',
      paddingHorizontal: theme.number_keyboard_close_padding_horizontal,
      paddingVertical: theme.number_keyboard_close_padding_vertical,
      position: 'absolute',
      right: 0,
      top: 0,
    },
    closeText: {
      color: theme.number_keyboard_close_color,
      fontSize: theme.number_keyboard_close_font_size,
    },
    header: {
      alignItems: 'center',
      height: theme.number_keyboard_title_height,
      justifyContent: 'center',
      paddingTop: 6,
      position: 'relative',
    },
    keys: {
      flex: 3,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    sideBar: {
      flex: 1,
    },
    title: {
      color: theme.number_keyboard_title_color,
      fontSize: theme.number_keyboard_title_font_size,
    },
    widthTitle: {
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    wrapper: {
      backgroundColor: theme.number_keyboard_background_color,
      bottom: 0,
      left: 0,
      position: 'absolute',
      width: '100%',
      zIndex: theme.number_keyboard_z_index,
    },
  });
};

interface KeyStyles {
  wrapper: ViewStyle;
  container: ViewStyle;
  text: TextStyle;
  deleteIcon: ViewStyle;
  collapseIcon: ViewStyle;
  wider: ViewStyle;
  blue: ViewStyle;
  blueText: TextStyle;
  large: ViewStyle;
}

export const createKeyStyle = (theme: DiceUI.Theme): KeyStyles => {
  return StyleSheet.create<KeyStyles>({
    blue: {
      backgroundColor: theme.number_keyboard_button_background_color,
    },
    blueText: {
      color: theme.number_keyboard_button_text_color,
      fontSize: theme.number_keyboard_delete_font_size,
    },
    collapseIcon: {
      color: theme.text_color,
      height: 24,
      width: 30,
    },
    container: {
      alignItems: 'center',
      backgroundColor: theme.number_keyboard_key_background_color,
      borderRadius: theme.border_radius_lg,
      height: '100%',
      justifyContent: 'center',
      position: 'relative',
      width: '100%',
    },
    deleteIcon: {
      color: theme.text_color,
      height: 22,
      width: 32,
    },
    large: {
      flex: 1,
      height: 'auto',
    },
    text: {
      color: theme.text_color,
      fontSize: theme.number_keyboard_key_font_size,
    },
    wider: {
      flexBasis: '66%',
    },
    wrapper: {
      flexBasis: '33%',
      height: theme.number_keyboard_key_height + 6,
      paddingBottom: 6,
      paddingRight: 6,
    },
  });
};
