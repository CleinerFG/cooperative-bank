import {
  StyledBar,
  StyledProgress,
} from '@/components/ui/ProgressBar/ProgressBar.styles';
import {
  StyledContainer,
  StyledLabel,
  StyledLabelsContainer,
} from './StepProgress.styles';
import { useTranslation } from 'react-i18next';

function StepProgress({ current, max }) {
  const { t } = useTranslation();
  const progress = (current / max) * 100;
  return (
    <StyledContainer>
      <StyledLabelsContainer>
        <StyledLabel>{t('stepOf', { current, max })}</StyledLabel>
        <StyledLabel $highlight>{Math.trunc(progress)}%</StyledLabel>
      </StyledLabelsContainer>
      <StyledBar>
        <StyledProgress $percent={progress} />
      </StyledBar>
    </StyledContainer>
  );
}

export default StepProgress;
