import React, { forwardRef } from "react";
import BaseInput from "./BaseInput";
import type { InputInstance, InputProps } from "./type";

const Input = forwardRef<InputInstance, InputProps>((props, ref) => (
  <BaseInput {...props} ref={ref} />
));

export default Input;
