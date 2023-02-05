import color from "color";
import type { ColorValue } from "react-native";

const getContrastingColor = (
  input: ColorValue,
  light: string,
  dark: string
): string => {
  if (typeof input === "string") {
    return color(input).isLight() ? dark : light;
  }

  return light;
};

export default getContrastingColor;
