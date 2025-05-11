import { Outlet } from 'react-router-dom';

import Header from './Header';
import NavBar from './NavBar';
import MotionWrapper from './MotionWrapper';
import useRouteTransitonDirection from '../../hooks/useRouteTransitionDirection';
import styles from './styles.module.scss';

export default function AppLayout() {
  const { motionKey, direction } = useRouteTransitonDirection();

  return (
    <div className={styles.appWrapper}>
      <Header />
      <MotionWrapper motionKey={motionKey} direction={direction}>
        <div className={styles.content}>
          <Outlet />
        </div>
      </MotionWrapper>

      <NavBar />
    </div>
  );
}
