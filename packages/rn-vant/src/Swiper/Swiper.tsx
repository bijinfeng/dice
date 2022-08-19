import React, { forwardRef, useImperativeHandle, useEffect, useRef, useState, Key } from 'react';
import { View, ScrollView } from 'react-native';
import type { LayoutChangeEvent, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import isNumber from 'lodash-es/isNumber';
import inRange from 'lodash-es/inRange';
import Constants from '../utils/constants';
import { useThemeFactory } from '../Theme';
import type { SwiperProps, SwiperInstance } from './type';
import { createStyle } from './style';
import { calcPageIndex } from './utils';

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
  } = props;
  const { styles } = useThemeFactory(createStyle);
  const currentPage = useRef<number>(initialSwipe);
  const currentStandingPage = useRef<number>(initialSwipe);
  const skippedInitialScroll = useRef<boolean>(false);
  const swiperRef = useRef<ScrollView>(null);
  const isAutoScrolled = useRef<boolean>(false);
  const autoplayTimer = useRef<ReturnType<typeof setTimeout>>();
  const dimensionsChangeListener =
    useRef<ReturnType<typeof Constants.addDimensionsEventListener>>();
  const orientationChange = useRef<boolean>(false);
  const [containerWidth, setContainerWidth] = useState<number | undefined>(undefined);
  const [pageWidth, setPageWidth] = useState<number>(props.width || 0);
  const [pageHeight, setPageHeight] = useState<number>(props.height || 0);
  const pagesCount = React.Children.count(children);

  const calcOffset = () => {
    const containerMarginHorizontal = 0;
    // 循环模式下，第一页和最后一页是多出来的，所以当前 page 应该 +1
    const actualCurrentPage = loop ? currentPage.current + 1 : currentPage.current;
    const nonLoopAdjustment = !loop && currentPage.current > 0 ? containerMarginHorizontal : 0;
    const pageSize = vertical ? pageHeight : pageWidth;
    const offset = pageSize * actualCurrentPage - nonLoopAdjustment;
    return {
      x: vertical ? 0 : offset,
      y: vertical ? offset : 0,
    };
  };

  const updateOffset = (animated = false) => {
    const { x, y } = calcOffset();

    if (swiperRef.current) {
      swiperRef.current.scrollTo({ x, y, animated });
      if (Constants.isAndroid) {
        onMomentumScrollEnd();
      }
    }
  };

  const goToPage = (pageIndex: number, animated = true) => {
    currentPage.current = getCalcIndex(pageIndex);
    updateOffset(animated);
  };

  const goToNextPage = () => {
    let nextPageIndex;

    if (loop) {
      nextPageIndex = currentPage.current + 1;
    } else {
      // 如果不是循环模式，pageIndex 不能大于最大页数
      nextPageIndex = Math.min(pagesCount - 1, currentPage.current + 1);
    }

    goToPage(nextPageIndex, true);

    if (loop && currentPage.current === pagesCount) {
      goToPage(0, false);
    }
  };

  const startAutoPlay = () => {
    if (isNumber(autoplay)) {
      autoplayTimer.current = setInterval(() => {
        isAutoScrolled.current = true;
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

  const onContainerLayout = ({ nativeEvent }: LayoutChangeEvent) => {
    const { layout } = nativeEvent;

    if ((vertical && layout.height) || (!vertical && layout.width)) {
      setContainerWidth(layout.width);
      // 没有设置滑块的宽高时，使用容器的宽高
      setPageWidth(props.width || layout.width);
      setPageHeight(props.height || layout.height);
    }
  };

  // 屏幕方向变动时，重新计算容器宽高
  const onOrientationChanged = () => {
    if (!pageWidth || loop) {
      orientationChange.current = true;
      setPageWidth(containerWidth || Constants.screenWidth);
    }
  };

  // 判断是否超出边界
  const isOutOfBounds = (offset: number) => {
    const minLimit = 1;
    const maxLimit = (pagesCount + 1) * pageWidth - 1;

    return !inRange(offset, minLimit, maxLimit);
  };

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (!skippedInitialScroll.current) {
      skippedInitialScroll.current = true;
      return;
    }

    const offsetX = event.nativeEvent.contentOffset.x;
    const offsetY = event.nativeEvent.contentOffset.y;
    const offset = vertical ? offsetY : offsetX;

    if (offset > 0) {
      if (!orientationChange.current) {
        console.log(11111, offset);
      }
      orientationChange.current = false;
    }

    if (loop && isOutOfBounds(offsetX)) {
      console.log(22222222, offset);
      // updateOffset();
    }

    if (autoplay !== false) {
      resetAutoPlay();
    }
  };

  const getCalcIndex = (index: number): number => {
    // to handle scrollView index issue in Android's RTL layout
    if (Constants.isRTL && Constants.isAndroid) {
      return pagesCount - 1 - index;
    }
    return index;
  };

  // 滚动动画结束时调用此函数
  const onMomentumScrollEnd = () => {
    const index = getCalcIndex(currentPage.current);

    if (index < pagesCount) {
      if (currentStandingPage.current !== index) {
        isAutoScrolled.current = false;
        onChange && onChange(index);
      }
      currentStandingPage.current = index;
    }
  };

  const renderChild = (child: React.ReactNode, key: Key): JSX.Element | undefined => {
    if (child) {
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
    }
    return undefined;
  };

  const renderChildren = () => {
    const length = pagesCount;
    const childrenArray = React.Children.map(children, (child, index) =>
      renderChild(child, `${index}`)
    );

    if (loop && childrenArray) {
      // 循环滚动时，clone 第一个和最后一个子元素
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      childrenArray.unshift(renderChild(children[length - 1], `${length - 1}-clone`));
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      childrenArray.push(renderChild(children[0], `0-clone`));
    }

    return childrenArray;
  };

  useEffect(() => {
    dimensionsChangeListener.current = Constants.addDimensionsEventListener(onOrientationChanged);

    if (autoplay !== false) {
      startAutoPlay();
    }

    return () => {
      Constants.removeDimensionsEventListener(dimensionsChangeListener.current);
      stopAutoPlay();
    };
  }, []);

  return (
    <View style={style} onLayout={onContainerLayout}>
      <ScrollView
        ref={swiperRef}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        pagingEnabled
        decelerationRate="fast"
        scrollEventThrottle={200}
        horizontal={!vertical}
        onScroll={onScroll}
        onMomentumScrollEnd={onMomentumScrollEnd}
      >
        {renderChildren()}
      </ScrollView>
    </View>
  );
});

export default Swiper;
