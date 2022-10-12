import type { PressableProps } from 'react-native';

export interface TouchableOpacityProps extends PressableProps {
  // 背景颜色
  backgroundColor?: string;
  // onPress 回调的节流时间，单位 ms
  throttleTime?: number;
  // 节流函数的参数
  throttleOptions?: { leading: boolean; trailing: boolean };
  // 按下时的背景颜色
  activeBackgroundColor?: string;
  // 按下时背景透明度
  activeOpacity?: number;
}
