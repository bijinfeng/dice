import isNumber from "lodash-es/isNumber";
import type { ReactElement, ReactNode } from "react";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import type { ScrollViewProps } from "react-native";
import {
  findNodeHandle,
  ScrollView,
  Text,
  UIManager,
  View,
} from "react-native";
import { useRefs } from "../hooks";
import { Portal } from "../Portal";
import { useThemeFactory } from "../Theme";
import constants, { COMPONENT_TYPE_KEY } from "../utils/constants";
import { INDEX_ANCHORE_KEY } from "./IndexAnchor";
import IndexBarContext from "./IndexBarContext";
import { createStyle } from "./style";
import type {
  IndexAnchorInstance,
  IndexBarInstance,
  IndexBarProps,
  LayoutRectangle,
} from "./types";

const genAlphabet = () => {
  const indexList = [];
  const charCodeOfA = "A".charCodeAt(0);

  for (let i = 0; i < 26; i += 1) {
    indexList.push(String.fromCharCode(charCodeOfA + i));
  }

  return indexList;
};

const IndexBar = forwardRef<IndexBarInstance, IndexBarProps>((props, ref) => {
  const {
    children,
    sticky = true,
    zIndex,
    highlightColor,
    indexList = genAlphabet(),
    onChange,
    onSelect,
    ...rest
  } = props;
  const { styles } = useThemeFactory(createStyle);
  const [activeAnchor, setActiveAnchor] = useState<string | number>();
  const scrollViewRef = useRef<ScrollView>(null);
  const [refs, setRefs] = useRefs<IndexAnchorInstance>();

  // 获取 ScrollView 相对屏幕的位置
  const getScrollViewOffset = () => {
    return new Promise<{ left: number; top: number }>((resolve) => {
      UIManager.measure(
        findNodeHandle(scrollViewRef.current)!,
        (_x, _y, _width, _height, pageX, pageY) => {
          resolve({ left: pageX, top: pageY });
        }
      );
    });
  };

  const getActiveAnchor = (scrollViewTop: number, rects: LayoutRectangle[]) => {
    const relativeTops = rects.map((it) => it.pageY - scrollViewTop);
    return relativeTops.filter((it) => it < 0).length - 1;
  };

  const getAnchorRects = () =>
    Promise.all(Object.values(refs).map((anchor) => anchor.getRect()));

  const onScroll: ScrollViewProps["onScroll"] = async () => {
    const rects = await getAnchorRects();
    const { top: scrollViewTop, left: scrollViewLeft } =
      await getScrollViewOffset();

    const active = getActiveAnchor(scrollViewTop, rects);
    setActiveAnchor(indexList[active]);

    if (sticky) {
      Object.values(refs).forEach((item, index) => {
        const currentRect = rects[index];
        const currentState = item.state;
        const isActive = active === index;
        if (isActive === currentState.active) return;

        item.updateState({
          top: scrollViewTop,
          left: scrollViewLeft,
          width: currentRect.width,
          height: currentRect.height,
          active: isActive,
        });
      });
    }
  };

  const scrollTo = async (index: number | string) => {
    const activeIndex = indexList.findIndex((it) => it === index);

    if (isNumber(activeIndex)) {
      onSelect?.(index);
      const rects = await getAnchorRects();
      const activeRect = rects[activeIndex];
      scrollViewRef.current?.scrollTo({ y: activeRect.y + 1, animated: false });
    }
  };

  useImperativeHandle(ref, () => ({
    scrollTo,
  }));

  useEffect(() => {
    activeAnchor && onChange?.(activeAnchor);
  }, [activeAnchor]);

  const handleMapChildren = ($children: ReactNode): any => {
    return React.Children.toArray($children)
      .filter(React.isValidElement)
      .map((child: ReactElement) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (child.type?.[COMPONENT_TYPE_KEY] === INDEX_ANCHORE_KEY) {
          return React.cloneElement(child, {
            ref: setRefs(child.props.index),
          });
        }
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
        {indexList?.map((index) => {
          const active = index === activeAnchor;
          const highlightStyle = highlightColor
            ? { color: highlightColor }
            : null;

          return (
            <Text
              key={index}
              suppressHighlighting
              onPress={() => scrollTo(index)}
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
      <ScrollView
        {...rest}
        ref={scrollViewRef}
        style={[styles.wrapper, rest.style]}
        scrollEventThrottle={16}
        onScroll={onScroll}
      >
        <Portal>{renderSidebar()}</Portal>
        {memoChildren}
      </ScrollView>
    </IndexBarContext.Provider>
  );
});

export default IndexBar;
