import type { InputProps, TextAreaProps, InputInstance, InputTextAlign } from '../Input';
import type { DialogProps } from '../Dialog/type';
import type { CellProps } from '../Cell/type';

export type FieldType = 'tel' | 'text' | 'digit' | 'number' | 'search' | 'password' | 'textarea';

export type FieldTooltipProps = Omit<DialogProps, 'visible'> & { icon?: React.ReactNode };

export interface FieldCommonProps extends Omit<InputProps, 'type'>, TextAreaProps {
  /** 是否将输入内容标红	 */
  error?: boolean;
  /** 底部错误提示文案，为空时不展示 */
  errorMessage?: React.ReactNode;
  /** 左侧图标名称或图片链接	 */
  leftIcon?: React.ReactNode;
  /** 右侧图标名称或图片链接	 */
  rightIcon?: React.ReactNode;
}

export interface FieldProps
  extends FieldCommonProps,
    Partial<Omit<CellProps, 'value' | 'style' | 'children'>> {
  type?: FieldType;
  /** 是否展示右侧箭头并开启点击反馈	  */
  isLink?: boolean;
  /** 左侧文本宽度	 */
  labelWidth?: number | string;
  /** 左侧文本对齐方式 */
  labelAlign?: InputTextAlign;
  /** 是否在 label 后面添加冒号	 */
  colon?: boolean;
  /** 是否开启点击反馈	 */
  clickable?: boolean;
  /** 是否显示表单必填星号	 */
  required?: boolean;
  /** 错误提示文案对齐方式 */
  errorMessageAlign?: InputTextAlign;
  /** 设置前置内容 */
  prefix?: React.ReactNode;
  /** 设置输入框后置内容 */
  suffix?: React.ReactNode;
  /** 自定义输入框最右侧的额外内容 */
  extra?: React.ReactNode;
  /** 额外的提示信息 */
  intro?: React.ReactNode;
  /** 字段提示信息 */
  tooltip?: React.ReactNode | FieldTooltipProps;
  /** 自定义输入框，使用此插槽后，与输入框相关的属性和事件将失效。 */
  children?: React.ReactNode;
  onClickLeftIcon?: () => void;
  onClickRightIcon?: () => void;
}

export type FieldInstance = InputInstance;
