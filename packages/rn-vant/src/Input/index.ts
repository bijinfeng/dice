import _Input from './Input';
import TextArea from './TextArea';

const Input = Object.assign(_Input, { TextArea });

export default Input;
export { Input };
export type { InputProps, InputInstance, TextAreaProps } from './type';
