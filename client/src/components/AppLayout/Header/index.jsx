import Notifications from './Notifications';
import UserProfile from './UserProfile/';

import styles from './styles.module.scss';

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <UserProfile />
        <Notifications />
      </header>
    </>
  );
}
