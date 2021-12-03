import { StyleSheet } from 'react-native';
import { padding } from '../../utils/getShortHand';

export const createStyle = (theme: DiceUI.Theme) => {
  const backgroundColor = theme.colors.white;
  const titleColor = theme.colors.gray6;
  const titlePadding = padding(theme.padding.md, theme.padding.md, theme.padding.xs);
  const titleFontSize = theme.font.fontSizeMd;
  const titleLineHeight = 16;
  const insetBorderRadius = theme.border.radiusLg;
  const insetTitlePadding = padding(
    theme.padding.md,
    theme.padding.md,
    theme.padding.xs,
    theme.padding.xl
  );
  const borderColor = theme.border.color;

  return StyleSheet.create({
    inset: {
      borderRadius: insetBorderRadius,
      margin: theme.padding.md,
      overflow: 'hidden',
    },
    title: {
      color: titleColor,
      fontSize: titleFontSize,
      lineHeight: titleLineHeight,
      ...titlePadding,
    },
    titleInset: {
      ...insetTitlePadding,
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
