import LinkItem from './LinkItem';
import ThemeButton from './ThemeButton';
import styles from './styles.module.scss';

const navLinks = [
  { label: 'Home', redirectTo: '/app', iconName: 'House' },
  {
    label: 'Transactions',
    redirectTo: '/app/transactions',
    iconName: 'ArrowLeftRight',
  },
  { label: 'Settings', redirectTo: '/app/settings', iconName: 'Settings' },
];

export default function BottomNav() {
  return (
    <nav className={styles.container}>
      {navLinks.map(({ label, redirectTo, iconName }) => (
        <LinkItem
          label={label}
          redirectTo={redirectTo}
          iconName={iconName}
          key={redirectTo}
        />
      ))}
      <ThemeButton />
    </nav>
  );
}
