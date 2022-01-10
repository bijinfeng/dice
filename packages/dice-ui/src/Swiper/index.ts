import InternalSwiper from './Swiper';
import SwiperItem from './SwiperItem';

export type { SwiperInstance, SwiperProps } from './type';

type SwiperType = typeof InternalSwiper;

interface SwiperProps extends SwiperType {
  Item: typeof SwiperItem;
}

const Swiper = InternalSwiper as SwiperProps;

Swiper.Item = SwiperItem;

export default Swiper;
