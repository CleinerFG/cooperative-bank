import { createContext, useContext } from 'react';

export const LayoutContext = createContext({
  layoutProps: {},
  setLayoutProps: () => {},
});

export const useLayout = () => useContext(LayoutContext);
