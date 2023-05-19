import type { IconNames } from '@pingtou/rn-vant-icons';
import isString from 'lodash-es/isString';

export const isIcon = (icon: IconNames | React.ReactNode): icon is IconNames => isString(icon);
