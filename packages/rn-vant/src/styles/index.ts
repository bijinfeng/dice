import type * as _vars from './variables';
import type { defaultTheme } from './defaultTheme';

export type Vars = typeof _vars;

/** 默认变量类型 */
export type ThemeVarType = typeof defaultTheme;

export { defaultTheme } from './defaultTheme';
export { darkTheme } from './darkTheme';
export * from './shortHand';
