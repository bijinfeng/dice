import _Input from "./Input";
import TextArea from "./TextArea";

const Input = Object.assign(_Input, { TextArea });

export default Input;
export type {
  InputInstance,
  InputProps,
  InputSharedProps,
  InputTextAlign,
  TextAreaProps,
} from "./type";
export { Input };
