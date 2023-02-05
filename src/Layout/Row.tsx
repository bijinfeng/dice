import React, { FC, useMemo } from "react";
import { FlexStyle, View, ViewStyle } from "react-native";
import RowContext from "./RowContext";

type JustifyType =
  | "start"
  | "end"
  | "center"
  | "space-around"
  | "space-between";
type AlignType = "top" | "center" | "bottom";

interface Props {
  /**
   * 列元素之间的间距（单位为 px）
   */
  gutter?: number;
  /**
   * 主轴对齐方式，可选值为 start end center space-around space-between
   * @default start
   */
  justify?: JustifyType;
  /**
   * 交叉轴对齐方式，可选值为 top center bottom
   * @default top
   */
  align?: AlignType;
  /**
   * 是否自动换行
   * @default true
   */
  wrap?: boolean;
  /**
   * 组件样式
   */
  style?: ViewStyle;
}

const justifyMaps: Record<JustifyType, FlexStyle["justifyContent"]> = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
  "space-around": "space-around",
  "space-between": "space-between",
};

const alignMaps: Record<AlignType, FlexStyle["alignItems"]> = {
  top: "flex-start",
  bottom: "flex-end",
  center: "center",
};

const LayoutRow: FC<Props> = ({
  gutter,
  justify = "start",
  align = "top",
  wrap = true,
  style,
  children,
}) => {
  const justifyContent = justifyMaps[justify];
  const alignItems = alignMaps[align];
  const flexWrap = wrap ? "wrap" : "nowrap";

  const rowContext = useMemo(() => ({ gutter }), [gutter]);

  const rowStyle: ViewStyle = gutter
    ? { marginLeft: gutter / -2, marginRight: gutter / -2 }
    : {};

  return (
    <RowContext.Provider value={rowContext}>
      <View
        style={[
          {
            display: "flex",
            flexDirection: "row",
            justifyContent,
            alignItems,
            flexWrap,
          },
          rowStyle,
          style,
        ]}
      >
        {children}
      </View>
    </RowContext.Provider>
  );
};

LayoutRow.displayName = "Layout.Row";

export default LayoutRow;
