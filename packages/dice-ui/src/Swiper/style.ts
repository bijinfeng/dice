import { StyleSheet } from 'react-native';
import type { ViewStyle } from 'react-native';

interface Styles {
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

    dot: {
      backgroundColor: theme.swiper_indicator_inactive_background_color,
      borderRadius: theme.swiper_indicator_size,
      height: theme.swiper_indicator_size,
      margin: theme.swiper_indicator_size / 2,
      opacity: theme.swiper_indicator_inactive_opacity,
      width: theme.swiper_indicator_size,
    },

    indicatorX: {
      bottom: theme.swiper_indicator_margin,
    },

    indicatorY: {
      right: theme.swiper_indicator_margin,
    },
  });
};

export default createStyle;
