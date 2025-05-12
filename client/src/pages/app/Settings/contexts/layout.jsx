import { createContext, useContext } from 'react';

export const LayoutContext = createContext({
  title: '',
  setTitle: () => {},
});

export const useLayout = () => useContext(LayoutContext);
