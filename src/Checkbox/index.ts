import InternalCheckbox from "./Checkbox";
import Group from "./Group";

export type { CheckboxProps } from "./Checkbox";
export type { CheckboxOptionType } from "./content";
export type { CheckboxGroupProps } from "./Group";

type CheckboxType = typeof InternalCheckbox;

interface CheckboxProps extends CheckboxType {
  Group: typeof Group;
  __ANT_CHECKBOX: boolean;
}

export const Checkbox = InternalCheckbox as CheckboxProps;

Checkbox.Group = Group;
Checkbox.__ANT_CHECKBOX = true;

export default Checkbox;
