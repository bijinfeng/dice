import { Context, createContext } from "react";
import { zhCN as locale } from "../locale";
import type { Locale } from "../locale/lang/base";

export type ConfigProviderContextState = {
  locale: Locale;
};

export const INITIAL_STATE = {
  locale,
} as ConfigProviderContextState;

const ConfigProvider: Context<ConfigProviderContextState> =
  createContext(INITIAL_STATE);

export default ConfigProvider;
