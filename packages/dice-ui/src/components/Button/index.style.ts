import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Type, Size } from './index';

const createStyle = (theme: DiceUI.Theme, type: Type, size: Size, plain) => {
  const miniHeight = 24;
  const miniPaddingHorizontal = theme.padding.base;
  const miniFontSize = theme.font.fontSizeXs;
  const smallHeight = 32;
  const smallPaddingHorizontal = theme.padding.xs;
  const smallFontSize = theme.font.fontSizeSm;
  const normalPaddingHorizontal = 15;
  const normalFontSize = theme.font.fontSizeMd;
  const largeHeight = 50;
  const defaultHeight = 44;
  const defaultFontSize = theme.font.fontSizeLg;
  const defaultColor = theme.colors.textColor;
  const defaultBackgroundColor = theme.colors.white;
  const defaultBorderColor = theme.border.color;
  const primaryColor = theme.colors.white;
  const primaryBackgroundColor = theme.colors.primaryColor;
  const primaryBorderColor = theme.colors.primaryColor;
  const successColor = theme.colors.white;
  const successBackgroundColor = theme.colors.successColor;
  const successBoderColor = theme.colors.successColor;
  const dangerColor = theme.colors.white;
  const dangerBackgroundColor = theme.colors.dangerColor;
  const dangerBorderColor = theme.colors.dangerColor;
  const warningColor = theme.colors.white;
  const warningBackgroundColor = theme.colors.warningColor;
  const warningBorderColor = theme.colors.warningColor;
  const borderWidth = theme.border.widthBase;
  const borderRadius = theme.border.radiusSm;
  const roundBorderRadius = theme.border.radiusMax;
  const plainBackgroundColor = theme.colors.white;
  const { disabledOpacity } = theme.colors;
  const { black } = theme.colors;

  const buttonTypeStyleMaps: Record<Type, ViewStyle> = {
    default: {
      backgroundColor: defaultBackgroundColor,
      borderColor: defaultBorderColor,
      borderStyle: 'solid',
      borderWidth: borderWidth,
    },
    danger: {
      backgroundColor: dangerBackgroundColor,
      borderColor: dangerBorderColor,
      borderStyle: 'solid',
      borderWidth: borderWidth,
    },
    primary: {
      backgroundColor: primaryBackgroundColor,
      borderColor: primaryBorderColor,
      borderStyle: 'solid',
      borderWidth: borderWidth,
    },
    success: {
      backgroundColor: successBackgroundColor,
      borderColor: successBoderColor,
      borderStyle: 'solid',
      borderWidth: borderWidth,
    },
    warning: {
      backgroundColor: warningBackgroundColor,
      borderColor: warningBorderColor,
      borderStyle: 'solid',
      borderWidth: borderWidth,
    },
  };

  const buttonSizeStyleMaps: Record<Size, ViewStyle> = {
    normal: {
      paddingHorizontal: normalPaddingHorizontal,
    },
    small: {
      height: smallHeight,
      paddingHorizontal: smallPaddingHorizontal,
    },
    large: {
      height: largeHeight,
      width: '100%',
    },
    mini: {
      height: miniHeight,
      paddingHorizontal: miniPaddingHorizontal,
    },
  };

  const textSizeStyleMaps: Record<Size, TextStyle> = {
    normal: {
      fontSize: normalFontSize,
    },
    large: {
      fontSize: defaultFontSize,
    },
    mini: {
      fontSize: miniFontSize,
    },
    small: {
      fontSize: smallFontSize,
    },
  };

  const textTypeStyleMaps: Record<Type, TextStyle> = {
    default: {
      color: defaultColor,
    },
    danger: {
      color: plain ? dangerBackgroundColor : dangerColor,
    },
    primary: {
      color: plain ? primaryBackgroundColor : primaryColor,
    },
    success: {
      color: plain ? successBackgroundColor : successColor,
    },
    warning: {
      color: plain ? warningBackgroundColor : warningColor,
    },
  };

  return StyleSheet.create({
    back: {
      backgroundColor: black,
      borderColor: black,
      height: '100%',
      opacity: 0,
      position: 'absolute',
      width: '100%',
    },
    button: {
      alignItems: 'center',
      borderRadius,
      flexDirection: 'row',
      height: defaultHeight,
      justifyContent: 'center',
      overflow: 'hidden',
      position: 'relative',
      ...buttonTypeStyleMaps[type],
      ...buttonSizeStyleMaps[size],
    },
    content: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    disabled: {
      opacity: disabledOpacity,
    },
    icon: {
      color: textTypeStyleMaps[type].color,
      fontSize: textSizeStyleMaps[size].fontSize * 1.2,
    },
    plain: {
      backgroundColor: plainBackgroundColor,
    },

    round: {
      borderRadius: roundBorderRadius,
    },

    square: {
      borderRadius: 0,
    },

    text: {
      ...textTypeStyleMaps[type],
      ...textSizeStyleMaps[size],
    },
  });
};

export default createStyle;
