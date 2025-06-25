import { useTranslation } from 'react-i18next';
import Button from '../../Button';
import { StyledButtons, StyledFooter } from './Footer.styles';
import StepCounter from './StepCounter';
import { ChevronLeft } from 'lucide-react';

function Footer({ currentStep, maxSteps, onPrevStep, onNextStep }) {
  const { t } = useTranslation();
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === maxSteps - 1;

  const NextButton = <Button handleClick={onNextStep}>{t('next')}</Button>;
  const BackButton = (
    <Button variant="secondary" handleClick={onPrevStep}>
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

      <StepCounter currentStep={currentStep} maxSteps={maxSteps} />
    </StyledFooter>
  );
}

export default Footer;
