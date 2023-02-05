import { StyleSheet } from "react-native";

const createStyle = (theme: DiceUI.Theme) => {
  return StyleSheet.create({
    checkbox: {
      alignItems: "center",
      flexDirection: "row",
    },
    icon: {
      alignItems: "center",
      borderColor: theme.checkbox_icon_border_color,
      borderWidth: 1,
      justifyContent: "center",
    },
    iconChecked: {
      backgroundColor: theme.checkbox_checked_icon_color,
      borderColor: theme.checkbox_checked_icon_color,
    },
    iconDisabled: {
      backgroundColor: theme.checkbox_disabled_background_color,
      borderColor: theme.checkbox_disabled_icon_color,
    },
    label: {
      color: theme.checkbox_label_color,
    },
    labelContainer: {
      marginLeft: theme.checkbox_label_margin,
    },
    labelDisabled: {
      color: theme.checkbox_disabled_label_color,
    },
  });
};

export default createStyle;
