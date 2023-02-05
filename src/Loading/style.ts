import { StyleSheet } from "react-native";

export const createStyle = (theme: DiceUI.Theme) => {
  const textFontSize = theme.font_size_md;

  return StyleSheet.create({
    text: {
      fontSize: textFontSize,
      marginLeft: theme.padding_xs,
    },
    verticalText: {
      fontSize: textFontSize,
      marginTop: theme.padding_xs,
    },
  });
};
