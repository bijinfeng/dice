import type { ImageInfo } from "expo-image-picker";
import type React from "react";
import type { ImageProps } from "../Image/type";
import type { ImagePreviewProps } from "../ImagePreview/type";

type ImageFit = ImageProps["resizeMode"];

type PromiseOrNot<T> = T | Promise<T>;

export type PickerImageInfo = ImageInfo;

export type UploaderResultType = "dataUrl" | "text" | "file";

export type UploaderValueItem = {
  /** 唯一标识 */
  key?: string | number;
  /** 资源地址 */
  url?: string;
  /** 图片名称 */
  fileName?: string;
  /** 预览图 */
  thumbnail?: string;
  /** 原始文件 */
  file?: PickerImageInfo;
} & Record<string, any>;

type TaskStatus = "pending" | "failed";

export type UploaderMaxSize =
  | number
  | string
  | ((file: PickerImageInfo) => boolean);

export type UploaderBeforeRead = (
  file: PickerImageInfo | PickerImageInfo[],
  detail: {
    name: string | number;
    index: number;
  }
) => PromiseOrNot<
  PickerImageInfo | PickerImageInfo[] | undefined | boolean | void
>;

export interface UploaderPrviewItemProps
  extends Pick<
    ImagePickerProps,
    | "deletable"
    | "statusTextRender"
    | "name"
    | "imageFit"
    | "previewSize"
    | "deleteRender"
  > {
  status?: TaskStatus;
  /** 删除文件预览时触发	 */
  onDelete?: () => void;
  onPreview?: () => void;
  onClick?: () => void;
  previewCoverRender?: () => React.ReactNode;
  file?: PickerImageInfo;
  url?: string;
}

export interface ImagePickerProps {
  /** 上传的地址 */
  action?: string;
  /** 设置上传的请求头部 */
  headers?: Record<string, string>;
  /** 图片选取模式，可选值为 camera (直接调起摄像头)	 */
  capture?: string;
  /** 是否开启图片多选，部分安卓机型不支持	 */
  multiple?: boolean;
  /** 是否禁用文件上传	 */
  disabled?: boolean;
  /** 是否将上传区域设置为只读状态	 */
  readOnly?: boolean;
  /** 上传区域文字提示	 */
  uploadText?: string;
  /** 是否展示删除按钮	 */
  deletable?: boolean;
  /** 是否展示上传区域	 */
  showUpload?: boolean;
  /** 文件上传前的回调函数，返回 false 可终止文件上传，支持返回 Promise */
  beforeUpload?: (
    file: PickerImageInfo,
    files: PickerImageInfo[]
  ) => Promise<PickerImageInfo | false> | PickerImageInfo | false;
  /** 预览图和上传区域的尺寸，默认单位为 px	 */
  previewSize?: number | string;
  /** 是否在上传完成后展示预览图	 */
  previewImage?: boolean;
  /** 全屏图片预览的配置项，可选值见 ImagePreview	 */
  previewOptions?: Omit<ImagePreviewProps, "visible">;
  /** 是否在点击预览图后展示全屏图片预览	 */
  previewFullImage?: boolean;
  /** 自定义覆盖在预览区域上方的内容	 */
  previewCoverRender?: (item: UploaderValueItem) => React.ReactNode;
  /** 自定义状态文案 */
  statusTextRender?: (status: TaskStatus) => React.ReactNode;
  /** 自定义删除按钮视图 */
  deleteRender?: (del?: () => void) => React.ReactNode;
  /** 标识符，可以在回调函数的第二项参数中获取	*/
  name?: number | string;
  /**
   * 文件大小限制，单位为 byte
   * @default `Number.MAX_VALUE`
   */
  maxSize?: UploaderMaxSize;
  /**
   * 文件上传数量限制
   * @default `Number.MAX_VALUE`
   */
  maxCount?: number;
  /**
   * 预览图裁剪模式，可选值见 Image 组件
   * @default 'cover'
   */
  imageFit?: ImageFit;
  /**
   * 文件读取结果类型，可选值为 file text
   * @default 'dataUrl'
   */
  resultType?: UploaderResultType;
  /**
   * 上传区域图标名称或图片链接
   * @default <Photograph />
   */
  uploadIcon?: React.ReactNode;
  /** 已上传的文件列表	 */
  value?: UploaderValueItem[];
  defaultValue?: UploaderValueItem[];
  /**
   * 上传input value变化时触发
   */
  onChange?: (value: UploaderValueItem[]) => void;
  /** 关闭全屏图片预览时触发	 */
  onClosePreview?: () => void;
  /** 删除文件预览时触发 */
  onDelete?: (item: UploaderValueItem) => boolean | Promise<boolean> | void;
  /** 文件大小超过限制时触发	 */
  onOversize?: (files: PickerImageInfo[]) => void;
  /** 点击预览图时触发	 */
  onClickPreview?: (item: UploaderValueItem, index: number) => void;
  /** 点击上传区域时触发	 */
  onClickUpload?: () => void;
  /** 上传方法，入参是需要被上传的文件对象，经过异步处理之后，返回上传结果 */
  upload?: (file: PickerImageInfo) => Promise<UploaderValueItem>;
  children?: React.ReactNode;
}
