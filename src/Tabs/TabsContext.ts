import { createContext } from "react";
import type { TabsProps } from "./type";

export interface TabsContextState {
  props: React.PropsWithChildren<TabsProps>;
  selectedIndex: number;
  setCurrentIndex: (index: number) => void;
}

export const TabsContext = createContext<TabsContextState>(
  {} as TabsContextState
);
