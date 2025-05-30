import { useTranslation } from 'react-i18next';
import { numberToCurrency } from '@/utils/formatters';
import ProtectValue from '@/components/ProtectValue';
import {
  StyledContainer,
  StyledSubTitle,
  StyledValue,
} from './NumIndicator.styles';

function NumIndicator({ title, value, formatCurrency }) {
  const { t } = useTranslation();

  return (
    <StyledContainer>
      <StyledSubTitle>{t(title)}</StyledSubTitle>
      <ProtectValue fontSize="md" dotQty={3}>
        <StyledValue>
          {formatCurrency ? numberToCurrency(value) : value}
        </StyledValue>
      </ProtectValue>
    </StyledContainer>
  );
}

export default NumIndicator;
