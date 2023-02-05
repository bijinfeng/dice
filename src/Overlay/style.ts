import { StyleSheet } from "react-native";

export const createStyle = (theme: DiceUI.Theme) => {
  return StyleSheet.create({
    backdrop: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: theme.overlay_background_color,
    },
    container: {
      ...StyleSheet.absoluteFillObject,
      alignItems: "center",
      justifyContent: "center",
    },
  });
};
