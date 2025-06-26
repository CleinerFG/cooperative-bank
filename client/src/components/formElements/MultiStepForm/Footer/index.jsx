import { useTranslation } from 'react-i18next';
import { useMultiStepForm } from '@/hooks/multiStepForm';
import Button from '../../Button';
import { StyledButtons, StyledFooter } from './Footer.styles';
import StepCounter from './StepCounter';

function Footer() {
  const { t } = useTranslation();
  const { state, handleNext, handlePrev } = useMultiStepForm();

  const isFirstStep = state.currentStep === 0;
  const isLastStep = state.currentStep === state.maxSteps - 1;

  const NextButton = <Button handleClick={handleNext}>{t('next')}</Button>;
  const BackButton = (
    <Button variant="secondary" handleClick={handlePrev}>
      {t('back')}
    </Button>
  );
  const FinishButton = <Button type="submit">{t('finish')}</Button>;

  return (
    <StyledFooter>
      <StyledButtons>
        {isFirstStep && NextButton}

        {!isFirstStep && !isLastStep && (
          <>
            {BackButton}
            {NextButton}
          </>
        )}

        {isLastStep && (
          <>
            {BackButton}
            {FinishButton}
          </>
        )}
      </StyledButtons>

      <StepCounter />
    </StyledFooter>
  );
}

export default Footer;
