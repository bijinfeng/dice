import React, { useMemo } from "react";
import { useThemeFactory } from "../Theme";
import ActionBarContext from "./ActionBarContext";
import type { ActionBarProps } from "./type";

const ActionBar: React.FC<ActionBarProps> = (props) => {
  const { safeAreaInsetBottom = true } = props;
  const { styles } = useThemeFactory(createBarStyles);
  const children = useMemo(
    () => React.Children.toArray(props.children),
    [props.children]
  );

  return (
    <ActionBarContext.Provider value={{ parent: { children } }}>
      <View style={[styles.bar, props.style]} useSafeArea={safeAreaInsetBottom}>
        {React.Children.toArray(props.children)
          .filter(React.isValidElement)
          .map((child: React.ReactElement, index) =>
            React.cloneElement(child, {
              index,
            })
          )}
      </View>
    </ActionBarContext.Provider>
  );
};

export default ActionBar;
