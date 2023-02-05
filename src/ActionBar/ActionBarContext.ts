import { Context, createContext } from "react";

export interface ActionBarState {
  parent?: Record<string, any>;
}

const ActionButtonContext: Context<ActionBarState> = createContext({});

export default ActionButtonContext;
