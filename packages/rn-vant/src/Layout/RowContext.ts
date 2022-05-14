import { createContext } from 'react';

export interface RowContextState {
  gutter?: number;
}

const RowContext = createContext<RowContextState>({});

export default RowContext;
