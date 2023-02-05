import React, { forwardRef, useContext, useMemo, useState } from "react";
import { View } from "react-native";
import { TabsContext } from "./TabsContext";
import type { TabPaneProps } from "./type";

export const TabPane = forwardRef<View, TabPaneProps>((props, ref) => {
  const { children, index, style } = props;
  const parent = useContext(TabsContext);
  const { animated, swipeable, lazyRender, lazyRenderPlaceholder } =
    parent.props;

  const active = parent.selectedIndex === index;

  const [inited, setInited] = useState(() => active);

  const isActive = useMemo(() => {
    if (active && !inited) {
      setInited(true);
    }
    return active;
  }, [active, inited]);

  const show = isActive;
  const shouldRender = inited || !lazyRender;
  const Content = shouldRender ? children : lazyRenderPlaceholder;

  if (animated || swipeable) {
    return <View ref={ref}>{Content}</View>;
  }

  return (
    <View ref={ref} style={[style, { display: show ? "flex" : "none" }]}>
      {Content}
    </View>
  );
});
