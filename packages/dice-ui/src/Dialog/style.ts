import { StyleSheet } from 'react-native';
import type { ViewStyle, TextStyle } from 'react-native';
import Constants from '../utils/constants';

type Styles = {
  container: ViewStyle;
  header: TextStyle;
  headerIsolated: TextStyle;
  contentIsolated: ViewStyle;
  message: TextStyle;
  messageHasTitle: TextStyle;
  footer: ViewStyle;
  cancel: ViewStyle;
  confirm: ViewStyle;
  confirmText: TextStyle;
  borderTop: ViewStyle;
  borderLeft: ViewStyle;
  roundBarFooter: ViewStyle;
  roundBarMessage: TextStyle;
  roundBarConfirm: ViewStyle;
  roundBarConfirmText: TextStyle;
  roundBarCancel: ViewStyle;
};

const createStyle = (theme: DiceUI.Theme): Styles => {
  const containerWidth =
    Constants.screenWidth <= 321 ? theme.dialog_small_screen_width : theme.dialog_width;

  const actionBarButton: ViewStyle = {
    flex: 1,
    height: theme.dialog_button_height,
    margin: 0,
    borderWidth: 0,
  };

  return StyleSheet.create<Styles>({
    borderLeft: {
      borderColor: theme.border_color,
      borderLeftWidth: theme.border_width_base,
    },
    borderTop: {
      borderColor: theme.border_color,
      borderTopWidth: theme.border_width_base,
    },
    cancel: actionBarButton,
    confirm: actionBarButton,
    confirmText: {
      color: theme.dialog_confirm_button_text_color,
    },
    container: {
      backgroundColor: theme.dialog_background,
      borderRadius: theme.dialog_radius,
      overflow: 'hidden',
      width: containerWidth,
    },
    contentIsolated: {
      alignItems: 'center',
      minHeight: 104,
    },
    footer: {
      flexDirection: 'row',
      overflow: 'hidden',
    },
    header: {
      color: theme.text_color,
      fontWeight: theme.dialog_header_font_weight,
      lineHeight: theme.dialog_header_line_height,
      paddingTop: theme.dialog_header_padding_top,
      textAlign: 'center',
    },
    headerIsolated: {
      paddingHorizontal: theme.dialog_header_isolated_padding_horizontal,
      paddingVertical: theme.dialog_header_isolated_padding_vertical,
    },
    message: {
      color: theme.text_color,
      fontSize: theme.dialog_message_font_size,
      lineHeight: theme.dialog_message_line_height,
      maxHeight: theme.dialog_message_max_height + theme.dialog_message_padding * 2,
      overflow: 'scroll',
      paddingHorizontal: theme.dialog_message_padding,
      paddingVertical: 26,
      textAlign: 'center',
    },
    messageHasTitle: {
      color: theme.dialog_has_title_message_text_color,
      paddingTop: theme.dialog_has_title_message_padding_top,
    },
    roundBarCancel: {
      height: theme.dialog_round_button_height,
    },
    roundBarConfirm: {
      height: theme.dialog_round_button_height,
    },
    roundBarConfirmText: {
      color: theme.white,
    },
    roundBarFooter: {
      height: theme.dialog_round_button_height,
      marginBottom: theme.padding_md,
      marginTop: theme.padding_xs,
      paddingHorizontal: theme.padding_lg,
      position: 'relative',
    },
    roundBarMessage: {
      color: theme.text_color,
      paddingBottom: theme.padding_md,
    },
  });
};

export default createStyle;
