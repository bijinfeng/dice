import React, { forwardRef, useState, useMemo } from 'react';
import type { ReactNode, ReactElement } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useThemeFactory } from '../Theme';
import { Portal } from '../Portal';
import constants, { COMPONENT_TYPE_KEY } from '../utils/constants';
import type { IndexBarProps, IndexBarInstance } from './types';
import IndexBarContext from './IndexBarContext';
import { INDEX_ANCHORE_KEY } from './IndexAnchor';
import { createStyle } from './style';

const genAlphabet = () => {
  const indexList = [];
  const charCodeOfA = 'A'.charCodeAt(0);

  for (let i = 0; i < 26; i += 1) {
    indexList.push(String.fromCharCode(charCodeOfA + i));
  }

  return indexList;
};

const IndexBar = forwardRef<IndexBarInstance, IndexBarProps>((props, ref) => {
  const {
    children,
    sticky = true,
    stickyOffsetTop = 0,
    zIndex,
    highlightColor,
    indexList = genAlphabet(),
    ...rest
  } = props;
  const { styles } = useThemeFactory(createStyle);
  const [activeAnchor, setActiveAnchor] = useState<string | number>();

  const handleMapChildren = ($children: ReactNode): any => {
    return React.Children.toArray($children)
      .filter(React.isValidElement)
      .map((child: ReactElement) => {
        // if (child.type?.[COMPONENT_TYPE_KEY] === INDEX_ANCHORE_KEY) {
        //   return React.cloneElement(child, {
        //     ref: setRefs(child.props.index),
        //   });
        // }
        if (child.props?.children) {
          const deepMap = handleMapChildren(child.props.children);
          return deepMap.length ? deepMap : child;
        }
        return child;
      });
  };

  const memoChildren = useMemo(() => handleMapChildren(children), [children]);

  const renderSidebar = () => {
    const sidebarHeight = styles.index.lineHeight! * indexList.length;
    const offsetTop = (constants.screenHeight - sidebarHeight) / 2;

    return (
      <View style={styles.sidebar}>
        {indexList?.map(index => {
          const active = index === activeAnchor;
          const highlightStyle = highlightColor ? { color: highlightColor } : null;

          return (
            <Text
              key={index}
              style={[
                styles.index,
                { top: offsetTop },
                active && styles.indexActive,
                active && highlightStyle,
              ]}
            >
              {index}
            </Text>
          );
        })}
      </View>
    );
  };

  return (
    <IndexBarContext.Provider value={{ zIndex, highlightColor, sticky }}>
      <ScrollView {...rest}>
        <Portal>{renderSidebar()}</Portal>
        {memoChildren}
      </ScrollView>
    </IndexBarContext.Provider>
  );
});

export default IndexBar;
