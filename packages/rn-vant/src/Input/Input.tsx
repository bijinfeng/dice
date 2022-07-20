import React, { forwardRef } from 'react';
import BaseInput from './BaseInput';
import type { InputProps, InputInstance } from './type';

const Input = forwardRef<InputInstance, InputProps>((props, ref) => (
  <BaseInput {...props} ref={ref} />
));

export default Input;
