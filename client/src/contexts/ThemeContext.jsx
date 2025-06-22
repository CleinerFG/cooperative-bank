import { createContext, useState, useContext } from 'react';
import { ThemeProvider } from 'styled-components';

import themes from '@/styles/themes.js';
import { DEFAULT_THEME, LOCAL_STORAGE_THEME_KEY } from '@/constants';

const ThemeContext = createContext();
ThemeContext.displayName = 'ThemeContext';

const getInitialTheme = () => {
  const storedTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);
  const themeName = ['light', 'dark'].includes(storedTheme)
    ? storedTheme
    : DEFAULT_THEME;
  return {
    name: themeName,
    theme: themes[themeName],
  };
};

export function ThemeProviderWrapper({ children }) {
  const [styledTheme, setStyledTheme] = useState(getInitialTheme);

  const changeTheme = (themeName) => {
    if (!themes[themeName]) return;
    setStyledTheme({ name: themeName, theme: themes[themeName] });
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, themeName);
  };

  return (
    <ThemeContext.Provider value={{ themeName: styledTheme.name, changeTheme }}>
      <ThemeProvider theme={styledTheme.theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ThemeContext);
