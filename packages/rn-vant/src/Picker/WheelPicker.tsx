import React, { useCallback, useMemo, useRef, useLayoutEffect, memo } from 'react';
import isObject from 'lodash-es/isObject';
import { Text, Pressable, ScrollView } from 'react-native';
import type { ViewStyle, NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import { useThemeFactory } from '../Theme';
import type { PickerColumnProps, PickerOption } from './type';
import { createItemStyle } from './style';

const WheelPicker = (props: PickerColumnProps): JSX.Element => {
  const { options, itemHeight, wrapHeight } = props;
  const { styles } = useThemeFactory(createItemStyle);
  const flatListRef = useRef<ScrollView>(null);
  const prevIndex = useRef<number | null>(null);

  const contentContainerStyle = useMemo<ViewStyle>(() => {
    return {
      paddingVertical: wrapHeight / 2 - itemHeight / 2,
    };
  }, [wrapHeight, itemHeight]);

  const scrollToIndex = useCallback(
    (index: number, animated = true) => {
      setTimeout(() => {
        flatListRef.current?.scrollTo({
          y: index * itemHeight,
          animated,
        });
      }, 0);
    },
    [itemHeight]
  );

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

  useLayoutEffect(() => {
    if (prevIndex.current !== props.index) {
      scrollToIndex(props.index, prevIndex.current !== null);
      prevIndex.current = props.index;
    }
  }, [props.index, scrollToIndex]);

  return (
    <ScrollView
      ref={flatListRef}
      showsVerticalScrollIndicator={false}
      onMomentumScrollEnd={onValueChange}
      snapToInterval={itemHeight}
      contentContainerStyle={contentContainerStyle}
    >
      {options?.map((item, index) => (
        <Pressable
          style={[styles.item, { height: itemHeight }]}
          onPress={() => scrollToIndex(index)}
          // eslint-disable-next-line react/no-array-index-key
          key={index}
        >
          {props.optionRender ? (
            props.optionRender(item)
          ) : (
            <Text style={styles.itemText}>{getOptionText(item)}</Text>
          )}
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default memo(WheelPicker);
