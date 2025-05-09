import { Outlet, useLocation } from 'react-router-dom';

import Header from './Header';
import NavBar from './NavBar';
import MotionWrapper from './MotionWrapper';
import styles from './styles.module.scss';

export default function AppLayout() {
  const location = useLocation();

  return (
    <div className={styles.appWrapper}>
      <Header />
      <MotionWrapper key={location.pathname}>
        <div className={styles.content}>
          <Outlet />
        </div>
      </MotionWrapper>

      <NavBar />
    </div>
  );
}
