import { useTheme } from '../../../contexts/theme';

import { Sun, Moon } from 'lucide-react';
// import * as Icons from 'lucide-react';
import styles from './styles.module.scss';

export default function ThemeButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={styles.btnTheme}
      onClick={toggleTheme}
      aria-label="Switch Theme"
    >
      {theme === 'light' ? (
        <Sun className={styles.themeIcon} aria-label="Theme Mode Icon" />
      ) : (
        <Moon className={styles.themeIcon} aria-label="Theme Mode Icon" />
      )}
      <span>Change Theme</span>
    </button>
  );
}
