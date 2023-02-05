import type React from "react";
import type { Locale } from "../locale/lang/base";

export interface ConfigProviderProps {
  locale?: Locale;
  children: React.ReactNode;
  theme?: DiceUI.Theme;
}
