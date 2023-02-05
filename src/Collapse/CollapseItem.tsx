import React, { forwardRef } from "react";
import { Animated, Text, View } from "react-native";
import Cell from "../Cell";
import { useThemeFactory } from "../Theme";
import { createStyle } from "./style";
import type { CollapseItemProps } from "./type";

const CollapseItem = forwardRef<View, CollapseItemProps>((props, ref) => {
  const {
    children,
    disabled,
    readonly,
    style,
    expanded = false,
    isLink = true,
    onExpand,
    ...rest
  } = props;
  const { styles } = useThemeFactory(createStyle);

  const onPressTitle = () => {
    if (!disabled && !readonly) {
      onExpand?.(!expanded);
    }
  };

  return (
    <View ref={ref} style={style}>
      <Cell
        onPress={onPressTitle}
        {...rest}
        isLink={readonly ? false : isLink}
        pressable={disabled || readonly ? false : rest.pressable}
        disabled={disabled}
        arrowDirection={expanded ? "up" : "down"}
      />
      {expanded && (
        <Animated.View style={styles.contentWrapper}>
          <Text style={styles.content}>{children}</Text>
        </Animated.View>
      )}
    </View>
  );
});

export default CollapseItem;
