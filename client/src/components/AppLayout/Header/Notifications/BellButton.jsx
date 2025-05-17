import { Bell } from 'lucide-react';
import { StyledButtonIcon } from './Notifications.styles';

function BellButton() {
  return (
    <StyledButtonIcon type="button">
      <Bell />
      <span>4</span>
    </StyledButtonIcon>
  );
}

export default BellButton;
