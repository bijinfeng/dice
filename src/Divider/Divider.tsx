import React, { FC, memo } from "react";
import type { ViewStyle } from "react-native";
import { StyleSheet, Text, View } from "react-native";

import Dash from "../Dash";
import { useThemeFactory } from "../Theme";
import type { DividerProps } from "./interface";
import { createStyle } from "./style";

const Divider: FC<DividerProps> = (props) => {
  const {
    children,
    textStyle,
    lineStyle,
    style,
    dashed = false,
    hairline = true,
    contentPosition = "center",
  } = props;
  const { styles } = useThemeFactory(createStyle, {
    dashed,
    hairline,
    contentPosition,
  });

  const styleSummary: ViewStyle = StyleSheet.flatten([styles.divider, style]);

  const renderLine = (extraStyle: ViewStyle = {}) => {
    const styleFlatten = StyleSheet.flatten([
      styles.line,
      extraStyle,
      lineStyle,
    ]);

    return dashed ? (
      <Dash
        style={[styleFlatten, { borderWidth: 0 }]}
        dashColor={styleFlatten.borderColor}
        dashThickness={styleFlatten.borderBottomWidth}
      />
    ) : (
      <View style={styleFlatten} />
    );
  };

  if (children) {
    return (
      <View style={styleSummary}>
        {renderLine(styles.lineLeft)}
        <Text style={[styles.text, textStyle]}>{children}</Text>
        {renderLine(styles.lineRight)}
      </View>
    );
  }

  return <View style={styleSummary}>{renderLine()}</View>;
};

export default memo(Divider);
