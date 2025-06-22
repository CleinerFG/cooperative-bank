import useThemeContext from './useThemeContext';
import { LOCAL_STORAGE_THEME_KEY } from '@/constants';
import themes from '@/styles/themes';

function useTheme() {
  const { state, setState } = useThemeContext();

  const changeTheme = (themeName) => {
    if (!themes[themeName]) return;
    setState({ name: themeName, theme: themes[themeName] });
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, themeName);
  };
  return { changeTheme, currentTheme: state.name };
}

export default useTheme;
