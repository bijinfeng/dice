import _Form from './Form';
import Item from './FormItem';
import Subscribe from './FormSubscribe';

const Form = Object.assign(_Form, { Item, Subscribe });

export { Form };
export default Form;
export type { FormProps, FormItemProps, FormInstance } from './type';
export type { FormSubscribeProps } from './FormSubscribe';
