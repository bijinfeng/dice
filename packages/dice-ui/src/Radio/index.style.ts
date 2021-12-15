import { StyleSheet } from 'react-native';

const createStyle = (theme: DiceUI.Theme) => {
  return StyleSheet.create({
    icon: {
      alignItems: 'center',
      borderColor: theme.radio_icon_border_color,
      borderWidth: 1,
      justifyContent: 'center',
    },
    iconChecked: {
      backgroundColor: theme.radio_checked_icon_color,
      borderColor: theme.radio_checked_icon_color,
    },
    iconDisabled: {
      backgroundColor: theme.radio_disabled_background_color,
      borderColor: theme.radio_disabled_icon_color,
    },
    label: {
      color: theme.radio_label_color,
    },
    labelContainer: {
      marginLeft: theme.radio_label_margin,
    },
    labelDisabled: {
      color: theme.radio_disabled_label_color,
    },
    radio: {
      alignItems: 'center',
      flexDirection: 'row',
    },
  });
};

export default createStyle;
