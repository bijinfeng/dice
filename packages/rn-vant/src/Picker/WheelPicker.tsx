import React, { useCallback, useMemo, useRef, useEffect, memo } from 'react';
import isObject from 'lodash-es/isObject';
import { FlatList, ListRenderItem, Text, Pressable } from 'react-native';
import type { ViewStyle, NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import { useThemeFactory } from '../Theme';
import type { PickerColumnProps, PickerOption } from './type';
import { createItemStyle } from './style';

const WheelPicker = (props: PickerColumnProps): JSX.Element => {
  const { options, itemHeight, wrapHeight } = props;
  const { styles } = useThemeFactory(createItemStyle);
  const flatListRef = useRef<FlatList>(null);
  const prevIndex = useRef(props.index);

  const getItemLayout = useCallback(
    (_data: any, index: number) => {
      return { length: itemHeight, offset: itemHeight * index, index };
    },
    [itemHeight]
  );

  const contentContainerStyle = useMemo<ViewStyle>(() => {
    return {
      paddingVertical: wrapHeight / 2 - itemHeight / 2,
    };
  }, [wrapHeight, itemHeight]);

  const scrollToIndex = useCallback((index: number, animated = true) => {
    flatListRef.current?.scrollToIndex({ index, animated });
  }, []);

  const handleChange = useCallback(
    (index: number) => {
      prevIndex.current = index;
      props.onChange?.(index);
    },
    [props.onChange]
  );

  const onValueChange = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const nextIndex = Math.round(event.nativeEvent.contentOffset.y / itemHeight);
      if (nextIndex !== prevIndex.current) {
        handleChange(nextIndex);
      }
    },
    [itemHeight, handleChange]
  );

  const getOptionText = (option: PickerOption) => {
    if (isObject(option) && props.textKey in option) {
      return option[props.textKey];
    }
    return option;
  };

  const renderItem: ListRenderItem<PickerOption> = ({ item, index }) => {
    const text = getOptionText(item);

    return (
      <Pressable style={[styles.item, { height: itemHeight }]} onPress={() => scrollToIndex(index)}>
        {props.optionRender ? (
          props.optionRender(item)
        ) : (
          <Text style={styles.itemText}>{text}</Text>
        )}
      </Pressable>
    );
  };

  useEffect(() => {
    if (prevIndex.current !== props.index) {
      scrollToIndex(props.index);
      prevIndex.current = props.index;
    }
  }, [props.index, scrollToIndex]);

  return (
    <FlatList<PickerOption>
      ref={flatListRef}
      showsVerticalScrollIndicator={false}
      data={options}
      renderItem={renderItem}
      keyExtractor={(_, index) => `key-${index}`}
      getItemLayout={getItemLayout}
      onMomentumScrollEnd={onValueChange}
      snapToInterval={itemHeight}
      contentContainerStyle={contentContainerStyle}
      initialScrollIndex={props.index}
    />
  );
};

export default memo(WheelPicker);
