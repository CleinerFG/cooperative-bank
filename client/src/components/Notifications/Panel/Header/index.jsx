import { useTranslation } from 'react-i18next';
import { useNotifications } from '@/hooks/notifications';
import {
  StyledActionButtons,
  StyledButton,
  StyledContainer,
  StyledTitle,
} from './Header.styles';

function Header() {
  const { t } = useTranslation();
  const { notifications, setAllNotificationsRead, removeAllNotifications } =
    useNotifications();
  return (
    <StyledContainer>
      <StyledTitle>{t('notifications')}</StyledTitle>
      {notifications.length > 0 && (
        <StyledActionButtons>
          <StyledButton onClick={setAllNotificationsRead}>
            {t('markAllRead')}
          </StyledButton>
          <StyledButton onClick={removeAllNotifications}>
            {t('clearAll')}
          </StyledButton>
        </StyledActionButtons>
      )}
    </StyledContainer>
  );
}

export default Header;
