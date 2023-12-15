import React, { useRef, useEffect } from 'react';
import { View } from 'react-native';
import Swiper, { SwiperInstance } from '../Swiper';
import type { TabsProps } from './type';

export type TabsContentProps = Pick<
  TabsProps,
  'animated' | 'swipeable' | 'duration' | 'children'
> & {
  onChange?: (index: number) => void;
  currentIndex: number;
};

const TabsContent: React.FC<TabsContentProps> = props => {
  const { children, animated, swipeable } = props;
  const innerEffect = useRef(false);
  const swiperRef = useRef<SwiperInstance>(null);

  const renderChildren = () => {
    if (animated || swipeable) {
      return (
        <Swiper
          ref={swiperRef}
          loop={false}
          autoplay={false}
          touchable={!!swipeable}
          indicator={false}
          onChange={idx => {
            if (innerEffect.current) {
              innerEffect.current = false;
              return;
            }
            if (props.onChange) props.onChange(idx);
          }}
        >
          {React.Children.map(children, child => (
            <Swiper.Item>{child}</Swiper.Item>
          ))}
        </Swiper>
      );
    }
    return children;
  };

  const swipeToCurrentTab = (index: number) => {
    const swipe = swiperRef.current;
    if (!swipe) return;
    if (swipe.activeIndex !== index) {
      innerEffect.current = true;
      swipe.swipeTo(index);
    }
  };

  useEffect(() => {
    swipeToCurrentTab(props.currentIndex);
  }, [props.currentIndex]);

  return <View>{renderChildren()}</View>;
};

export default TabsContent;
