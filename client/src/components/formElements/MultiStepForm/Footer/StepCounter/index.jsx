import { StyledContainer, StyledIndicator } from './StepCounter.styles';

function StepCounter({ currentStep, maxSteps }) {
  return (
    <StyledContainer>
      {new Array(maxSteps).fill(null).map((_, i) => (
        <StyledIndicator
          $pastStep={currentStep > i}
          $currentStep={currentStep === i}
          key={i}
        />
      ))}
    </StyledContainer>
  );
}

export default StepCounter;
