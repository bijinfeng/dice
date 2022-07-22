import type { ReactNode } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';

export type SelectorValue = string | number;

export interface SelectorOption<V> {
  // 文字
  label: ReactNode;
  // 描述
  description?: ReactNode;
  // 选项的值
  value: V;
  // 是否禁用
  disabled?: boolean;
}

export type SelectorProps<V> = {
  // 可选项
  options: SelectorOption<V>[];
  // 行展示数
  columns?: number;
  // 是否允许多选
  multiple?: boolean;
  // 是否全局禁止选中
  disabled?: boolean;
  // 默认项
  defaultValue?: V[];
  // 选中项
  value?: V[];
  // 选项改变时触发
  onChange?: (v: V[], extend: { items: SelectorOption<V>[] }) => void;
  // 是否显示对勾角标
  showCheckMark?: boolean;
  style?: StyleProp<ViewStyle>;
};
