import { ThemeContext } from '@/contexts/ThemeContext';
import { useContext } from 'react';

function useThemeContext() {
  return useContext(ThemeContext);
}

export default useThemeContext;
