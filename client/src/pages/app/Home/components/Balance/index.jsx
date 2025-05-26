import { currencyFormatter } from '@/utils/formatters';
import {
  StyledContainer,
  StyledLabel,
  StyledValue,
  StyledValueContainer,
} from './Balance.styles';
import ProtectValue from '@/components/ProtectValue';
import { useTranslation } from 'react-i18next';

function Balance() {
  const { t } = useTranslation();
  return (
    <StyledContainer>
      <StyledLabel>{t('availableBalance')}</StyledLabel>
      <StyledValueContainer>
        <ProtectValue>
          <StyledValue>{currencyFormatter(2435)}</StyledValue>
        </ProtectValue>
      </StyledValueContainer>
    </StyledContainer>
  );
}

export default Balance;
