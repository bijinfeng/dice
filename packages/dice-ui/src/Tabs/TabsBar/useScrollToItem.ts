import { useState, useCallback, useEffect, useRef, RefObject } from 'react';
import times from 'lodash-es/times';
import isUndefined from 'lodash-es/isUndefined';
import includes from 'lodash-es/includes';
import isEmpty from 'lodash-es/isEmpty';
import type { LayoutChangeEvent } from 'react-native';
import useScrollTo from '../../hooks/useScrollTo';
import type { ScrollToSupportedViews, ScrollToResultProps } from '../../hooks/useScrollTo';

// eslint-disable-next-line no-shadow
export enum OffsetType {
  CENTER = 'CENTER',
  DYNAMIC = 'DYNAMIC',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

export type ScrollToItemProps<T extends ScrollToSupportedViews> = {
  scrollViewRef?: RefObject<T>;
  /**
   * The number of items
   */
  itemsCount: number;
  /**
   * The selected item's index
   */
  selectedIndex?: number;
  /**
   * The container width, should update on orientation change
   */
  containerWidth: number;
  /**
   * Where would the item be located (default to CENTER)
   */
  offsetType?: OffsetType;
  /**
   * Add a margin to the offset (default to true)
   * This gives a better UX
   * Not relevant to OffsetType.CENTER
   */
  addOffsetMargin?: boolean;
  /**
   * How much space (padding \ margin) is there on the left\right of the items
   */
  outerSpacing?: number;
  /**
   * How much space (padding \ margin) is there between each item
   */
  innerSpacing?: number;
};

// TODO: this is what I want, is there a better way to do it?
type Offsets = {
  CENTER: number[];
  LEFT: number[];
  RIGHT: number[];
};

export type ScrollToItemResultProps<T extends ScrollToSupportedViews> = Pick<
  ScrollToResultProps<T>,
  'scrollViewRef'
> & {
  /**
   * This should be called by each ot the items' onLayout
   */
  onItemLayout: (event: LayoutChangeEvent, index: number) => void;
  /**
   * The items' width as share animated value
   */
  itemsWidths: number[];
  /**
   * The items' offsets as share animated value
   */
  itemsOffsets: number[];
  /**
   * Use in order to focus the item with the specified index (use when the selectedIndex is not changed)
   */
  focusIndex: (index: number, animated?: boolean) => void;
  /**
   * Use in order to reset the data.
   */
  reset: () => void;
  /**
   * onContentSizeChange callback (should be set to your onContentSizeChange).
   * Needed for RTL support on Android.
   */
  onContentSizeChange: (contentWidth: number, contentHeight: number) => void;
  /**
   * onLayout callback (should be set to your onLayout).
   * Needed for RTL support on Android.
   */
  onLayout: (event: LayoutChangeEvent) => void;
};

const useScrollToItem = <T extends ScrollToSupportedViews>(
  props: ScrollToItemProps<T>
): ScrollToItemResultProps<T> => {
  const {
    scrollViewRef: propsScrollViewRef,
    itemsCount,
    selectedIndex,
    containerWidth,
    offsetType = OffsetType.CENTER,
    addOffsetMargin = true,
    outerSpacing = 0,
    innerSpacing = 0,
  } = props;
  const itemsWidthsRef = useRef<(number | null)[]>(times(itemsCount, () => null));
  const itemsOffsetsRef = useRef<number[]>(times(itemsCount, () => 0));
  const [itemsWidths, setItemsWidths] = useState<number[]>(times(itemsCount, () => 0));
  const [itemsOffsets, setItemsOffset] = useState<number[]>(times(itemsCount, () => 0));
  const currentIndex = useRef<number>(selectedIndex || 0);
  const [offsets, setOffsets] = useState<Offsets>({ CENTER: [], LEFT: [], RIGHT: [] });
  const { scrollViewRef, scrollTo, onContentSizeChange, onLayout } = useScrollTo<T>({
    scrollViewRef: propsScrollViewRef,
  });

  const setSnapBreakpoints = useCallback(
    (widths: number[]) => {
      if (isEmpty(widths)) {
        return;
      }

      const screenCenter = containerWidth / 2;
      let index = 0;
      const centeredOffsets = [];
      let currentCenterOffset = outerSpacing;
      const leftOffsets = [];
      leftOffsets.push(outerSpacing - innerSpacing);
      const rightOffsets = [];
      rightOffsets.push(-containerWidth + widths[0] + outerSpacing + innerSpacing);
      while (index < itemsCount) {
        if (index > 0) {
          itemsOffsetsRef.current[index] = itemsOffsetsRef.current[index - 1] + widths[index - 1];
        }

        /* calc center, left and right offsets */
        centeredOffsets[index] = currentCenterOffset - screenCenter + widths[index] / 2;
        ++index;
        currentCenterOffset += widths[index - 1] + innerSpacing;
        leftOffsets[index] = leftOffsets[index - 1] + widths[index - 1] + innerSpacing;
        rightOffsets[index] = rightOffsets[index - 1] + widths[index] + innerSpacing;
      }

      if (addOffsetMargin) {
        index = 1;
        while (index < itemsCount - 1) {
          leftOffsets[index] -= widths[index - 1];
          rightOffsets[index] += widths[index + 1] + innerSpacing;
          ++index;
        }
      }

      setOffsets({ CENTER: centeredOffsets, LEFT: leftOffsets, RIGHT: rightOffsets }); // default for DYNAMIC is CENTER
    },
    [itemsCount, outerSpacing, innerSpacing, addOffsetMargin, containerWidth]
  );

  const onItemLayout = useCallback(
    (event: LayoutChangeEvent, index: number) => {
      const { width } = event.nativeEvent.layout;
      itemsWidthsRef.current[index] = width;
      if (!includes(itemsWidthsRef.current, null)) {
        setSnapBreakpoints(itemsWidthsRef.current as number[]);
        setItemsWidths(itemsWidthsRef.current as number[]);
        setItemsOffset(itemsOffsetsRef.current);
      }
    },
    [setSnapBreakpoints]
  );

  const focusIndex = useCallback(
    (index: number, animated = true) => {
      if (index >= 0 && offsets.CENTER.length > index) {
        if (offsetType !== OffsetType.DYNAMIC) {
          scrollTo(offsets[offsetType][index], animated);
        } else {
          const movingLeft = index < currentIndex.current;
          currentIndex.current = index;
          scrollTo(
            movingLeft ? offsets[OffsetType.RIGHT][index] : offsets[OffsetType.LEFT][index],
            animated
          );
        }
      }
    },
    [offsets, offsetType, scrollTo]
  );

  useEffect(() => {
    if (!isUndefined(selectedIndex)) {
      focusIndex(selectedIndex, false);
    }
  }, [selectedIndex, focusIndex]);

  const reset = useCallback(() => {
    itemsWidthsRef.current = times(itemsCount, () => null);
    setItemsWidths(times(itemsCount, () => 0));
    setItemsOffset(times(itemsCount, () => 0));
    setOffsets({ CENTER: [], LEFT: [], RIGHT: [] });
  }, [itemsCount]);

  return {
    scrollViewRef,
    onItemLayout,
    itemsWidths,
    itemsOffsets,
    focusIndex,
    reset,
    onContentSizeChange,
    onLayout,
  };
};

useScrollToItem.offsetType = OffsetType;

export default useScrollToItem;
