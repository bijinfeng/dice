import type { StyleProp, ViewStyle } from "react-native";
import { StyleSheet } from "react-native";
import type { DashProps } from "./interface";

type Params = Required<
  Pick<DashProps, "dashGap" | "dashLength" | "dashThickness" | "dashColor">
> &
  Pick<DashProps, "style">;

/**
 * 判断主轴是否是横轴
 */
export const isStyleRow = (style: StyleProp<ViewStyle>): boolean => {
  const flatStyle = StyleSheet.flatten(style || {});
  return flatStyle.flexDirection !== "column";
};

/**
 * 生成缓存id
 */
const getDashStyleId = (
  { dashGap, dashLength, dashThickness, dashColor }: Params,
  isRow: boolean
) =>
  `${dashGap}-${dashLength}-${dashThickness}-${dashColor.toString()}-${
    isRow ? "row" : "column"
  }`;

const createDashStyleSheet = (
  { dashGap, dashLength, dashThickness, dashColor }: Params,
  isRow: boolean
) => {
  const idStyle = StyleSheet.create({
    style: {
      backgroundColor: dashColor,
      height: isRow ? dashThickness : dashLength,
      marginBottom: isRow ? 0 : dashGap,
      marginRight: isRow ? dashGap : 0,
      width: isRow ? dashLength : dashThickness,
    },
  });
  return idStyle.style;
};

/**
 * 缓存列表
 */
let stylesStore: Record<string, ReturnType<typeof createDashStyleSheet>> = {};

export const getDashStyle = (
  props: Params
): ReturnType<typeof createDashStyleSheet> => {
  const isRow = isStyleRow(props.style);
  const id = getDashStyleId(props, isRow);

  if (!stylesStore[id]) {
    stylesStore = {
      ...stylesStore,
      [id]: createDashStyleSheet(props, isRow),
    };
  }

  return stylesStore[id];
};
