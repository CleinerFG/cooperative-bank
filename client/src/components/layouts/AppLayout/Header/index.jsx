import Notifications from '@/components/Notifications';
import ToggleVisibility from './ToggleVisibility';
import { StyledHeader } from './Header.styles';

export default function Header() {
  return (
    <StyledHeader>
      <ToggleVisibility />
      <Notifications />
    </StyledHeader>
  );
}
