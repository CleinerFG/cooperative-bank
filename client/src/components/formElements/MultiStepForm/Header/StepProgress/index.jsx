import { useTranslation } from 'react-i18next';
import { useMultiStepForm } from '@/hooks/multiStepForm';
import {
  StyledBar,
  StyledProgress,
} from '@/components/ui/ProgressBar/ProgressBar.styles';
import {
  StyledContainer,
  StyledLabel,
  StyledLabelsContainer,
} from './StepProgress.styles';

function StepProgress() {
  const { t } = useTranslation();
  const { state } = useMultiStepForm();
  const progress = ((state.currentStep + 1) / state.maxSteps) * 100;
  
  return (
    <StyledContainer>
      <StyledLabelsContainer>
        <StyledLabel>
          {t('stepOf', { current: state.currentStep + 1, max: state.maxSteps })}
        </StyledLabel>
        <StyledLabel $highlight>{Math.trunc(progress)}%</StyledLabel>
      </StyledLabelsContainer>
      <StyledBar>
        <StyledProgress $percent={progress} />
      </StyledBar>
    </StyledContainer>
  );
}

export default StepProgress;
