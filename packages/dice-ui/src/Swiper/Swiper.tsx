import React, { forwardRef, useRef, useMemo, useState, useImperativeHandle } from 'react';
import { View, ScrollView, Platform } from 'react-native';
import type {
  LayoutChangeEvent,
  NativeSyntheticEvent,
  NativeScrollEvent,
  PointPropType,
} from 'react-native';

import { useThemeFactory } from '../Theme';
import { devWarning } from '../utils/devLog';
import { isFunction } from '../utils/typeof';
import { useControllableValue, useUpdateEffect } from '../hooks';
import type { SwiperProps, SwiperInstance } from './type';
import SwiperItem from './SwiperItem';
import { createStyle } from './style';

type ScrollEvent = NativeSyntheticEvent<NativeScrollEvent>;
type Offset = PointPropType;
type Layout = { width: number; height: number };
type Timer = ReturnType<typeof setTimeout>;
type ScrollEndEvent = { contentOffset?: Offset; position?: number };

interface Internals {
  isScrolling: boolean; // 是否在滚动
  loopJump: boolean; // 是否重置 offset
  offset?: Offset; // 上一步 ScrollView 的偏移量
  autoplayEnd?: boolean; // 是否自动滚动到最后一个了
}

const Swiper = forwardRef<SwiperInstance, SwiperProps>((props, ref) => {
  const {
    children,
    style,
    vertical,
    indicator = true,
    touchable = true,
    loop = true,
    autoplay = false,
  } = props;
  const { styles } = useThemeFactory(createStyle);

  // 当前位置的索引
  const [index, setIndex] = useControllableValue(props, {
    defaultValuePropName: 'initialSwipe',
    defaultValue: 0,
  });

  // 滚动方向
  const dir = vertical ? 'y' : 'x';
  // scrollView 的偏移量
  const [offset, setOffset] = useState<Offset>();
  const [layout, setLayout] = useState<Layout>();
  const scrollView = useRef<ScrollView>(null);
  // 缓存一些数据
  const internals = useRef<Internals>({ isScrolling: false, loopJump: false }).current;

  const loopJumpTimer = useRef<Timer>();
  const autoplayTimer = useRef<Timer>();

  const { validChildren, total } = useMemo(() => {
    let innerCount = 0;
    const innerValidChildren = React.Children.map(children, child => {
      if (!React.isValidElement(child)) return null;
      if (child.type !== SwiperItem) {
        devWarning('Swiper', 'The children of `Swiper` must be `Swiper.Item` components.');
        return null;
      }
      innerCount++;
      return child;
    });
    return {
      validChildren: innerValidChildren,
      total: innerCount,
    };
  }, [children]);

  useUpdateEffect(() => {
    handleAutoplay();
    loopJump();

    return () => {
      autoplayTimer.current && clearTimeout(autoplayTimer.current);
      loopJumpTimer.current && clearTimeout(loopJumpTimer.current);
    };
  }, [index, layout]);

  const onContainerLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    // eslint-disable-next-line no-multi-assign
    const _offset = (internals.offset = { x: 0, y: 0 });

    if (total > 1) {
      let setup = index;
      if (loop) {
        setup++;
      }
      _offset[dir] = dir === 'y' ? height * setup : width * setup;
    }

    if (!offset) {
      setOffset(_offset);
    }

    if (total > 1) {
      scrollView.current?.scrollTo({ ..._offset, animated: false });
    }

    setLayout({ width, height });
  };

  // offsetIndex - 滚动几个
  const scrollBy = (offsetIndex: number, animated = true) => {
    if (internals.isScrolling || total < 2) return;
    const diff = (loop ? 1 : 0) + index + offsetIndex;
    let x = 0;
    let y = 0;
    if (dir === 'x') x = diff * layout!.width;
    if (dir === 'y') y = diff * layout!.height;

    scrollView.current?.scrollTo({ x, y, animated });

    internals.isScrolling = true;
    internals.autoplayEnd = false;

    // trigger onScrollEnd manually in android
    if (!animated || Platform.OS !== 'ios') {
      setImmediate(() => {
        onScrollEnd({
          position: diff,
        });
      });
    }
  };

  // nextIndex - 滚动到第几个
  const scrollTo = (nextIndex: number, animated = true) => {
    if (internals.isScrolling || total < 2 || nextIndex === index) return;

    const diff = nextIndex;

    let x = 0;
    let y = 0;
    if (dir === 'x') x = diff * layout!.width;
    if (dir === 'y') y = diff * layout!.height;

    scrollView.current?.scrollTo({ x, y, animated });

    internals.isScrolling = true;
    internals.autoplayEnd = false;

    if (!animated || Platform.OS !== 'ios') {
      setImmediate(() => {
        onScrollEnd({
          position: diff,
        });
      });
    }
  };

  // Automatic rolling
  const handleAutoplay = () => {
    if (autoplay === false || internals.isScrolling || internals.autoplayEnd) return;

    autoplayTimer.current && clearTimeout(autoplayTimer.current);
    autoplayTimer.current = setTimeout(
      () => {
        if (!loop && index === total - 1) {
          internals.autoplayEnd = true;
        } else {
          scrollBy(1);
        }
      },
      autoplay === true ? 2500 : autoplay
    );
  };

  /**
   * 由于第一个和最后一个是额外添加的
   * 滚动到这两个地方时，需要重置下位置
   */
  const loopJump = () => {
    if (!internals.loopJump) return;

    /**
     * 滚动到第一个时，跳转到倒数第二个
     * 滚到到最后一个时，跳转到第二个
     */
    loopJumpTimer.current = setTimeout(() => {
      if (index === 0) {
        scrollView.current?.scrollTo(
          dir === 'x'
            ? { x: layout?.width, y: 0, animated: false }
            : { x: 0, y: layout?.height, animated: false }
        );
      } else if (index === total - 1) {
        scrollView.current?.scrollTo(
          dir === 'x'
            ? { x: layout!.width * total, y: 0, animated: false }
            : { x: 0, y: layout!.height * total, animated: false }
        );
      }
    }, 300);
  };

  // 开始滚动的钩子
  const onScrollBegin = () => {
    internals.isScrolling = true;
  };

  // 结束滚动的钩子
  const onScrollEnd = ({ contentOffset, position = 0 }: ScrollEndEvent) => {
    internals.isScrolling = false;
    let _offset = contentOffset;

    // making our events coming from android compatible to updateIndex logic
    // code from https://github.com/leecade/react-native-swiper/blob/master/src/index.js
    if (!_offset) {
      if (dir === 'x') {
        _offset = {
          x: position * (layout?.width ?? 0),
          y: 0,
        };
      } else {
        _offset = {
          x: 0,
          y: position * (layout?.height ?? 0),
        };
      }
    }

    updateIndex(_offset);
  };

  const onScrollEndDrag = (event: ScrollEvent) => {
    const { contentOffset } = event.nativeEvent;
    const previousOffset = dir === 'x' ? internals.offset?.x : internals.offset?.y;
    const newOffset = dir === 'x' ? contentOffset.x : contentOffset.y;

    if (previousOffset === newOffset && (index === 0 || index === total - 1)) {
      internals.isScrolling = false;
    }
  };

  // Update index after scroll
  const updateIndex = (_offset: Offset) => {
    let nextIndex = index;
    // 滚动偏移量
    const contentOffset = _offset;
    const diff = contentOffset[dir] - (internals?.offset?.[dir] || 0);
    const step = dir === 'x' ? layout!.width : layout!.height;
    let isLoopJump = false;

    // Do nothing if offset no change.
    if (!diff) return;

    // Note: if touch very very quickly and continuous,
    // the variation of `index` more than 1.
    // parseInt() ensures it's always an integer
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    nextIndex = parseInt(index + Math.round(diff / step), 10);

    if (loop) {
      if (nextIndex <= -1) {
        // 滚动到了第一个
        nextIndex = total - 1;
        contentOffset[dir] = step * total;
        isLoopJump = true;
      } else if (nextIndex >= total) {
        nextIndex = 0;
        // 滚动到了最后一个
        contentOffset[dir] = step;
        isLoopJump = true;
      }
    }

    internals.offset = contentOffset;
    internals.loopJump = isLoopJump;

    if (isLoopJump) {
      if (contentOffset[dir] === internals.offset[dir]) {
        setOffset({
          x: 0,
          y: 0,
          [dir]: contentOffset[dir] + 1,
        });
      } else {
        setOffset(offset);
      }
    }

    setIndex(nextIndex);
  };

  // 渲染指示器
  const renderIndicator = () => {
    if (indicator === true) {
      return (
        <View pointerEvents="none" style={dir === 'x' ? styles.indicatorX : styles.indicatorY}>
          {Array(total)
            .fill('')
            .map((_, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <View key={i} style={i === index ? styles.activeDot : styles.dot} />
            ))}
        </View>
      );
    }

    if (isFunction(indicator)) {
      return indicator(total, index);
    }

    return null;
  };

  useImperativeHandle(ref, () => ({
    activeIndex: index,
    swipeTo: scrollTo,
    swipeNext: () => scrollBy(1),
    swipePrev: () => scrollBy(-1),
  }));

  return (
    <View style={[styles.container, style]} onLayout={onContainerLayout}>
      <ScrollView
        ref={scrollView}
        contentContainerStyle={styles.wrapperIOS}
        contentOffset={offset}
        horizontal={!vertical}
        onScrollBeginDrag={onScrollBegin}
        onMomentumScrollEnd={event => onScrollEnd(event.nativeEvent)}
        onScrollEndDrag={onScrollEndDrag}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        bounces
        pagingEnabled
        scrollsToTop={false}
        automaticallyAdjustContentInsets={false}
        scrollEnabled={touchable}
      >
        {/* 当 item 的数量大于 1 且允许轮播时，复制最后一个 item 到第一个，复制第一 item 到最后一位，是的轮播时可以循环起来 */}
        {React.Children.map(validChildren, (child, i) => (
          <>
            {total > 1 && loop && i === 0 && (
              <View style={layout}>{validChildren?.[total - 1]}</View>
            )}
            <View style={layout}>{child}</View>
            {total > 1 && loop && i === total - 1 && (
              <View style={layout}>{validChildren?.[0]}</View>
            )}
          </>
        ))}
      </ScrollView>
      {/* 指示器 */}
      {renderIndicator()}
    </View>
  );
});

export default Swiper;
