import React, { FC } from 'react';
import { useWatch, useFormContext, FieldPath } from 'react-hook-form';

type ChildrenType = (changedValues: ReturnType<typeof useWatch>) => React.ReactNode;

export interface FormSubscribeProps<V = any> {
  to: FieldPath<V>;
  children: ChildrenType;
}

const FormSubscribe: FC<FormSubscribeProps> = props => {
  const { control } = useFormContext();
  const watch = useWatch({ control, name: props.to });

  return <>{props.children(watch)}</>;
};

export default FormSubscribe;
