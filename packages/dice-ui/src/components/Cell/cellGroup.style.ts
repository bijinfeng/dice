import { StyleSheet } from 'react-native';

export const createStyle = (theme: DiceUI.Theme) => {
  const backgroundColor = theme.colors.white;
  const titleColor = theme.colors.gray6;
  const titlePadding = `${theme.padding.md} ${theme.padding.md} ${theme.padding.xs}`;
  const titleFontSize = theme.font.fontSizeMd;
  const titleLineHeight = 16;
  const insetPadding = `0 ${theme.padding.md}`;
  const insetBorderRadius = theme.border.radiusLg;
  const insetTitlePadding = `${theme.padding.md} ${theme.padding.md} ${theme.padding.xs} ${theme.padding.xl}`;
  const borderColor = theme.border.color;

  return StyleSheet.create({
    inset: {
      borderRadius: insetBorderRadius,
      margin: insetPadding,
      overflow: 'hidden',
    },
    title: {
      color: titleColor,
      fontSize: titleFontSize,
      lineHeight: titleLineHeight,
      padding: titlePadding,
    },
    titleInset: {
      padding: insetTitlePadding,
    },
    wrapper: {
      backgroundColor,
    },
    wrapperBorder: {
      borderBottomColor: borderColor,
      borderBottomWidth: 1,
      borderTopColor: borderColor,
      borderTopWidth: 1,
    },
  });
};
