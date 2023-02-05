import Group from "./Group";
import InternalRadio from "./Radio";

export type { RadioOptionType } from "./context";
export type { RadioGroupProps } from "./Group";
export type { RadioProps } from "./Radio";

type RadioType = typeof InternalRadio;

interface RadioProps extends RadioType {
  Group: typeof Group;
  __ANT_CHECKBOX: boolean;
}

export const Radio = InternalRadio as RadioProps;

Radio.Group = Group;
Radio.__ANT_CHECKBOX = true;

export default Radio;
