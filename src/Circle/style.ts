import type { TextStyle, ViewStyle } from "react-native";
import { StyleSheet } from "react-native";
import type { CircleProps } from "./type";

interface Styles {
  wrapper: ViewStyle;
  svg: ViewStyle;
  text: TextStyle;
  textContainer: ViewStyle;
}

type ExtraParams = Pick<CircleProps, "size">;

export const createStyle = (
  theme: DiceUI.Theme,
  params: ExtraParams
): Styles => {
  const { size } = params;
  const circleSize = size ?? theme.circle_size;

  return StyleSheet.create({
    svg: {
      height: "100%",
      left: 0,
      position: "absolute",
      top: 0,
      width: "100%",
    },
    text: {
      color: theme.circle_text_color,
      fontSize: theme.circle_text_font_size,
      fontWeight: theme.circle_text_font_weight,
      lineHeight: theme.circle_text_line_height,
    },
    textContainer: {
      alignItems: "center",
      height: "100%",
      justifyContent: "center",
      padding: theme.padding_base,
      position: "absolute",
      width: "100%",
    },
    wrapper: {
      height: circleSize,
      position: "relative",
      width: circleSize,
    },
  });
};
