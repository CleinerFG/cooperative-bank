import { createContext, useContext } from 'react';

export const PageLayoutContext = createContext();
export const usePageLayoutContext = () => useContext(PageLayoutContext);
