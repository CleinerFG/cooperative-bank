import { createContext, useContext } from 'react';

export const PageLayoutContext = createContext();
PageLayoutContext.displayName = 'PageLayout';

export const usePageLayoutContext = () => useContext(PageLayoutContext);
