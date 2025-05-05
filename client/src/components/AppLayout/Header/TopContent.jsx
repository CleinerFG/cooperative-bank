import Notifications from './Notifications';

import styles from '../../../styles/layout/header.module.scss';

function TopContent() {
  return (
    <div className={styles.headerTop}>
      <div className={styles.userProfile}>
        <div className={styles.userAvatar}>M</div>
        <div>
          <h3>Hello, Maria</h3>
        </div>
      </div>
      <Notifications />
    </div>
  );
}

export default TopContent;
