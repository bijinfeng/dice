import React, { memo, useContext, useRef, useMemo } from 'react';
import { ScrollView, View, Text, Pressable, Animated } from 'react-native';
import type { ViewStyle } from 'react-native';
import isFunction from 'lodash-es/isFunction';
import isEmpty from 'lodash-es/isEmpty';
import { useUpdateEffect } from '../../hooks';
import { TabsContext } from '../TabsContext';
import { useThemeFactory } from '../../Theme';
import Badge from '../../Badge';
import createStyle from './style';
import type { TabPaneProps, TabsProps } from '../type';
import useScrollItem, { ItemLayout } from './useScrollItem';

interface TabBarProps extends Pick<TabsProps, 'type' | 'duration'> {
  navs: TabPaneProps[];
}

const TabBar = (props: TabBarProps): JSX.Element => {
  const { navs, type = 'line', duration } = props;
  const { styles } = useThemeFactory(createStyle);
  const { selectedIndex, setCurrentIndex } = useContext(TabsContext);
  const targetPage = useRef(new Animated.Value(selectedIndex)).current;

  const {
    scrollViewRef,
    onItemContainerLayout,
    onItemLayout,
    itemsLayout,
    onContentSizeChange,
    onLayout,
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

  const renderText = (item: TabPaneProps) => {
    const isActive = false;
    const text = (
      <Text style={styles.text}>{isFunction(item.title) ? item.title(isActive) : item.title}</Text>
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

    const left = targetPage.interpolate({
      inputRange,
      outputRange: itemsLayout.map((v: ItemLayout) => v.containerLeft),
    });
    const width = targetPage.interpolate({
      inputRange,
      outputRange: itemsLayout.map((v: ItemLayout) => v.width),
    });
    const marginHorizontal = targetPage.interpolate({
      inputRange,
      outputRange: itemsLayout.map((v: ItemLayout) => v.left),
    });

    return { width, left, marginHorizontal };
  }, [itemsLayout]);

  return (
    <ScrollView
      ref={scrollViewRef}
      contentContainerStyle={[styles.nav, type === 'line' ? styles.navLine : styles.navCard]}
      onContentSizeChange={onContentSizeChange}
      onLayout={onLayout}
    >
      {navs.map((item, idx) => (
        <Pressable
          key={item.key}
          style={styles.tab}
          onPress={() => setCurrentIndex(idx)}
          onLayout={e => onItemContainerLayout(e, idx)}
        >
          <View onLayout={e => onItemLayout(e, idx)}>{renderText(item)}</View>
        </Pressable>
      ))}
      {type === 'line' && <Animated.View style={[styles.line, indicatorStyle]} />}
    </ScrollView>
  );
};

export default memo(TabBar);
