import type { TextStyle } from "react-native";
import type {
  TypographySize,
  TypographyTitleLevel,
  TypographyType,
} from "./type";

export const getTypeStyle = (
  theme: DiceUI.Theme,
  type?: TypographyType
): TextStyle => {
  if (type === "primary") {
    return { color: theme.typography_primary_color };
  }
  if (type === "danger") {
    return { color: theme.typography_danger_color };
  }
  if (type === "light") {
    return { color: theme.typography_light_color };
  }
  if (type === "secondary") {
    return { color: theme.typography_secondary_color };
  }
  if (type === "success") {
    return { color: theme.typography_success_color };
  }
  if (type === "warning") {
    return { color: theme.typography_warning_color };
  }

  return {};
};

export const getSizeStyle = (
  theme: DiceUI.Theme,
  size: TypographySize,
  isTitle: boolean,
  level: TypographyTitleLevel
): TextStyle => {
  let fontSizeRate = 1;
  let lineHeightRate = 1;

  if (size === "lg" || (isTitle && level === 4)) {
    fontSizeRate = 1.2;
    lineHeightRate = 1.2;
  }
  if (size === "md") {
    fontSizeRate = 1;
    lineHeightRate = 1;
  }
  if (size === "sm") {
    fontSizeRate = 0.9;
    lineHeightRate = 0.9;
  }
  if (size === "xl" || (isTitle && level === 3)) {
    fontSizeRate = 1.4;
    lineHeightRate = 1.4;
  }
  if (size === "xs") {
    fontSizeRate = 0.8;
    lineHeightRate = 0.8;
  }
  if (size === "xxl" || (isTitle && level === 2)) {
    fontSizeRate = 1.6;
    lineHeightRate = 1.6;
  }

  return {
    fontSize: fontSizeRate * theme.typography_font_size,
    lineHeight: lineHeightRate * theme.typography_line_height,
  };
};

export const getLevelStyle = (
  theme: DiceUI.Theme,
  level: TypographyTitleLevel
): TextStyle => {
  if (level === 1) {
    return {
      marginBottom: 25,
      fontSize: 2 * theme.typography_font_size,
      lineHeight: 2 * theme.typography_line_height,
    };
  }
  if (level === 2) {
    return { marginBottom: 20 };
  }
  if (level === 3) {
    return { marginBottom: 15 };
  }
  if (level === 4) {
    return { marginBottom: 10 };
  }
  if (level === 5) {
    return { marginBottom: 6 };
  }
  return {};
};
