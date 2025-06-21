import { useTranslation } from 'react-i18next';
import { StyledMessage, StyledWithoutNotifications } from './Panel.styles';
import { Bell } from 'lucide-react';

function WithoutNotifications() {
  const { t } = useTranslation();
  return (
    <StyledWithoutNotifications>
      <Bell />
      <StyledMessage>{t('withoutNotifications')}</StyledMessage>
    </StyledWithoutNotifications>
  );
}

export default WithoutNotifications;
