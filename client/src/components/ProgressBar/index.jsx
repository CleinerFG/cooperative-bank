import { currencyFormatter } from '@/utils/formatters';
import ProtectValue from '../ProtectValue';
import {
  StyledBar,
  StyledContainer,
  StyledLabel,
  StyledProgress,
} from './ProgressBar.styles';

const calculatePercent = (current, total) => {
  return current > total ? 100 : (current / total) * 100;
};

function ProgressBar({ current = 0, total = 100, formatCurrency }) {
  const percent = calculatePercent(current, total);
  return (
    <StyledContainer>
      <ProtectValue fontSize="sm">
        <StyledLabel>
          {formatCurrency ? currencyFormatter(current) : current} /{' '}
          {formatCurrency ? currencyFormatter(total) : total}
        </StyledLabel>
      </ProtectValue>
      <StyledBar>
        <StyledProgress $percent={percent} />
      </StyledBar>
    </StyledContainer>
  );
}

export default ProgressBar;
