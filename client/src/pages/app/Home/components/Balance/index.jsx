import { useTranslation } from 'react-i18next';
import ProtectValue from '@/components/ProtectValue';
import { currencyFormatter } from '@/utils/formatters';
import { StyledContainer, StyledLabel, StyledValue } from './Balance.styles';

function Balance() {
  const { t } = useTranslation();

  return (
    <StyledContainer>
      <StyledLabel>{t('availableBalance')}</StyledLabel>
      <ProtectValue fontSize="2xl">
        <StyledValue>{currencyFormatter(2435)}</StyledValue>
      </ProtectValue>
    </StyledContainer>
  );
}

export default Balance;
