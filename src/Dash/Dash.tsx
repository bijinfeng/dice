/**
 * 自定义虚线组件
 * 代码来自：https://github.com/obipawan/react-native-dash
 */
import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import type { DashProps } from "./interface";
import measureMeHOC, { MeasureMeState } from "./measureMeHOC";
import { getDashStyle, isStyleRow } from "./util";

const Dash: FC<DashProps & MeasureMeState> = (props) => {
  const {
    dashGap = 2,
    dashLength = 4,
    dashThickness = 1,
    dashColor = "black",
    style,
  } = props;

  const isRow = isStyleRow(props.style);
  const length = isRow ? props.width : props.height;
  const n = Math.ceil(length / (dashGap + dashLength));
  const calculatedDashStyles = getDashStyle({
    dashGap,
    dashLength,
    dashThickness,
    dashColor,
    style,
  });

  const dash = [];
  for (let i = 0; i < n; i++) {
    dash.push(<View key={i} style={[calculatedDashStyles, props.dashStyle]} />);
  }

  return (
    <View
      onLayout={props.onLayout}
      style={[props.style, isRow ? styles.row : styles.column]}
    >
      {dash}
    </View>
  );
};

const styles = StyleSheet.create({
  column: { flexDirection: "column" },
  row: { flexDirection: "row" },
});

export default measureMeHOC(Dash);
