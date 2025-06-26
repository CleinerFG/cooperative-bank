import { useMultiStepForm } from '@/hooks/multiStepForm';
import { StyledContainer, StyledIndicator } from './StepCounter.styles';

function StepCounter() {
  const { state } = useMultiStepForm();

  return (
    <StyledContainer>
      {new Array(state.maxSteps).fill(null).map((_, i) => (
        <StyledIndicator
          $pastStep={state.currentStep > i}
          $currentStep={state.currentStep === i}
          key={i}
        />
      ))}
    </StyledContainer>
  );
}

export default StepCounter;
