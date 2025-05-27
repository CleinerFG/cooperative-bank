import { useTranslation } from 'react-i18next';
import { currencyFormatter } from '@/utils/formatters';
import {
  StyledContainer,
  StyledIconWrapper,
  StyledItem,
  StyledValue,
  StyledLabel,
  StyledValueContainer,
} from './MetricItem.styles';
import { TrendingUp, TrendingDown } from 'lucide-react';
import ProtectValue from '@/components/ProtectValue';

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
        <StyledValueContainer>
          <ProtectValue
            dotColor={type === 'inflow' ? 'green' : 'red'}
            dotSize={12}
          >
            <StyledValue $type={type}>{currencyFormatter(value)}</StyledValue>
          </ProtectValue>
        </StyledValueContainer>
      </StyledItem>
    </StyledContainer>
  );
}

export default MetricItem;
