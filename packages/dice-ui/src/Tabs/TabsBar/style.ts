import { StyleSheet } from 'react-native';
import type { ViewStyle, TextStyle } from 'react-native';

type Styles = {
  nav: ViewStyle;
  navLine: ViewStyle;
  navCard: ViewStyle;
  tab: ViewStyle;
  text: TextStyle;
  textActive: TextStyle;
  textDisabled: TextStyle;
  line: ViewStyle;
};

const createStyle = (theme: DiceUI.Theme, shrink: boolean, scrollable: boolean): Styles => {
  const tabRow = scrollable ? { paddingHorizontal: theme.padding_sm } : {};
  const tabShrink = shrink
    ? {
        flex: 0,
        paddingHorizontal: theme.padding_xs,
      }
    : null;
  const navPadding =
    scrollable || shrink
      ? {
          paddingHorizontal: theme.padding_xs,
        }
      : null;

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
      minWidth: '100%',
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
      ...navPadding,
    },
    tab: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: theme.padding_base,
      position: 'relative',
      ...tabRow,
      ...tabShrink,
    },
    text: {
      color: theme.tab_text_color,
      fontSize: theme.tab_font_size,
      lineHeight: theme.tab_line_height,
    },
    textActive: {
      color: theme.tab_active_text_color,
      fontWeight: theme.font_weight_bold,
    },
    textDisabled: {
      color: theme.tab_disabled_text_color,
    },
  });
};

export default createStyle;
