import { Outlet } from 'react-router-dom';

import Header from './Header';
import BottomNav from './BottomNav';
import styles from './styles.module.scss';

export default function AppLayout() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
}
