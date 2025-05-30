import { numberToCurrency } from '@/utils/formatters';
import ProtectValue from '@/components/ProtectValue';
import {
  StyledBar,
  StyledContainer,
  StyledLabel,
  StyledLabelContainer,
  StyledProgress,
} from './ProgressBar.styles';
import { useTranslation } from 'react-i18next';

const calculatePercent = (current, total) => {
  return current > total ? 100 : (current / total) * 100;
};

function ProgressBar({ label, current = 0, total = 100, formatCurrency }) {
  const { t } = useTranslation();
  const percent = calculatePercent(current, total);

  return (
    <StyledContainer>
      <StyledLabelContainer $haveLabel={label}>
        {label ? <StyledLabel>{t(label)}</StyledLabel> : null}
        <ProtectValue fontSize="sm">
          <StyledLabel>
            {formatCurrency ? numberToCurrency(current) : current} /{' '}
            {formatCurrency ? numberToCurrency(total) : total}
          </StyledLabel>
        </ProtectValue>
      </StyledLabelContainer>
      <StyledBar>
        <StyledProgress $percent={percent} />
      </StyledBar>
    </StyledContainer>
  );
}

export default ProgressBar;
