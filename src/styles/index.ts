import type { defaultTheme } from "./defaultTheme";
import type * as _vars from "./variables";

export type Vars = typeof _vars;

/** 默认变量类型 */
export type ThemeVarType = typeof defaultTheme;

export { darkTheme } from "./darkTheme";
export { defaultTheme } from "./defaultTheme";
export * from "./shortHand";
