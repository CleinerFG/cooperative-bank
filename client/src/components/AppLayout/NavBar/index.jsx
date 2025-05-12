import LinkItem from './LinkItem';

import { House, ArrowLeftRight, CircleUser, Settings } from 'lucide-react';
import styles from './styles.module.scss';

const navLinks = [
  { label: 'Home', navigateTo: '/app', Icon: House, strictMatch: true },
  {
    label: 'Transactions',
    navigateTo: '/app/transactions',
    Icon: ArrowLeftRight,
  },
  { label: 'Account', navigateTo: '/app/account', Icon: CircleUser },
  { label: 'Settings', navigateTo: '/app/settings', Icon: Settings },
];

export default function NavBar() {
  return (
    <nav className={styles.container}>
      {navLinks.map(({ label, navigateTo, Icon, strictMatch }) => (
        <LinkItem
          label={label}
          navigateTo={navigateTo}
          Icon={Icon}
          strictMatch={strictMatch}
          key={navigateTo}
        />
      ))}
    </nav>
  );
}
