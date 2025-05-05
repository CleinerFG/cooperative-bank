import Notifications from './Notifications';
import UserProfile from './UserProfile';

import styles from '../../../styles/layout/header.module.scss';

export default function Header() {
  return (
    <>
      <header className={styles.container}>
        <div className={styles.headerTop}>
          <UserProfile />
          <Notifications />
        </div>

        {/* <div className="account-info">
          <p className="account-label">Saldo em conta</p>
          <div className="balance">
            <span>R$ 7.482,59</span>
            <button className="hide-balance">
              <i className="fas fa-eye"></i>
            </button>
          </div>
        </div> */}
      </header>
    </>
  );
}
