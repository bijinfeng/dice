import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { View } from 'react-native';
import RNSwiper from 'react-native-swiper';

import { useThemeFactory } from '../Theme';
import { isFunction, isNumber } from '../utils/typeof';
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
  } = props;
  const { styles } = useThemeFactory(createStyle);
  const swiperRef = useRef<RNSwiper>(null);
  const activeIndex = useRef<number>(initialSwipe);

  const onIndexChanged = (idx: number) => {
    activeIndex.current = idx;
    onChange?.(idx);
  };

  useImperativeHandle(ref, () => ({
    activeIndex: activeIndex.current,
    swipeTo: swiperRef.current!.scrollTo,
    swipeNext: () => swiperRef.current!.scrollBy(1),
    swipePrev: () => swiperRef.current!.scrollBy(-1),
  }));

  return (
    <RNSwiper
      ref={swiperRef}
      horizontal={!vertical}
      loop={loop}
      index={initialSwipe}
      autoplay={autoplay !== false}
      onIndexChanged={onIndexChanged}
      autoplayTimeout={isNumber(autoplay) ? autoplay / 1000 : 2.5}
      pagingEnabled={touchable}
      renderPagination={isFunction(indicator) ? (idx, total) => indicator(total, idx) : undefined}
      dot={<View style={styles.dot} />}
      activeDot={<View style={styles.activeDot} />}
      containerStyle={style}
      paginationStyle={vertical ? styles.indicatorY : styles.indicatorX}
    >
      {children}
    </RNSwiper>
  );
});

export default Swiper;
