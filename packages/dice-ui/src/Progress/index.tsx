import React, { forwardRef, useState } from 'react';
import { View, Text } from 'react-native';
import type { LayoutChangeEvent } from 'react-native';
import { useThemeFactory } from '../Theme';
import type { ProgressProps } from './type';
import { createStyle } from './style';

const Progress = forwardRef<View, ProgressProps>((props, ref) => {
  const { style, percentage = 0, showPivot = true, pivotText, ...extra } = props;
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
          style={[styles.pivotContainer, { transform: [{ translateX: -pivotWidth / 2 }] }]}
          onLayout={onPivotLayout}
        >
          <Text style={styles.pivot}>{pivotText ?? `${percentage}%`}</Text>
        </View>
      )}
    </View>
  );
});

Progress.displayName = 'Progress';

export default Progress;
