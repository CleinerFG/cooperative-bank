import { Outlet } from 'react-router-dom';

import Header from './Header';
import NavBar from './NavBar';
import styles from './styles.module.scss';

export default function AppLayout() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <NavBar />
    </div>
  );
}
