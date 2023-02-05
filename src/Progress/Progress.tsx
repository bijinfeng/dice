import React, { forwardRef, useState } from "react";
import type { LayoutChangeEvent } from "react-native";
import { Text, View } from "react-native";
import { useThemeFactory } from "../Theme";
import { createStyle } from "./style";
import type { ProgressProps } from "./type";

const Progress = forwardRef<View, ProgressProps>((props, ref) => {
  const {
    style,
    percentage = 0,
    showPivot = true,
    pivotText,
    ...extra
  } = props;
  const { styles } = useThemeFactory(createStyle, { ...extra, percentage });
  const [pivotWidth, setPivotWidth] = useState<number>(0);

  // 获取进度文字的宽度
  const onPivotLayout = (event: LayoutChangeEvent) => {
    setPivotWidth(event.nativeEvent.layout.width);
  };

  return (
    <View ref={ref} style={[styles.wrapper, style]}>
      <View style={styles.portion} />
      {showPivot && (
        <View
          style={[
            styles.pivotContainer,
            { transform: [{ translateX: -pivotWidth / 2 }] },
          ]}
          onLayout={onPivotLayout}
        >
          <Text style={styles.pivot}>{pivotText ?? `${percentage}%`}</Text>
        </View>
      )}
    </View>
  );
});

Progress.displayName = "Progress";

export default Progress;
