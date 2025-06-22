import { LOCAL_STORAGE_THEME_KEY } from '@/constants';

function getBrowserColorPreference() {
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  return prefersDarkScheme.matches ? 'dark' : 'light';
}

function getInitialTheme() {
  const storedTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);
  if (['light', 'dark'].includes(storedTheme)) {
    return storedTheme;
  }
  return getBrowserColorPreference();
}

export { getInitialTheme };
