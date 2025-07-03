import { useMultiStepForm } from '@/hooks/multiStepForm';
import SlideAnimation from '@/components/animations/SlideAnimation';
import Footer from './Footer';
import Header from './Header';
import { StyledContent, StyledMultiStepForm } from './MultiStepForm.styles';

function FormContent() {
  const { state, currentFields, handleSubmitData, CurrentStepComponent } =
    useMultiStepForm();

  return (
    <StyledMultiStepForm onSubmit={handleSubmitData}>
      <Header title="register" />
      <StyledContent>
        <SlideAnimation
          key={currentFields}
          initialPosition={{
            x: state.animationDirection === 'next' ? 400 : -400,
          }}
          isVisible={true}
        >
          <CurrentStepComponent />
        </SlideAnimation>
      </StyledContent>
      <Footer />
    </StyledMultiStepForm>
  );
}

export default FormContent;
