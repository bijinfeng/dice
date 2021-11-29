import Icon, { IconNames } from '@dice-ui/icons';
import isString from '../../utils/isString';

export const isIcon = (icon: IconNames | React.ReactNode): icon is IconNames => isString(icon);

export * from '@dice-ui/icons';
export default Icon;
