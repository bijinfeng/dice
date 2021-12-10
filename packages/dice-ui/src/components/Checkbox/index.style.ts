import { StyleSheet } from 'react-native';

const createStyle = (theme: DiceUI.Theme) => {
  const borderColor = theme.colors.gray5;
  const labelMargin = theme.padding.xs;
  const labelColor = theme.colors.textColor;
  const checkedIconColor = theme.colors.primaryColor;
  const disabledIconColor = theme.colors.gray5;
  const disabledLabelColor = theme.colors.textColor3;
  const disabledBackgroundColor = theme.border.color;

  return StyleSheet.create({
    checkbox: {
      alignItems: 'center',
      flexDirection: 'row',
    },
    icon: {
      alignItems: 'center',
      borderColor: borderColor,
      borderWidth: 1,
      justifyContent: 'center',
    },
    iconChecked: {
      backgroundColor: checkedIconColor,
      borderColor: checkedIconColor,
    },
    iconDisabled: {
      backgroundColor: disabledBackgroundColor,
      borderColor: disabledIconColor,
    },
    label: {
      color: labelColor,
    },
    labelContainer: {
      marginLeft: labelMargin,
    },
    labelDisabled: {
      color: disabledLabelColor,
    },
  });
};

export default createStyle;
