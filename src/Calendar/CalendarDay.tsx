import React, { memo, useMemo } from "react";
import { Pressable, Text, TextStyle, View } from "react-native";
import { useThemeFactory } from "../Theme";
import { createDayStyle } from "./style";
import type { CalendarDayProps } from "./type";

const CalendarDay = (props: CalendarDayProps): JSX.Element => {
  const {
    item,
    color,
    rowHeight,
    topInfoRender,
    bottomInfoRender,
    index,
    offset,
  } = props;
  const { type, topInfo, bottomInfo, text } = item;
  const { styles } = useThemeFactory(createDayStyle);

  const style = useMemo<TextStyle>(() => {
    const iternalStyle: TextStyle = {};

    if (rowHeight) {
      iternalStyle.height = rowHeight;
    }

    if (item.type === "placeholder") {
      iternalStyle.width = "100%";
      return iternalStyle;
    }

    if (index === 0) {
      iternalStyle.marginLeft = `${(100 * offset!) / 7}%`;
    }

    if (color) {
      switch (item.type) {
        case "end":
        case "start":
        case "start-end":
        case "multiple-middle":
        case "multiple-selected":
          iternalStyle.backgroundColor = color;
          break;
        case "middle":
          iternalStyle.color = color;
          break;
        default:
          break;
      }
    }

    return iternalStyle;
  }, [item, index, color, offset, rowHeight]);

  const renderContent = () => {
    const Nodes = (
      <>
        {(topInfo || topInfoRender) && (
          <Text style={styles.topInfo}>
            {topInfoRender ? topInfoRender(item) : topInfo}
          </Text>
        )}
        <Text>{text}</Text>
        {(bottomInfo || bottomInfoRender) && (
          <Text style={styles.bottomInfo}>
            {bottomInfoRender ? bottomInfoRender(item) : bottomInfo}
          </Text>
        )}
      </>
    );

    if (type === "selected") {
      return (
        <View
          style={[
            styles.selectedDay,
            {
              width: rowHeight,
              height: rowHeight,
              backgroundColor: color,
            },
          ]}
        >
          {Nodes}
        </View>
      );
    }

    return Nodes;
  };

  if (type === "placeholder") {
    return <View style={[styles.day, style]} />;
  }

  return (
    <Pressable
      style={[styles.day, style]}
      disabled={type === "disabled"}
      onPress={() => props.onClick?.(item)}
    >
      {renderContent()}
    </Pressable>
  );
};

export default memo(CalendarDay);
