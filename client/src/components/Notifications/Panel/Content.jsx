import { useNotifications } from '@/hooks/notifications';
import NotificationCard from '../NotificationCard';
import { StyledContent } from './Panel.styles';

function Content() {
  const { notifications } = useNotifications();
  return (
    <StyledContent>
      {notifications.length > 0 ? (
        notifications.map((notif) => (
          <NotificationCard
            key={notif.id}
            id={notif.id}
            isRead={notif.isRead}
          />
        ))
      ) : (
        <span>Sem Notificações</span>
      )}
    </StyledContent>
  );
}

export default Content;
