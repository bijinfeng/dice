import { StyleSheet } from "react-native";
import type { DividerProps } from "./interface";

type Params = Pick<DividerProps, "contentPosition" | "dashed" | "hairline">;

export const createStyle = (
  theme: DiceUI.Theme,
  { dashed, hairline, contentPosition }: Params
) => {
  return StyleSheet.create({
    divider: {
      alignItems: "center",
      flexDirection: "row",
      marginVertical: theme.divider_margin_vertical,
    },

    line: {
      borderBottomWidth: hairline ? StyleSheet.hairlineWidth : 1,
      borderColor: theme.divider_border_color,
      borderStyle: dashed ? "dashed" : "solid",
      flex: 1,
      height: 0,
    },

    lineLeft: {
      marginRight: theme.divider_margin_horizontal,
      maxWidth:
        contentPosition === "left" ? theme.divider_content_left_width : "auto",
    },

    lineRight: {
      marginLeft: theme.divider_margin_horizontal,
      maxWidth:
        contentPosition === "right"
          ? theme.divider_content_right_width
          : "auto",
    },

    text: {
      color: theme.divider_text_color,
      fontSize: theme.divider_font_size,
      lineHeight: theme.divider_line_height,
    },
  });
};
