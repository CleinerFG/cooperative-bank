import { useTranslation } from 'react-i18next';
import {
  StyledContainer,
  StyledContent,
  StyledIconContainer,
  StyledLabel,
  StyledValue,
} from './DetailItem.styles';
import {
  formatDate,
  numberToCurrency,
  numberToPercent,
} from '@/utils/formatters';

const formatters = {
  date: formatDate,
  currency: numberToCurrency,
  percent: numberToPercent,
};

function DetailItem({ label, value, format, Icon }) {
  const { t } = useTranslation();
  let formattedValue = value;

  if (format) {
    if (format === 'months') {
      formattedValue = t('months', { value });
    } else {
      const formatter = formatters[format];
      formattedValue = formatter(value);
    }
  }

  return (
    <StyledContainer>
      <StyledIconContainer>{Icon && <Icon />}</StyledIconContainer>
      <StyledContent>
        <StyledLabel>{t(label)}</StyledLabel>
        <StyledValue>{formattedValue}</StyledValue>
      </StyledContent>
    </StyledContainer>
  );
}

export default DetailItem;
