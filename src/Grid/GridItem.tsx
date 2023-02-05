import React, { memo, useMemo } from "react";
import { Text, View, ViewStyle } from "react-native";
import Badge from "../Badge";
import { useThemeFactory } from "../Theme";
import TouchableOpacity from "../TouchableOpacity";
import { devWarning } from "../utils/devLog";
import { createItemStyle } from "./style";
import type { GridItemProps, GridProps } from "./type";

type InternalProps = {
  parent?: GridProps;
  index?: number;
};

const GridItem = (props: GridItemProps & InternalProps): JSX.Element => {
  const { parent = {} } = props;
  const { styles, theme } = useThemeFactory(createItemStyle, parent, props);
  const {
    children,
    style,
    index = 0,
    icon,
    badge,
    iconColor = theme.grid_item_text_color,
    text,
    contentStyle,
    onPress,
    ...rest
  } = props;
  const {
    square,
    gutter,
    columnNum = 4,
    iconSize = theme.grid_item_item_icon_size,
  } = parent;

  if (!parent) {
    devWarning("GridItem", "must be a child component of <Grid>.");
  }

  const rootStyle = useMemo<ViewStyle>(() => {
    const percent = `${100 / +columnNum}%`;
    const internalStyle: ViewStyle = { flexBasis: percent };

    if (square) {
      internalStyle.paddingTop = percent;
    } else if (gutter) {
      internalStyle.paddingRight = gutter;

      if (index >= columnNum) {
        internalStyle.marginTop = gutter;
      }
    }
    return internalStyle;
  }, [columnNum]);

  const newContentStyle = useMemo(() => {
    if (square && gutter) {
      return {
        ...contentStyle,
        right: gutter,
        bottom: gutter,
        height: "auto",
      };
    }
    return contentStyle;
  }, [gutter, columnNum, contentStyle]);

  const renderIcon = () => {
    if (!icon) return null;

    return (
      <Badge {...badge}>
        {React.cloneElement(icon as React.ReactElement, {
          color: iconColor,
          size: iconSize,
        })}
      </Badge>
    );
  };

  const renderText = () => {
    if (React.isValidElement(text)) return text;
    if (text) {
      return <Text style={styles.text}>{text}</Text>;
    }
    return null;
  };

  const renderContent = () => {
    if (children) return children;

    return (
      <>
        {renderIcon()}
        {renderText()}
      </>
    );
  };

  return (
    <View
      style={[styles.item, style, rootStyle, !!square && styles.square]}
      {...rest}
    >
      <TouchableOpacity
        disabled={!onPress}
        activeBackgroundColor={theme.grid_item_content_active_color}
        style={[styles.content, newContentStyle]}
        onPress={onPress}
      >
        {renderContent()}
      </TouchableOpacity>
    </View>
  );
};

export default memo(GridItem);
