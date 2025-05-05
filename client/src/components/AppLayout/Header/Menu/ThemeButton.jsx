import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../../../contexts/theme';

import styles from '../../../../styles/components/menu.module.scss';

export default function ThemeButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={styles.btnTheme}
      onClick={toggleTheme}
      aria-label="Switch Theme"
    >
      <span>Switch Theme</span>
      {theme === 'light' ? (
        <Sun className={styles.themeIcon} aria-label="Theme Mode Icon" />
      ) : (
        <Moon className={styles.themeIcon} aria-label="Theme Mode Icon" />
      )}
    </button>
  );
}
