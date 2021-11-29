import { StyleSheet, StyleProp, TextStyle } from 'react-native';

export const createStyle = (theme: DiceUI.Theme) => {
  const cellFontSize = theme.font.fontSizeMd;
  const cellLineHeight = 24;
  const cellVerticalPadding = 10;
  const cellHorizontalPadding = theme.padding.md;
  const cellTextColor = theme.colors.textColor;
  const cellBackgroundColor = theme.colors.white;
  const cellBorderColor = theme.border.color;
  const cellLabelColor = theme.colors.gray6;
  const cellLabelFontSize = theme.font.fontSizeSm;
  const cellLabelLineHeight = theme.font.lineHeightSm;
  const cellLabelMarginTop = theme.padding.base;
  const cellValueColor = theme.colors.gray5;
  const cellLargeVerticalPadding = theme.padding.sm;
  const cellLargeTitleFontSize = theme.font.fontSizeLg;
  const cellLargeLabelFontSize = theme.font.fontSizeMd;

  const text: StyleProp<TextStyle> = {
    alignItems: 'center',
    lineHeight: cellLineHeight,
    color: cellTextColor,
    fontSize: cellFontSize,
  };

  return StyleSheet.create({
    icon: {
      height: 24,
      justifyContent: 'center',
    },
    label: {
      color: cellLabelColor,
      fontSize: cellLabelFontSize,
      lineHeight: cellLabelLineHeight,
      marginTop: cellLabelMarginTop,
    },
    larbelLarge: {
      fontSize: cellLargeLabelFontSize,
    },
    left: {
      flex: 1,
    },
    right: {
      alignItems: 'center',
      flexDirection: 'row',
    },
    title: {
      ...text,
    },
    titleLarge: {
      fontSize: cellLargeTitleFontSize,
    },
    value: {
      ...text,
      color: cellValueColor,
    },
    valueAlone: {
      color: cellTextColor,
    },
    wrapper: {
      backgroundColor: cellBackgroundColor,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: cellHorizontalPadding,
      paddingVertical: cellVerticalPadding,
    },
    wrapperBorder: {
      backgroundColor: cellBorderColor,
      marginHorizontal: cellHorizontalPadding,
    },
    wrapperLarge: {
      paddingVertical: cellLargeVerticalPadding,
    },
  });
};
