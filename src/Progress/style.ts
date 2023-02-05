import type { TextStyle, ViewStyle } from "react-native";
import { StyleSheet } from "react-native";
import type { ProgressProps } from "./type";

interface Styles {
  wrapper: ViewStyle;
  portion: ViewStyle;
  pivot: TextStyle;
  pivotContainer: ViewStyle;
}

type ExtraParams = Pick<
  ProgressProps,
  | "color"
  | "trackColor"
  | "inactive"
  | "textColor"
  | "pivotColor"
  | "percentage"
  | "strokeWidth"
>;

export const createStyle = (
  theme: DiceUI.Theme,
  params: ExtraParams
): Styles => {
  const {
    color,
    trackColor,
    inactive,
    textColor,
    pivotColor,
    strokeWidth,
    percentage = 0,
  } = params;

  const progressBackgroundColor = trackColor ?? theme.progress_background_color;
  const progressColor = inactive
    ? theme.progress_inactive_color
    : color ?? theme.progress_color;
  const progressHeight = strokeWidth ?? theme.progress_height;
  const pivotTextColor = textColor ?? theme.progress_pivot_text_color;
  const pivotBackgroundColor = pivotColor ?? progressColor;
  const pivotTextHeight = theme.progress_pivot_line_height;

  return StyleSheet.create<Styles>({
    pivot: {
      backgroundColor: pivotBackgroundColor,
      color: pivotTextColor,
      fontSize: theme.progress_pivot_font_size,
      lineHeight: pivotTextHeight,
      paddingHorizontal: theme.progress_pivot_padding_horizontal,
      paddingVertical: theme.progress_pivot_padding_vertical,
    },

    pivotContainer: {
      borderRadius: pivotTextHeight,
      left: `${percentage}%`,
      overflow: "hidden",
      position: "absolute",
      top: -(pivotTextHeight - progressHeight) / 2,
    },

    portion: {
      backgroundColor: progressColor,
      borderRadius: progressHeight,
      height: "100%",
      left: 0,
      position: "absolute",
      width: `${percentage}%`,
    },

    wrapper: {
      backgroundColor: progressBackgroundColor,
      borderRadius: progressHeight,
      height: progressHeight,
      position: "relative",
    },
  });
};
