import { Outlet } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import styles from '../../styles/layout/layout.module.scss';

export default function AppLayout() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
