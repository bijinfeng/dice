import { useCallback, useState, useRef } from 'react';
import times from 'lodash-es/times';
import type { LayoutChangeEvent } from 'react-native';
import useScrollTo from '../../hooks/useScrollTo';
import type { ScrollToSupportedViews } from '../../hooks/useScrollTo';

export interface ItemLayout {
  containerWidth: number;
  containerLeft: number;
  width: number;
  left: number;
}

interface ScrollItemProps {
  itemsCount: number;
}

interface ScrollItemResultProps<T extends ScrollToSupportedViews> {
  onItemLayout: (event: LayoutChangeEvent, index: number) => void;
  onItemContainerLayout: (event: LayoutChangeEvent, index: number) => void;
  onContentSizeChange: (contentWidth: number, contentHeight: number) => void;
  onLayout: (event: LayoutChangeEvent) => void;
  focusIndex: (index: number, animated?: boolean) => void;
  itemsLayout: ItemLayout[];
  scrollViewRef: React.RefObject<T>;
}

const getInitial = (count: number) =>
  times(count, () => ({ containerWidth: 0, containerLeft: 0, left: 0, width: 0 }));

const useScrollItem = <T extends ScrollToSupportedViews>(
  props: ScrollItemProps
): ScrollItemResultProps<T> => {
  const { itemsCount } = props;
  const [itemsLayout, setItemsLayout] = useState<ItemLayout[]>(getInitial(itemsCount));
  const scrollViewRef = useRef<T>(null);
  const itemsLayoutRef = useRef<ItemLayout[]>(getInitial(itemsCount));
  const itemsRenders = useRef<number>(0);
  const containerSize = useRef<number>(0);

  const { scrollTo, onContentSizeChange, onLayout } = useScrollTo<T>({
    scrollViewRef,
  });

  const setSnapBreakpoints = useCallback(
    (params: Partial<ItemLayout>, index: number) => {
      itemsRenders.current += 1;
      itemsLayoutRef.current[index] = {
        ...itemsLayoutRef.current[index],
        ...params,
      };

      if (itemsRenders.current >= itemsCount * 2) {
        setItemsLayout([...itemsLayoutRef.current]);
      }
    },
    [itemsCount]
  );

  const onItemLayout = useCallback(
    (event: LayoutChangeEvent, index: number) => {
      const { layout } = event.nativeEvent;
      setSnapBreakpoints({ left: layout.x, width: layout.width }, index);
    },
    [setSnapBreakpoints]
  );

  const onItemContainerLayout = useCallback(
    (event: LayoutChangeEvent, index: number) => {
      const { layout } = event.nativeEvent;
      setSnapBreakpoints({ containerLeft: layout.x, containerWidth: layout.width }, index);
    },
    [setSnapBreakpoints]
  );

  const onScrollLayout = useCallback(
    (event: LayoutChangeEvent) => {
      containerSize.current = event.nativeEvent.layout.width;
      onLayout(event);
    },
    [onLayout]
  );

  const focusIndex = useCallback((index: number, animated = true) => {
    const target = itemsLayoutRef.current[index];
    const targetOffset = target.containerLeft + target.containerWidth / 2;
    const containerCenter = containerSize.current / 2;
    if (targetOffset <= containerCenter) {
      scrollTo(0, animated);
    } else {
      scrollTo(targetOffset - containerCenter, animated);
    }
  }, []);

  return {
    scrollViewRef,
    itemsLayout,
    onItemLayout,
    onItemContainerLayout,
    onContentSizeChange,
    onLayout: onScrollLayout,
    focusIndex,
  };
};

export default useScrollItem;
