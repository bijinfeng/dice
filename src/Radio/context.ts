import React from "react";
import type { StyleProp, ViewStyle } from "react-native";

export type RadioValueType = string | number | boolean;

export interface RadioOptionType {
  label: React.ReactNode;
  value: RadioValueType;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  onChange?: () => void;
}
export interface RadioGroupContext {
  toggleOption?: (option: RadioOptionType) => void;
  value?: any;
  disabled?: boolean;
}

export const GroupContext = React.createContext<RadioGroupContext | null>(null);
