import { Bell } from 'lucide-react';
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
      <div className={styles.notifications}>
        <Bell />
        <span className={styles.badge}>3</span>
      </div>
    </div>
  );
}

export default TopContent;
