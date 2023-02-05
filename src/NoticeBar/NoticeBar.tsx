import React, { forwardRef, useState } from "react";
import { TouchableWithoutFeedback, View } from "react-native";

import Icon, { IconNames } from "../Icon";
import { useThemeFactory } from "../Theme";
import type { NoticeBarInstance, NoticeBarProps } from "./interface";
import Marquee from "./Marquee";
import { createStyle } from "./style";

const NoticeBar = forwardRef<NoticeBarInstance, NoticeBarProps>(
  (props, ref) => {
    const {
      style,
      wrapable,
      background,
      color,
      mode,
      onClose,
      leftIcon,
      rightIcon,
      onPress,
      ...rest
    } = props;
    const [show, setShow] = useState<boolean>(true);

    const { styles, theme } = useThemeFactory(createStyle);

    const iconSize = theme.notice_bar_icon_size;
    const iconColor = color || theme.notice_bar_text_color;

    const getRightIconName = (): IconNames | undefined => {
      if (mode === "closeable") {
        return "cross";
      }
      if (mode === "link") {
        return "arrow";
      }

      return undefined;
    };

    const onPressRightIcon = () => {
      if (mode === "closeable") {
        setShow(false);
        onClose?.();
      }
    };

    const renderLeftIcon = () => {
      if (typeof leftIcon !== "string" && React.isValidElement(leftIcon)) {
        return leftIcon;
      }
      if (leftIcon) {
        return (
          <Icon
            style={styles.leftIcon}
            name={leftIcon as IconNames}
            size={iconSize}
            color={iconColor}
          />
        );
      }
      return null;
    };

    //  右侧图标
    const renderRightIcon = () => {
      if (rightIcon) {
        return rightIcon;
      }
      const name = getRightIconName();
      if (name) {
        return (
          <TouchableWithoutFeedback onPress={onPressRightIcon}>
            <Icon
              name={name}
              style={styles.rightIcon}
              size={iconSize}
              color={iconColor}
            />
          </TouchableWithoutFeedback>
        );
      }
      return null;
    };

    if (!show) {
      return null;
    }

    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View
          style={[
            styles.wrapper,
            wrapable ? styles.wrapable : styles.noWrapable,
            background ? { backgroundColor: background } : undefined,
            style,
          ]}
        >
          {renderLeftIcon()}
          <View style={styles.wrap}>
            <Marquee
              style={[styles.content, color ? { color } : undefined]}
              wrapable={wrapable}
              {...rest}
              text={rest.children || rest.text}
              ref={ref}
            />
          </View>
          {renderRightIcon()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
);

export default NoticeBar;
