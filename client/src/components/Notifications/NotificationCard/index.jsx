import { useNotifications } from '@/hooks/notifications';
import { StyledContainer } from './NotificationCard.styles';
import { Trash } from 'lucide-react';
import EnterAndExitAnimation from '@/components/animations/EnterAndExitAnimation';
import useDelayedRemoval from '@/hooks/useDelayedRemoval';

function NotificationCard({ id, isRead }) {
  const { setNotificationRead, removeNotification } = useNotifications();

  const { isVisible, unmountComponent, handleAnimationComplete } =
    useDelayedRemoval(() => removeNotification(id));

  const handleRead = () => {
    if (!isRead) setNotificationRead(id);
  };

  return (
    <EnterAndExitAnimation
      onAnimationComplete={handleAnimationComplete}
      isVisible={isVisible}
    >
      <StyledContainer $isRead={isRead} onClick={handleRead}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
        distinctio
        <Trash onClick={unmountComponent} />
      </StyledContainer>
    </EnterAndExitAnimation>
  );
}

export default NotificationCard;
