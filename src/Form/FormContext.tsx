import React from "react";
import type { FormLayout } from "./type";

export interface FormContextType {
  layout?: FormLayout;
  colon?: boolean;
  showValidateMessage?: boolean;
}

export const FormContext = React.createContext<FormContextType>(
  {} as FormContextType
);
