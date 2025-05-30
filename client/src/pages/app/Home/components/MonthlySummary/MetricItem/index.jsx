import { useTranslation } from 'react-i18next';
import ProtectValue from '@/components/ProtectValue';
import { numberToCurrency } from '@/utils/formatters';
import {
  StyledContainer,
  StyledIconWrapper,
  StyledItem,
  StyledValue,
  StyledLabel,
} from './MetricItem.styles';
import { TrendingUp, TrendingDown } from 'lucide-react';

const Icons = {
  inflow: <TrendingUp />,
  outflow: <TrendingDown />,
};

function MetricItem({ type, value }) {
  const { t } = useTranslation();
  return (
    <StyledContainer>
      <StyledIconWrapper $type={type}>{Icons[type]}</StyledIconWrapper>
      <StyledItem>
        <StyledLabel>{t(type)}</StyledLabel>
        <ProtectValue
          dotColor={type === 'inflow' ? 'green' : 'red'}
          fontSize="lg"
          dotSize={12}
        >
          <StyledValue $type={type}>{numberToCurrency(value)}</StyledValue>
        </ProtectValue>
      </StyledItem>
    </StyledContainer>
  );
}

export default MetricItem;
