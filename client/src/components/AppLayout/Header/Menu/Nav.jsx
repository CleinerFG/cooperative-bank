import { Link } from 'react-router-dom';

import styles from '../../../../styles/components/menu.module.scss';
import ThemeButton from './ThemeButton';

function Li({ children }) {
  return <li className={styles.navItem}>{children}</li>;
}

export default function Nav({ ref }) {
  return (
    <nav ref={ref} className={styles.nav} aria-label="Main navigation">
      <ul className={styles.navList}>
        <Li>
          <Link to="/app/my-account">My Account</Link>
        </Li>
        <Li>
          <ThemeButton />
        </Li>
        <Li>
          <Link to="/app/settings">Settings</Link>
        </Li>
        <Li>
          <Link to="#">Logout</Link>
        </Li>
      </ul>
    </nav>
  );
}
