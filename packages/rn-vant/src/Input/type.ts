import type {
  NativeSyntheticEvent,
  StyleProp,
  TextInputContentSizeChangeEventData,
  TextInputFocusEventData,
  TextInputChangeEventData,
  TextInputKeyPressEventData,
  TextStyle,
} from 'react-native';

export type InputFousEvent = NativeSyntheticEvent<TextInputFocusEventData>;
export type InputChangeEvent = NativeSyntheticEvent<TextInputChangeEventData>;
export type ContentSizeChangeEvent = NativeSyntheticEvent<TextInputContentSizeChangeEventData>;
export type KeyPressEvent = NativeSyntheticEvent<TextInputKeyPressEventData>;

export type InputType = 'tel' | 'text' | 'digit' | 'number' | 'search' | 'password';

export type InputTextAlign = 'left' | 'center' | 'right';

export type InputClearTrigger = 'always' | 'focus';

export type InputFormatTrigger = 'onBlur' | 'onChange';

export type InputAutosizeConfig = {
  maxHeight?: number;
  minHeight?: number;
};

export interface InputSharedProps {
  value?: string;
  defaultValue?: string;
  style?: StyleProp<TextStyle>;
  /** 输入框占位提示文字	 */
  placeholder?: string;
  /** 是否禁用输入框	 */
  disabled?: boolean;
  /** 是否将输入内容标红	 */
  error?: boolean;
  /** 名称，提交表单的标识符	 */
  name?: string;
  /** 是否为只读状态，只读状态下无法输入内容	 */
  readOnly?: boolean;
  /**  是否自动聚焦	 */
  autoFocus?: boolean;
  /** 是否启用清除图标，点击清除图标后会清空输入框	 */
  clearable?: boolean;
  /** 清除图标名称或图片链接	 */
  clearIcon?: React.ReactNode;
  /** 输入的最大字符数 */
  maxLength?: number;
  /** 输入内容格式化函数 */
  formatter?: (val: string | number) => string;
  /**
   * 格式化函数触发的时机
   * @default 'onChange'
   */
  formatTrigger?: InputFormatTrigger;
  /**
   * 显示清除图标的时机，
   * always 表示输入框不为空时展示 focus 表示输入框聚焦且不为空时展示
   * @default 'focus'
   */
  clearTrigger?: InputClearTrigger;
  onChange?: (val: string) => void;
  onClear?: () => void;
  onFocus?: (e: InputFousEvent) => void;
  onBlur?: (e: InputFousEvent) => void;
  onKeyPress?: (e: KeyPressEvent) => void;
  /** 当输入值超出maxLength时触发 */
  onOverlimit?: () => void;
}

export type InputInstance = {
  focus: () => void;
  blur: () => void;
  clear: () => void;
};

export interface InputProps extends InputSharedProps {
  /** 输入框类型 */
  type?: InputType;
  /** 输入框对齐方式，可选值为 `center` `right` */
  align?: InputTextAlign;
}

export interface TextAreaProps extends InputSharedProps {
  /** 输入框行数 */
  rows?: number;
  /** 是否显示字数统计，需要设置 maxlength 属性 */
  showWordLimit?:
    | boolean
    | ((params: { currentCount: number; maxLength?: number }) => React.ReactNode);
  /**
   * 是否自适应内容高度，只对 textarea 有效
   * 可传入对象,如 { maxHeight: 100, minHeight: 50 }，单位为px
   */
  autoSize?: boolean | InputAutosizeConfig;
}
