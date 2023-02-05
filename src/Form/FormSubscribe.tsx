import React from "react";
import type { DeepPartialSkipArrayKey } from "react-hook-form";
import { useFormContext, useWatch } from "react-hook-form";

type ChildrenType = (
  changedValues: DeepPartialSkipArrayKey<any>
) => React.ReactNode;

export interface FormSubscribeProps {
  to: any;
  children: ChildrenType;
}

const FormSubscribe = (props: FormSubscribeProps): JSX.Element => {
  const { control } = useFormContext();
  const watch = useWatch({ control, name: props.to });

  return <>{props.children(watch)}</>;
};

export default FormSubscribe;
