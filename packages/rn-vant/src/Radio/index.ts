import InternalRadio from './Radio';
import Group from './Group';

export type { RadioProps } from './Radio';
export type { RadioGroupProps } from './Group';
export type { RadioOptionType } from './context';

type RadioType = typeof InternalRadio;

interface RadioProps extends RadioType {
  Group: typeof Group;
  __ANT_CHECKBOX: boolean;
}

const Radio = InternalRadio as RadioProps;

Radio.Group = Group;
Radio.__ANT_CHECKBOX = true;

export default Radio;
