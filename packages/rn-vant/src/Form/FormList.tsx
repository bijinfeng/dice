import React from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import type { UseFieldArrayProps } from 'react-hook-form';

interface FormListProps extends Omit<UseFieldArrayProps, 'control'> {
  children?: (params: ReturnType<typeof useFieldArray>) => React.ReactNode;
}

const FormList = ({ children, ...props }: FormListProps): JSX.Element => {
  const { control } = useFormContext();
  const arrayReturn = useFieldArray({ control, ...props });

  return <>{children?.(arrayReturn)}</>;
};

export default FormList;
