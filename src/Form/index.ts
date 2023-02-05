import { useFieldArray, useWatch } from "react-hook-form";
import _Form from "./Form";
import Item from "./FormItem";
import List from "./FormList";
import Subscribe from "./FormSubscribe";

const Form = Object.assign(_Form, {
  Item,
  Subscribe,
  List,
  useWatch,
  useFieldArray,
});

export type { FormSubscribeProps } from "./FormSubscribe";
export type { FormInstance, FormItemProps, FormProps } from "./type";
export { Form };
export default Form;
