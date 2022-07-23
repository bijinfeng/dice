import React, { useImperativeHandle } from 'react';
import { useForm, FieldValues, FormProvider } from 'react-hook-form';
import Cell from '../Cell';
import { FormContext } from './FormContext';
import type { FormProps } from './type';

const Form = <V extends FieldValues>(props: FormProps<V>) => {
  const {
    children,
    showValidateMessage = true,
    layout,
    colon,
    style,
    border,
    form,
    mode = 'onChange',
    ...formProps
  } = props;
  const methods = useForm<V>({ mode, ...formProps });

  useImperativeHandle(form, () => methods);

  return (
    <FormProvider<V> {...methods}>
      <FormContext.Provider value={{ showValidateMessage, layout, colon }}>
        <Cell.Group style={style} border={border}>
          {children}
        </Cell.Group>
      </FormContext.Provider>
    </FormProvider>
  );
};

export default Form;
