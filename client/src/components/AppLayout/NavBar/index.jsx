import LinkItem from './LinkItem';

import { House, ArrowLeftRight, CircleUser, Settings } from 'lucide-react';
import styles from './styles.module.scss';

const navLinks = [
  { label: 'home', navigateTo: '/app', Icon: House, strictMatch: true },
  {
    label: 'transactions',
    navigateTo: '/app/transactions',
    Icon: ArrowLeftRight,
  },
  { label: 'account', navigateTo: '/app/account', Icon: CircleUser },
  { label: 'settings', navigateTo: '/app/settings', Icon: Settings },
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
