import NavLink from './NavLink';
import ThemeButton from './ThemeButton';
import { House, LogOut } from 'lucide-react';
import styles from '../../../styles/layout/bottom.nav.module.scss';

export default function BottomNav() {
  return (
    <nav className={styles.container}>
      <NavLink txt="Home" redirectTo="#">
        <House />
      </NavLink>
      <ThemeButton />
      <NavLink txt="Logout" redirectTo="#">
        <LogOut />
      </NavLink>
    </nav>
  );
}
