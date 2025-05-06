import Notifications from './Notifications';
import UserProfile from './UserProfile';
import AccountBalance from './AccountBalance';

import styles from './styles.module.scss';
import QuickActions from './QuickActions';

export default function Header() {
  return (
    <>
      <header className={styles.container}>
        <div className={styles.headerTop}>
          <UserProfile />
          <Notifications />
        </div>
        <AccountBalance />
        <QuickActions />
      </header>
    </>
  );
}
