import { useWatch, useFieldArray } from 'react-hook-form';
import _Form from './Form';
import Item from './FormItem';
import List from './FormList';
import Subscribe from './FormSubscribe';

const Form = Object.assign(_Form, { Item, Subscribe, List, useWatch, useFieldArray });

export { Form };
export default Form;
export type { FormProps, FormItemProps, FormInstance } from './type';
export type { FormSubscribeProps } from './FormSubscribe';
