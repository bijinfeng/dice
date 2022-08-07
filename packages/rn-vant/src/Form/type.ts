import type { ReactNode, RefObject } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import type { UseFormProps, FieldValues, UseControllerProps, UseFormReturn } from 'react-hook-form';
import type { FieldProps } from '../Field';

export type MemoInputProps = {
  value: unknown;
  update: number;
  children: React.ReactNode;
} & Record<string, unknown>;

/** Form.Item 继承自 Field 等属性 */
export type FieldSharedProps = Pick<
  FieldProps,
  | 'disabled'
  | 'label'
  | 'size'
  | 'colon'
  | 'intro'
  | 'tooltip'
  | 'required'
  | 'isLink'
  | 'errorMessageAlign'
  | 'arrowDirection'
  | 'labelWidth'
  | 'labelAlign'
  | 'leftIcon'
  | 'rightIcon'
  | 'prefix'
  | 'suffix'
  | 'children'
>;

export type FormLayout = 'vertical' | 'horizontal';
export type FormInstance<V extends FieldValues = FieldValues> = UseFormReturn<V>;

export interface FormProps<V extends FieldValues> extends UseFormProps<V> {
  /** 表单布局 */
  layout?: FormLayout;
  /** 是否显示 label 后面的冒号 */
  colon?: boolean;
  /** 是否显示验证信息 */
  showValidateMessage?: boolean;
  form?: RefObject<FormInstance<V>>;
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
}

export interface FormItemProps extends FieldSharedProps, UseControllerProps {
  noStyle?: boolean;
}
