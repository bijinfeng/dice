import React, { useImperativeHandle } from 'react';
import { View } from 'react-native';
import { useForm, FieldValues, FormProvider } from 'react-hook-form';
import { FormContext } from './FormContext';
import type { FormProps } from './type';

const Form = <V extends FieldValues>(props: FormProps<V>) => {
  const {
    children,
    showValidateMessage = true,
    layout,
    colon,
    style,
    form,
    mode = 'onChange',
    ...formProps
  } = props;
  const methods = useForm<V>({ mode, ...formProps });

  useImperativeHandle(form, () => methods);

  return (
    <FormProvider<V> {...methods}>
      <FormContext.Provider value={{ showValidateMessage, layout, colon }}>
        <View style={style}>{children}</View>
      </FormContext.Provider>
    </FormProvider>
  );
};

export default Form;
