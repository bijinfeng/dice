import Icon, { IconNames } from '@rn-vant/icons';
import isString from '../utils/isString';

export const isIcon = (icon: IconNames | React.ReactNode): icon is IconNames => isString(icon);

export * from '@rn-vant/icons';
export default Icon;
