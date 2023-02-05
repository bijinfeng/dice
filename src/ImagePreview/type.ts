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
  indexRender?: ({
    index,
    len,
  }: {
    index: number;
    len: number;
  }) => React.ReactNode;
  beforeClose?: (active: string | number) => CouldClose;
  onClose?: (p?: CloseParams) => void;
  onClosed?: () => void;
  onChange?: (index: number) => void;
  images?: string[];
  swipeDuration?: number;
  startPosition?: number;
  closeIcon?: React.ReactNode;
  /** 只在点击关闭按钮时关闭ImagePreview组件 */
  closeOnlyClickCloseIcon?: boolean;
  testID?: string;
}

export interface ImagePreviewItemProps {
  // lazyload: LazyImageType;
  image: string;
  maxZoom: number;
  onTap: () => void;
  onZoomChange?: (zoom: number) => void;
}
