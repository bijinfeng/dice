import { StyleSheet } from 'react-native';
import type { ViewStyle, TextStyle } from 'react-native';

type Styles = {
  nav: ViewStyle;
  navLine: ViewStyle;
  navCard: ViewStyle;
  tab: ViewStyle;
  text: TextStyle;
  line: ViewStyle;
};

const createStyle = (theme: DiceUI.Theme): Styles => {
  return StyleSheet.create<Styles>({
    line: {
      backgroundColor: theme.tabs_bottom_bar_color,
      borderRadius: theme.tabs_bottom_bar_height,
      bottom: 0,
      height: theme.tabs_bottom_bar_height,
      left: 0,
      position: 'absolute',
      width: theme.tabs_bottom_bar_width,
    },
    nav: {
      backgroundColor: theme.tabs_nav_background,
      display: 'flex',
      flexDirection: 'row',
      position: 'relative',
    },
    navCard: {
      borderColor: theme.tabs_default_color,
      borderRadius: theme.border_radius_sm,
      borderWidth: theme.border_width_base,
      height: theme.tabs_card_height,
      marginHorizontal: theme.padding_md,
    },
    navLine: {
      height: theme.tabs_line_height,
    },
    tab: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: theme.padding_base,
      position: 'relative',
    },
    text: {
      color: theme.tab_text_color,
      fontSize: theme.tab_font_size,
      lineHeight: theme.tab_line_height,
    },
  });
};

export default createStyle;
