import { RefObject, useCallback, useRef } from 'react';
import isUndefined from 'lodash-es/isUndefined';
import isFunction from 'lodash-es/isFunction';
import get from 'lodash-es/get';
import type { ScrollView, FlatList, LayoutChangeEvent } from 'react-native';
import Constants from '../utils/constants';

export type ScrollToSupportedViews = ScrollView | FlatList;

const isScrollView = <T extends ScrollView>(ref: ScrollToSupportedViews | null): ref is T =>
  isFunction(get(ref, 'scrollTo'));
const isFlatList = <T extends FlatList>(ref: ScrollToSupportedViews | null): ref is T =>
  isFunction(get(ref, 'scrollToOffset'));

export type ScrollToProps<T extends ScrollToSupportedViews> = {
  /**
   * A reference to the ScrollView (or FlatList) which the items are in
   */
  scrollViewRef?: RefObject<T>;
  /**
   * Is the scroll view horizontal (default is true)
   */
  horizontal?: boolean;
};

export type ScrollToResultProps<T extends ScrollToSupportedViews> = {
  /**
   * A reference to the ScrollView (or FlatList) which the items are in (from the props or a created one)
   */
  scrollViewRef: RefObject<T>;
  /**
   * scrollTo callback.
   * offset - the x or y to scroll to.
   * animated - should the scroll be animated (default is true)
   */
  scrollTo: (offset: number, animated?: boolean) => void;
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

const useScrollTo = <T extends ScrollToSupportedViews>(
  props: ScrollToProps<T>
): ScrollToResultProps<T> => {
  const { scrollViewRef: propsScrollViewRef, horizontal = true } = props;
  const newScrollViewRef = useRef<T>(null);
  const scrollViewRef = propsScrollViewRef || newScrollViewRef;
  const contentSize = useRef<number | undefined>(undefined);
  const containerSize = useRef<number | undefined>(undefined);

  const onContentSizeChange = useCallback(
    (contentWidth: number, contentHeight: number) => {
      contentSize.current = horizontal ? contentWidth : contentHeight;
    },
    [horizontal]
  );

  const onLayout = useCallback(
    (event: LayoutChangeEvent) => {
      const {
        nativeEvent: {
          layout: { width, height },
        },
      } = event;
      containerSize.current = horizontal ? width : height;
    },
    [horizontal]
  );

  const scrollTo = useCallback(
    (offset: number, animated = true) => {
      if (
        horizontal &&
        Constants.isRTL &&
        Constants.isAndroid &&
        !isUndefined(contentSize.current) &&
        !isUndefined(containerSize.current)
      ) {
        const scrollingWidth = Math.max(0, contentSize.current - containerSize.current);
        // eslint-disable-next-line no-param-reassign
        offset = scrollingWidth - offset;
      }

      if (isFlatList<FlatList>(scrollViewRef.current)) {
        scrollViewRef.current?.scrollToOffset({ offset, animated });
      } else if (isScrollView<ScrollView>(scrollViewRef.current)) {
        const scrollToXY = horizontal ? { x: offset } : { y: offset };
        scrollViewRef.current?.scrollTo?.({ ...scrollToXY, animated });
      }
    },
    [scrollViewRef, horizontal]
  );

  return {
    scrollViewRef,
    scrollTo,
    onContentSizeChange,
    onLayout,
  };
};

export default useScrollTo;
