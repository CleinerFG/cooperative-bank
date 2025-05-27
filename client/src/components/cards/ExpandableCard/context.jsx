import { createContext, useContext } from 'react';

export const ExpandedCardContext = createContext();
ExpandedCardContext.displayName = 'ExpandedCardContext';

export function useExpandedCardContext() {
  return useContext(ExpandedCardContext);
}
