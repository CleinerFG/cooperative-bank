import LinkItem from './LinkItem';
import { House, ArrowLeftRight, CircleUser, Settings } from 'lucide-react';
import { StyledNav } from './NavBar.styles';

const navLinks = [
  { label: 'home', navigateTo: '/app', Icon: <House />, strictMatch: true },
  {
    label: 'transactions',
    navigateTo: '/app/transactions',
    Icon: <ArrowLeftRight />,
  },
  { label: 'account', navigateTo: '/app/account', Icon: <CircleUser /> },
  { label: 'settings', navigateTo: '/app/settings', Icon: <Settings /> },
];

export default function NavBar() {
  return (
    <StyledNav>
      <ul>
        {navLinks.map(({ label, navigateTo, Icon, strictMatch }) => (
          <LinkItem
            label={label}
            navigateTo={navigateTo}
            Icon={Icon}
            strictMatch={strictMatch}
            key={navigateTo}
          />
        ))}
      </ul>
    </StyledNav>
  );
}
