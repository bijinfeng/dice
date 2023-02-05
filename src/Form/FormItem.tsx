import isUndefined from "lodash-es/isUndefined";
import React from "react";
import { useController, useFormContext } from "react-hook-form";
import Field from "../Field";
import type { FormItemProps } from "./type";

const FormItem = (props: FormItemProps) => {
  const {
    name,
    children,
    defaultValue,
    rules,
    shouldUnregister,
    required,
    ...fieldProps
  } = props;
  const { control } = useFormContext();
  const { field, fieldState } = useController({
    control,
    name,
    defaultValue,
    rules,
    shouldUnregister,
  });

  const isRequired = !isUndefined(required)
    ? required
    : rules && !!rules?.required;

  const renderChildren = (child: React.ReactElement) => {
    const { onChange, onBlur, value } = field;
    return React.cloneElement(child, {
      ...child.props,
      onChange,
      onBlur,
      value,
    });
  };

  return (
    <Field
      {...fieldProps}
      name={name}
      required={isRequired}
      errorMessage={fieldState.error?.message}
    >
      {React.isValidElement(children) ? renderChildren(children) : children}
    </Field>
  );
};

export default FormItem;
