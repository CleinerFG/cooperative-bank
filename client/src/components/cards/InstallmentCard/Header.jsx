import { useTranslation } from 'react-i18next';
import {
  StyledHeader,
  StyledSequence,
  StyledStatus,
} from './InstallmentCard.styles';
import { CheckCircle, CircleAlert, Clock } from 'lucide-react';

function Header({ sequence, status }) {
  const { t } = useTranslation();

  const StatusIcon =
    status === 'paid'
      ? CheckCircle
      : status === 'pending'
      ? Clock
      : status === 'overdue'
      ? CircleAlert
      : null;

  return (
    <StyledHeader $status={status}>
      <StatusIcon />
      <StyledSequence>
        {sequence}º {t('installment')}
      </StyledSequence>
      <StyledStatus $status={status}>{t(status)}</StyledStatus>
    </StyledHeader>
  );
}

export default Header;
