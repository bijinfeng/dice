import type { ViewProps } from 'react-native';

export interface EmptyProps extends ViewProps {
  /** 图片类型，可选值为 error network search，支持传入图片 URL */
  image?: 'default' | 'error' | 'network' | 'search' | string | React.ReactNode;
  imageSize?: number;
  /** 图片下方的描述文字	 */
  description?: React.ReactNode;
}
