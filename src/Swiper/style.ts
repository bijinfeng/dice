import type { ViewStyle } from "react-native";
import { StyleSheet } from "react-native";

interface Styles {
  wrapper: ViewStyle;
  indicatorX: ViewStyle;
  indicatorY: ViewStyle;
  dot: ViewStyle;
  dotX: ViewStyle;
  dotY: ViewStyle;
  activeDot: ViewStyle;
  indicator: ViewStyle;
}

export const createStyle = (theme: DiceUI.Theme): Styles => {
  return StyleSheet.create<Styles>({
    activeDot: {
      backgroundColor: theme.swiper_indicator_active_background_color,
      opacity: theme.swiper_indicator_active_opacity,
    },

    dot: {
      backgroundColor: theme.swiper_indicator_inactive_background_color,
      borderRadius: theme.swiper_indicator_size,
      height: theme.swiper_indicator_size,
      opacity: theme.swiper_indicator_inactive_opacity,
      width: theme.swiper_indicator_size,
    },

    dotX: {
      marginHorizontal: theme.swiper_indicator_size / 2,
    },

    dotY: {
      marginVertical: theme.swiper_indicator_size / 2,
    },

    indicator: {
      position: "absolute",
    },

    indicatorX: {
      bottom: theme.swiper_indicator_margin,
      flexDirection: "row",
      justifyContent: "center",
      width: "100%",
    },

    indicatorY: {
      height: "100%",
      justifyContent: "center",
      right: theme.swiper_indicator_margin,
    },

    wrapper: {
      position: "relative",
    },
  });
};

export default createStyle;
