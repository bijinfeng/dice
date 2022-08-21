import InternalSwiper from './Swiper';
import SwiperItem from './SwiperItem';

export const Swiper = Object.assign(InternalSwiper, { Item: SwiperItem });

export default Swiper;
export type { SwiperInstance, SwiperProps } from './type';
