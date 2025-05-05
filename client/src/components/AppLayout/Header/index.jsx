import Notifications from './Notifications';
import UserProfile from './UserProfile';
import AccountBalance from './AccountBalance';

import styles from '../../../styles/layout/header.module.scss';

export default function Header() {
  return (
    <>
      <header className={styles.container}>
        <div className={styles.headerTop}>
          <UserProfile />
          <Notifications />
        </div>

        <AccountBalance />
      </header>
    </>
  );
}
