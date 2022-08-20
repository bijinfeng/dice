import React, { forwardRef, useEffect, useRef, Key, useMemo } from 'react';
import { View, ScrollView } from 'react-native';
import isFunction from 'lodash-es/isFunction';
import type { LayoutChangeEvent, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import isNumber from 'lodash-es/isNumber';
import { useRefState } from '../hooks';
import { useThemeFactory } from '../Theme';
import type { SwiperProps, SwiperInstance } from './type';
import { createStyle } from './style';

const Swiper = forwardRef<SwiperInstance, SwiperProps>((props, ref) => {
  const {
    children,
    style,
    vertical = false,
    indicator = true,
    touchable = true,
    loop = true,
    autoplay = false,
    initialSwipe = 0,
    onChange,
    ...rest
  } = props;
  const { styles } = useThemeFactory(createStyle);
  const swiperRef = useRef<ScrollView>(null);
  const autoplayTimer = useRef<ReturnType<typeof setTimeout>>();
  const [pageWidth, setPageWidth, pageWidthRef] = useRefState<number>(props.width || 0);
  const [pageHeight, setPageHeight, setPageHeightRef] = useRefState<number>(props.height || 0);
  const [currentIndex, setCurrentIndex, currentPageIndex] = useRefState<number>(() =>
    loop ? initialSwipe + 1 : initialSwipe
  );

  const pagesCount = useMemo(() => React.Children.count(children), [children]);
  const actualCurrentIndex = useMemo(
    () => (loop ? currentIndex - 1 : currentIndex),
    [loop, currentIndex]
  );

  const updateOffset = (pageIndex: number, animated = false) => {
    const pageSize = vertical ? setPageHeightRef.current : pageWidthRef.current;
    const offset = pageSize * pageIndex;
    const x = vertical ? 0 : offset;
    const y = vertical ? offset : 0;
    swiperRef.current?.scrollTo({ x, y, animated });
  };

  const goToPage = (pageIndex: number, animated = true) => {
    setCurrentIndex(pageIndex);
    updateOffset(pageIndex, animated);
  };

  const goToNextPage = () => {
    goToPage(currentPageIndex.current + 1, true);
  };

  const goToPrevPage = () => {
    goToPage(currentPageIndex.current - 1, true);
  };

  const startAutoPlay = () => {
    if (isNumber(autoplay)) {
      autoplayTimer.current = setInterval(() => {
        goToNextPage();
      }, autoplay);
    }
  };

  const stopAutoPlay = () => {
    if (autoplayTimer.current) {
      clearInterval(autoplayTimer.current);
    }
  };

  const resetAutoPlay = () => {
    stopAutoPlay();
    startAutoPlay();
  };

  const contentOffset = React.useMemo(() => {
    const pageSize = vertical ? pageHeight : pageWidth;
    const pageIndex = loop ? initialSwipe + 1 : initialSwipe;
    const offset = pageSize * pageIndex;

    return {
      x: vertical ? 0 : offset,
      y: vertical ? offset : 0,
    };
  }, [initialSwipe, loop, pageWidth, pageHeight, vertical]);

  const onContainerLayout = ({ nativeEvent }: LayoutChangeEvent) => {
    const { layout } = nativeEvent;

    if ((vertical && layout.height) || (!vertical && layout.width)) {
      // 没有设置滑块的宽高时，使用容器的宽高
      setPageWidth(props.width || layout.width);
      setPageHeight(props.height || layout.height);
    }
  };

  // 用户拖拽时停止自动轮播
  const onScrollBeginDrag = () => {
    stopAutoPlay();
  };

  // 拖拽结束后开始自动切换
  const onScrollEndDrag = () => {
    resetAutoPlay();
  };

  // 滚动动画结束时调用此函数
  const onMomentumScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const offsetY = event.nativeEvent.contentOffset.y;
    const offset = vertical ? offsetY : offsetX;
    const pageSize = vertical ? setPageHeightRef.current : pageWidthRef.current;
    const scrolledIndex = offset / pageSize;

    onChange?.(loop ? scrolledIndex - 1 : scrolledIndex);

    if (loop && scrolledIndex === 0) {
      goToPage(pagesCount, false);
      return;
    }
    if (loop && scrolledIndex === pagesCount + 1) {
      goToPage(1, false);
      return;
    }

    setCurrentIndex(scrolledIndex);
  };

  const renderChild = (child: React.ReactNode, key: Key): JSX.Element | undefined => {
    if (!child) return undefined;

    return (
      <View
        style={{
          width: pageWidth,
          height: vertical ? pageHeight : undefined,
        }}
        key={key}
        collapsable={false}
      >
        {child}
      </View>
    );
  };

  const renderChildren = () => {
    const childrenArray = React.Children.map(children, (child, index) =>
      renderChild(child, `${index}`)
    );

    if (loop && childrenArray) {
      // 循环滚动时，clone 第一个和最后一个子元素
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      childrenArray.unshift(renderChild(children[pagesCount - 1], `${pagesCount - 1}-clone`));
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      childrenArray.push(renderChild(children[0], `0-clone`));
    }

    return childrenArray;
  };

  const renderIndicator = () => {
    if (indicator === false) return null;

    if (isFunction(indicator)) {
      return indicator(pagesCount, actualCurrentIndex);
    }

    return (
      <View style={[styles.indicator, vertical ? styles.indicatorY : styles.indicatorX]}>
        {Array.from({ length: pagesCount }).map((_, index) => (
          <View
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            style={[
              styles.dot,
              index === actualCurrentIndex && styles.activeDot,
              vertical ? styles.dotY : styles.dotX,
            ]}
          />
        ))}
      </View>
    );
  };

  useEffect(() => {
    startAutoPlay();

    return () => stopAutoPlay();
  }, []);

  React.useImperativeHandle(ref, () => ({
    activeIndex: actualCurrentIndex,
    swipeNext: goToNextPage,
    swipePrev: goToPrevPage,
    swipeTo: (index: number) => goToPage(loop ? index + 1 : index),
  }));

  return (
    <View {...rest} style={[styles.wrapper, style]} onLayout={onContainerLayout}>
      <ScrollView
        ref={swiperRef}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        pagingEnabled
        decelerationRate="fast"
        scrollEventThrottle={200}
        horizontal={!vertical}
        contentOffset={contentOffset}
        scrollEnabled={touchable}
        onScrollBeginDrag={onScrollBeginDrag}
        onScrollEndDrag={onScrollEndDrag}
        onMomentumScrollEnd={onMomentumScrollEnd}
      >
        {renderChildren()}
      </ScrollView>
      {renderIndicator()}
    </View>
  );
});

export default Swiper;
