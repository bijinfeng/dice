import React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';

export type CheckboxValueType = string | number | boolean;

export interface CheckboxOptionType {
  label: React.ReactNode;
  value: CheckboxValueType;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  onChange?: () => void;
}

export interface CheckboxGroupContext {
  toggleOption?: (option: CheckboxOptionType) => void;
  value?: any;
  disabled?: boolean;
  registerValue: (val: string) => void;
  cancelValue: (val: string) => void;
}

export const GroupContext = React.createContext<CheckboxGroupContext | null>(null);
