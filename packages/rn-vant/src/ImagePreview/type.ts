import type { PopupCloseIconPosition } from '../Popup/type';

export type CloseParams = { url: string; index: number };

type CouldClose = boolean | Promise<boolean>;

export interface ImagePreviewProps {
  visible?: boolean;
  overlay?: boolean;
  // lazyload?: LazyImageType;
  maxZoom?: number;
  closeable?: boolean;
  showIndicators?: boolean;
  showIndex?: boolean;
  indexRender?: ({ index, len }: { index: number; len: number }) => React.ReactNode;
  closeOnPopstate?: boolean;
  beforeClose?: (active: string | number) => CouldClose;
  onClose?: (p?: CloseParams) => void;
  onClosed?: () => void;
  onChange?: (index: number) => void;
  images?: string[];
  swipeDuration?: number;
  startPosition?: number;
  closeIcon?: React.ReactNode;
  closeIconPosition?: PopupCloseIconPosition;
  /** 只在点击关闭按钮时关闭ImagePreview组件 */
  closeOnlyClickCloseIcon?: boolean;
  /** 弹出时的的父容器 */
  teleport?: HTMLElement | (() => HTMLElement);
}

export interface ImagePreviewItemProps {
  // lazyload: LazyImageType;
  image: string;
  maxZoom: number;
  onTap: () => void;
  onZoomChange?: (zoom: number) => void;
}
