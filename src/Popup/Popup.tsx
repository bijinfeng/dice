import React from "react";
import { Pressable, Text, View } from "react-native";
import Icon from "../Icon";
import { useThemeFactory } from "../Theme";
import Dialog from "./Dialog";
import { createStyle } from "./style";
import type { PopupProps } from "./type";

const Popup = (props: PopupProps): JSX.Element => {
  const {
    children,
    round,
    closeable,
    closeIcon = "cross",
    closeIconPosition = "top-right",
    position,
    onClose,
    visible,
    title,
    style,
    ...rest
  } = props;

  const { styles, theme } = useThemeFactory(createStyle, {
    closeIconPosition,
    position,
  });

  return (
    <Dialog {...rest} position={position} visible={visible} onClose={onClose}>
      <View style={[styles.wrapper, round && styles.round, style]}>
        {!!title && <Text style={styles.title}>{title}</Text>}
        {closeable && (
          <Pressable style={styles.icon} onPress={onClose}>
            <Icon
              name={closeIcon}
              size={theme.popup_close_icon_size}
              color={theme.popup_close_icon_color}
            />
          </Pressable>
        )}
        {children}
      </View>
    </Dialog>
  );
};

export default Popup;
