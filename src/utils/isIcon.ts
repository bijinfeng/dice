import isString from "lodash-es/isString";
import type { IconNames } from "../Icon";

export const isIcon = (icon: IconNames | React.ReactNode): icon is IconNames =>
  isString(icon);
