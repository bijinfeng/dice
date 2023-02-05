import React, { FC, memo } from "react";
import { Text, View } from "react-native";
import { useThemeFactory } from "../Theme";
import Circular from "./Circular";
import Spinner from "./Spinner";
import { createStyle } from "./style";
import type { LoadingProps } from "./type";

const Loading: FC<LoadingProps> = (props) => {
  const { styles, theme } = useThemeFactory(createStyle);
  const {
    children,
    size = 30,
    type = "circular",
    vertical,
    textColor,
    textSize,
    style,
    color = theme.gray_5,
    ...rest
  } = props;

  return (
    <View
      style={[
        { flexDirection: vertical ? "column" : "row", alignItems: "center" },
        style,
      ]}
      {...rest}
    >
      {type === "circular" ? (
        <Circular color={color} size={size} />
      ) : (
        <Spinner color={color} size={size} />
      )}
      {children && (
        <Text
          style={[
            vertical ? styles.verticalText : styles.text,
            { color: color ?? textColor, fontSize: textSize },
          ]}
        >
          {children}
        </Text>
      )}
    </View>
  );
};

export default memo(Loading);
