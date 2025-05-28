import { useTranslation } from 'react-i18next';
import { currencyFormatter } from '@/utils/formatters';
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
          {formatCurrency ? currencyFormatter(value) : value}
        </StyledValue>
      </ProtectValue>
    </StyledContainer>
  );
}

export default NumIndicator;
