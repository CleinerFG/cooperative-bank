import {
  createContext,
  useState,
  useContext,
  useEffect,
} from 'react';

const LOCAL_STORAGE_THEME_KEY = 'cooperative-bank-theme';
const DEFAULT_THEME = 'light';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const localTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);
    if (['dark', 'light'].includes(localTheme)) {
      return localTheme;
    }
    return DEFAULT_THEME;
  });

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, updateTheme: setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ThemeContext);
