import React, { memo, useContext, useRef, useMemo, useEffect } from 'react';
import { ScrollView, View, Text, Pressable, Animated } from 'react-native';
import type { ViewStyle } from 'react-native';
import isFunction from 'lodash-es/isFunction';
import isEmpty from 'lodash-es/isEmpty';
import { useUpdateEffect } from '../../hooks';
import { TabsContext } from '../TabsContext';
import { useThemeFactory } from '../../Theme';
import Badge from '../../Badge';
import createStyle from './style';
import type { TabPaneProps } from '../type';
import useScrollItem, { ItemLayout } from './useScrollItem';

interface TabBarProps {
  navs: TabPaneProps[];
}

const TabBar = ({ navs }: TabBarProps): JSX.Element => {
  const { selectedIndex, setCurrentIndex, props } = useContext(TabsContext);
  const {
    type = 'line',
    duration = 300,
    swipeThreshold = 5,
    ellipsis,
    shrink = false,
    lineWidth = 40,
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

  const renderText = (item: TabPaneProps, idx: number) => {
    const isActive = idx === selectedIndex;

    const text = (
      <Text
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

    if (lineWidth === 'auto') {
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
        outputRange: itemsLayout.map((v: ItemLayout) => (v.containerWidth - lineWidth) / 2),
      });
    }

    return { width, left, marginHorizontal };
  }, [itemsLayout, lineWidth]);

  return (
    <ScrollView
      ref={scrollViewRef}
      contentContainerStyle={[
        styles.nav,
        type === 'line' ? styles.navLine : styles.navCard,
        !!props.background && { backgroundColor: props.background },
      ]}
      onContentSizeChange={onContentSizeChange}
      onLayout={onLayout}
      horizontal
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={16}
      decelerationRate="fast"
    >
      {navs.map((item, idx) => (
        <Pressable
          key={item.key}
          disabled={item.disabled}
          style={styles.tab}
          onPress={() => setCurrentIndex(idx)}
          onLayout={e => onItemContainerLayout(e, idx)}
        >
          <View onLayout={e => onItemLayout(e, idx)}>{renderText(item, idx)}</View>
        </Pressable>
      ))}
      {type === 'line' && (
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
