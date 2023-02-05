import { Platform, StyleSheet } from "react-native";

const webBoxShadow =
  "0 3px 1px 0 rgba(0, 0, 0, .05), 0 2px 2px 0 rgba(0, 0, 0, .1), 0 3px 3px 0 rgba(0, 0, 0, .05)";

const createStyle = (theme: DiceUI.Theme, size?: number) => {
  const unitSize = size || theme.switch_size;
  const switchWidth = unitSize * theme.switch_width_ratio;
  const switchHeight = unitSize * theme.switch_height_ratio;
  const nodeSize =
    unitSize * theme.switch_node_size_ratio - theme.switch_border_width * 2;

  return StyleSheet.create({
    disabled: {
      opacity: theme.switch_disabled_opacity,
    },
    node: {
      alignItems: "center",
      backgroundColor: theme.switch_node_background_color,
      borderRadius: nodeSize,
      height: nodeSize,
      justifyContent: "center",
      width: nodeSize,
      ...Platform.select({
        android: {
          elevation: 2,
        },
        ios: {
          shadowColor: "rgba(0,0,0,0.2)",
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 1,
          shadowRadius: 2,
        },
        web: {
          boxShadow: webBoxShadow,
        },
      }),
    },
    nodeLeft: {
      left: theme.switch_border_width,
    },
    nodeRight: {
      left: switchWidth - nodeSize - theme.switch_border_width * 2,
    },
    on: {
      backgroundColor: theme.switch_on_background_color,
    },
    switch: {
      backgroundColor: theme.switch_background_color,
      borderColor: theme.switch_border_color,
      borderRadius: switchHeight / 2,
      borderWidth: theme.switch_border_width,
      height: switchHeight,
      justifyContent: "center",
      width: switchWidth,
    },
  });
};

export default createStyle;
