import type { ViewProps } from 'react-native';

export type PickerToolbarPosition = 'top' | 'bottom';

export type PickerOption<T = string> = {
  text?: T;
  value?: T;
  disabled?: boolean;
  children?: PickerOption[];
  [key: string]: any;
};

export type State<T = string> = {
  values: T[];
  options: PickerOption<T>[];
  indexs: number[];
  columns: PickerOption<T>[][];
};

export type PickerFieldNames = {
  text?: string;
  value?: string;
  children?: string;
};

export interface PickerCommonProps<T> extends Pick<ViewProps, 'style'> {
  /** 对象数组，配置每一列显示的数据	 */
  columns: T[] | T[][];
  /** 自定义 columns 结构中的字段	 */
  columnsFieldNames?: PickerFieldNames;
  /** 顶部栏标题	 */
  title?: React.ReactNode;
  /** 是否显示加载状态	 */
  loading?: boolean;
  /** 是否只读状态 */
  readonly?: boolean;
  /**  确认按钮文字	 */
  cancelButtonText?: React.ReactNode;
  /** 取消按钮文字	 */
  confirmButtonText?: React.ReactNode;
  /**  是否显示顶部栏	 */
  showToolbar?: boolean;
  /** 单列选择时，默认选中项的索引	 */
  defaultIndex?: number;
  /** 选项高度，支持 px vw vh rem 单位，默认 px	 */
  itemHeight?: number;
  /** 可见的选项个数	 */
  visibleItemCount?: number;
  /** 顶部栏位置，可选值为 bottom	 */
  toolbarPosition?: PickerToolbarPosition;
  /** 自定义整个顶部栏的内容	 */
  toolbar?: React.ReactNode;
  /** 自定义选项上方内容	 */
  columnsTop?: React.ReactNode;
  /** 自定义选项下方内容	 */
  columnsBottom?: React.ReactNode;
  /** 自定义确认按钮内容	 */
  optionRender?: (option: T) => React.ReactNode;
}

export interface PickerSingleProps<V = string, T = PickerOption<V>> extends PickerCommonProps<T> {
  value?: V;
  /** 选项改变时触发	 */
  onChange?: (value: V, options: T, index: number) => void;
  /** 点击完成按钮时触发	 */
  onConfirm?: (value: V, options: T) => void;
  /** 点击取消按钮时触发	 */
  onCancel?: (value: V, options: T) => void;
}

export interface PickerMultipleProps<V = string, T = PickerOption<V>> extends PickerCommonProps<T> {
  value?: V[];
  /** 选项改变时触发	 */
  onChange?: (value: V[], options: T[], index: number) => void;
  /** 点击完成按钮时触发	 */
  onConfirm?: (value: V[], options: T[]) => void;
  /** 点击取消按钮时触发	 */
  onCancel?: (value: V[], options: T[]) => void;
}

export type PickerProps<V = string, T = PickerOption> =
  | PickerSingleProps<V, T>
  | PickerMultipleProps<V, T>;

export interface PickerColumnProps {
  index: number;
  textKey: string;
  itemHeight: number;
  wrapHeight: number;
  readonly?: boolean;
  options?: PickerOption[];
  optionRender?: (option: PickerOption) => React.ReactNode;
  onChange?: (index: number) => void;
}
