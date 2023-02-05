import isEmpty from "lodash-es/isEmpty";
import isFunction from "lodash-es/isFunction";
import React, {
  memo,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from "react";
import type { ViewStyle } from "react-native";
import { Animated, Pressable, ScrollView, Text, View } from "react-native";
import Badge from "../Badge";
import { useUpdateEffect } from "../hooks";
import { useThemeFactory } from "../Theme";
import createStyle from "./style";
import { TabsContext } from "./TabsContext";
import type { TabPaneProps } from "./type";
import useScrollItem, { ItemLayout } from "./useScrollItem";

interface TabBarProps {
  navs: TabPaneProps[];
}

const TabBar = ({ navs }: TabBarProps): JSX.Element => {
  const { selectedIndex, setCurrentIndex, props } = useContext(TabsContext);
  const {
    type = "line",
    duration = 300,
    swipeThreshold = 5,
    ellipsis,
    shrink = false,
    lineWidth = 40,
    onClickTab,
  } = props;
  const targetPage = useRef(new Animated.Value(selectedIndex)).current;

  const {
    scrollViewRef,
    onItemContainerLayout,
    onItemLayout,
    itemsLayout,
    onContentSizeChange,
    onLayout,
    focusIndex,
  } = useScrollItem<ScrollView>({
    itemsCount: navs.length,
  });

  useUpdateEffect(() => {
    Animated.timing(targetPage, {
      toValue: selectedIndex,
      duration,
      useNativeDriver: false,
    }).start();
  }, [selectedIndex, duration]);

  useEffect(() => {
    focusIndex(selectedIndex, duration > 0);
  }, [focusIndex, selectedIndex, duration]);

  // 导航是否可以滚动
  const scrollable = useMemo<boolean>(
    () => navs.length > swipeThreshold || !ellipsis || shrink,
    [navs, swipeThreshold, ellipsis, shrink]
  );

  const { styles } = useThemeFactory(createStyle, shrink, scrollable);

  const handleClickTab = useCallback(
    (item: TabPaneProps, idx: number) => {
      onClickTab?.(idx, !!item.disabled);
      !item.disabled && setCurrentIndex(idx);
    },
    [setCurrentIndex]
  );

  const renderText = (item: TabPaneProps, idx: number) => {
    const isActive = idx === selectedIndex;

    const text = (
      <Text
        numberOfLines={1}
        ellipsizeMode={ellipsis ? "tail" : undefined}
        style={[
          styles.text,
          isActive && styles.textActive,
          !!props.titleInactiveColor && {
            color: props.titleInactiveColor,
          },
          !!props.titleActiveColor &&
            isActive && {
              color: props.titleActiveColor,
            },
          item.disabled && styles.textDisabled,
          item.titleStyle,
        ]}
      >
        {isFunction(item.title) ? item.title(isActive) : item.title}
      </Text>
    );

    if (item.dot || !isEmpty(item.badge)) {
      return (
        <Badge content={item.badge} dot={item.dot}>
          {text}
        </Badge>
      );
    }

    return text;
  };

  const indicatorStyle = useMemo<Animated.WithAnimatedObject<ViewStyle>>(() => {
    const inputRange = itemsLayout.map((_v: ItemLayout, i: number) => i);
    let width: number | Animated.AnimatedInterpolation;
    let marginHorizontal: number | Animated.AnimatedInterpolation;

    const left = targetPage.interpolate({
      inputRange,
      outputRange: itemsLayout.map((v: ItemLayout) => v.containerLeft),
    });

    if (lineWidth === "auto") {
      width = targetPage.interpolate({
        inputRange,
        outputRange: itemsLayout.map((v: ItemLayout) => v.width),
      });
      marginHorizontal = targetPage.interpolate({
        inputRange,
        outputRange: itemsLayout.map((v: ItemLayout) => v.left),
      });
    } else {
      width = lineWidth;
      marginHorizontal = targetPage.interpolate({
        inputRange,
        outputRange: itemsLayout.map(
          (v: ItemLayout) => (v.containerWidth - lineWidth) / 2
        ),
      });
    }

    return { width, left, marginHorizontal };
  }, [itemsLayout, lineWidth]);

  return (
    <ScrollView
      ref={scrollViewRef}
      contentContainerStyle={[
        styles.nav,
        type === "line" ? styles.navLine : styles.navCard,
        !!props.background && { backgroundColor: props.background },
      ]}
      onContentSizeChange={onContentSizeChange}
      onLayout={onLayout}
      horizontal
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={16}
      decelerationRate="fast"
      alwaysBounceHorizontal={false}
    >
      {navs.map((item, idx) => (
        <Pressable
          key={item.key}
          style={styles.tab}
          onPress={() => handleClickTab(item, idx)}
          onLayout={(e) => onItemContainerLayout(e, idx)}
        >
          <View onLayout={(e) => onItemLayout(e, idx)}>
            {renderText(item, idx)}
          </View>
        </Pressable>
      ))}
      {type === "line" && (
        <Animated.View
          style={[
            styles.line,
            indicatorStyle,
            !!props.color && { backgroundColor: props.color },
            !!props.lineHeight && { height: props.lineHeight },
          ]}
        />
      )}
    </ScrollView>
  );
};

export default memo(TabBar);
