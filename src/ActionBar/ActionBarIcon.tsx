import React from "react";
import { Text, View } from "react-native";
import Badge from "../Badge";
import { useThemeFactory } from "../Theme";
import TouchableOpacity from "../TouchableOpacity";
import { createIconStyle } from "./style";
import type { ActionBarIconProps } from "./type";

const ActionBarIcon: React.FC<ActionBarIconProps> = (props) => {
  const { styles, theme } = useThemeFactory(createIconStyle);
  const { badge, icon } = props;

  const renderIcon = () => {
    return badge ? <Badge {...badge}>{icon}</Badge> : icon;
  };

  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.container, props.style]}
      backgroundColor={theme.action_bar_icon_background}
      activeBackgroundColor={theme.action_bar_icon_active_color}
    >
      <View style={[styles.icon, badge?.style]}>{renderIcon()}</View>
      <Text style={styles.text}>{props.children || props.text}</Text>
    </TouchableOpacity>
  );
};

export default ActionBarIcon;
