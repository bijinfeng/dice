import type React from "react";
import type {
  GestureResponderEvent,
  ImageProps as ImageReactNativeProps,
  Omit,
  StyleProp,
  ViewStyle,
} from "react-native";
import type { SvgProps } from "react-native-svg";

export interface IconCommonProps extends SvgProps {
  size?: number | string;
  color?: string;
}

export interface IconCommonOutlineProps extends IconCommonProps {
  strokeWidth?: number;
}

export type IconCommonFillProps = IconCommonProps;

export interface ImageProps extends Omit<ImageReactNativeProps, "style"> {
  style?: StyleProp<ViewStyle>;
  imageStyle?: ImageReactNativeProps["style"];

  /**
   * 点击图片的事件
   */
  onPress?: (e: GestureResponderEvent) => void;

  /**
   * 替代文本
   */
  alt?: string;

  /**
   * 自定义加载中的提示内容
   */
  loading?: React.ReactNode;

  /**
   * 圆角大小
   *
   * @default `0`
   */
  radius?: number;

  /**
   * 是否显示为圆形
   */
  round?: boolean;

  /**
   * 是否展示图片加载失败提示
   *
   * @default `true`
   */
  showError?: boolean;

  /**
   * 是否展示图片加载中提示
   *
   * @default `true`
   */
  showLoading?: boolean;

  /**
   * 是否开启图片显示动画
   *
   * @default `true`
   */
  animated?: boolean;

  /**
   * 动画时间，单位毫秒
   *
   * @default `300`
   */
  duration?: number;
  children?: React.ReactNode;
}
