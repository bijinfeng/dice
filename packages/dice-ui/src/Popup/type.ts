import type { ReactNode } from 'react';
import type { IconNames } from '../Icon';

export type Position = 'top' | 'bottom' | 'right' | 'left' | 'center';
export type IconPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

export interface DialogProps {
  children?: ReactNode;
  /**
   * 是否显示弹出层
   */
  visible?: boolean;
  /**
   * 是否显示遮罩层
   * @default true
   */
  overlay?: boolean;
  /**
   * 弹出位置
   * @default cener
   */
  position?: Position;
  /**
   * 动画时长（单位毫秒）
   * @default 300
   */
  duration?: number;
  /**
   * 是否开启安全区适配
   */
  useSafeArea?: boolean;
  /**
   * 打开弹出层时触发
   */
  onOpen?: () => void;
  /**
   * 关闭弹出层时触发
   */
  onClose?: () => void;
  /**
   * 打开弹出层且动画结束后触发
   */
  onOpened?: () => void;
  /**
   * 关闭弹出层且动画结束后触发
   */
  onClosed?: () => void;
  renderPannableHeader?: () => JSX.Element;
}

export interface PopupProps extends DialogProps {
  // 顶部标题
  title?: string | React.ReactElement;
  /**
   * 是否显示圆角
   */
  round?: boolean;
  /**
   * 是否显示关闭图标
   */
  closeable?: boolean;
  /**
   * 关闭图标名称
   */
  closeIcon?: IconNames;
  /**
   * 关闭图标位置
   * @default top-right
   */
  closeIconPosition?: IconPosition;
}
