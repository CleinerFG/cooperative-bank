import LinkItem from './LinkItem';
// import ThemeButton from './ThemeButton';
import styles from './styles.module.scss';

const navLinks = [
  { label: 'Home', navigateTo: '/app', iconName: 'House' },
  {
    label: 'Transactions',
    navigateTo: '/app/transactions',
    iconName: 'ArrowLeftRight',
  },
  { label: 'Account', navigateTo: '/app/account', iconName: 'CircleUser' },
  { label: 'Settings', navigateTo: '/app/settings', iconName: 'Settings' },
];

export default function BottomNav() {
  return (
    <nav className={styles.container}>
      {navLinks.map(({ label, navigateTo, iconName }) => (
        <LinkItem
          label={label}
          navigateTo={navigateTo}
          iconName={iconName}
          key={navigateTo}
        />
      ))}
      {/* <ThemeButton /> */}
    </nav>
  );
}
