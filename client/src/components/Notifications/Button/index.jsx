import { Bell } from 'lucide-react';
import { StyledButton, StyledCount } from './Button.styles';
import { useNotifications } from '@/hooks/notifications';

function BellButton() {
  const { togglePanelIsOpen, notifications } = useNotifications();

  const unreadNotifications = notifications.filter(
    (notif) => !notif.isRead
  ).length;

  return (
    <StyledButton type="button" onClick={togglePanelIsOpen}>
      <Bell />
      {unreadNotifications > 0 && (
        <StyledCount>{unreadNotifications}</StyledCount>
      )}
    </StyledButton>
  );
}

export default BellButton;
