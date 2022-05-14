import { Animated } from 'react-native';
import useLazyRef from './useLazyRef';

const useAnimatedValue = (initialValue: number) => {
  const { current } = useLazyRef(() => new Animated.Value(initialValue));

  return current;
};
export default useAnimatedValue;
