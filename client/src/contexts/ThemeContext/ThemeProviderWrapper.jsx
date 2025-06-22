import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import ThemeContext from './ThemeContext';
import themes from '@/styles/themes';
import { getInitialTheme } from './utils';

function ThemeProviderWrapper({ children }) {
  const [state, setState] = useState(() => {
    const themeName = getInitialTheme();
    return {
      name: themeName,
      theme: themes[themeName],
    };
  });

  return (
    <ThemeContext.Provider value={{ state, setState }}>
      <ThemeProvider theme={state.theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default ThemeProviderWrapper;
