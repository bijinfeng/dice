import { StyleSheet } from 'react-native';
import type { ViewStyle } from 'react-native';

interface Styles {
  container: ViewStyle;
  wrapperIOS: ViewStyle;
  indicatorX: ViewStyle;
  indicatorY: ViewStyle;
  dot: ViewStyle;
  activeDot: ViewStyle;
}

export const createStyle = (theme: DiceUI.Theme): Styles => {
  return StyleSheet.create<Styles>({
    activeDot: {
      backgroundColor: theme.swiper_indicator_active_background_color,
      borderRadius: theme.swiper_indicator_size,
      height: theme.swiper_indicator_size,
      margin: theme.swiper_indicator_size / 2,
      opacity: theme.swiper_indicator_active_opacity,
      width: theme.swiper_indicator_size,
    },

    container: {
      backgroundColor: 'transparent',
      flex: 1,
      position: 'relative',
    },

    dot: {
      backgroundColor: theme.swiper_indicator_inactive_background_color,
      borderRadius: theme.swiper_indicator_size,
      height: theme.swiper_indicator_size,
      margin: theme.swiper_indicator_size / 2,
      opacity: theme.swiper_indicator_inactive_opacity,
      width: theme.swiper_indicator_size,
    },

    indicatorX: {
      alignItems: 'center',
      backgroundColor: 'transparent',
      bottom: theme.swiper_indicator_margin,
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'center',
      left: 0,
      position: 'absolute',
      right: 0,
    },

    indicatorY: {
      alignItems: 'center',
      backgroundColor: 'transparent',
      bottom: 0,
      flexDirection: 'column',
      flex: 1,
      justifyContent: 'center',
      left: theme.swiper_indicator_margin,
      position: 'absolute',
      top: 0,
    },

    wrapperIOS: {
      backgroundColor: 'transparent',
    },
  });
};

export default createStyle;
