import { useTranslation } from 'react-i18next';
import {
  StyledContent,
  StyledItem,
  StyledLabel,
  StyledValue,
} from './InstallmentCard.styles';
import { formatDate, numberToCurrency } from '@/utils/formatters';

function Content({ value, dueDate }) {
  const { t } = useTranslation();
  return (
    <StyledContent>
      <StyledItem>
        <StyledLabel>{t('value')}</StyledLabel>
        <StyledValue>{numberToCurrency(value)}</StyledValue>
      </StyledItem>
      <StyledItem>
        <StyledLabel>{t('dueDate')}</StyledLabel>
        <StyledValue>{formatDate(dueDate)}</StyledValue>
      </StyledItem>
    </StyledContent>
  );
}

export default Content;
