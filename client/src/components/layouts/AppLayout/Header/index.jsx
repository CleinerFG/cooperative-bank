import Notifications from './Notifications';

import { StyledHeader } from './Header.styles';
import ProfileAvatar from './ProfileAvatar';

export default function Header() {
  return (
    <StyledHeader>
      <ProfileAvatar />
      <Notifications />
    </StyledHeader>
  );
}
