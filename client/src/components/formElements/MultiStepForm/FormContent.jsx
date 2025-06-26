import { useMultiStepForm } from '@/hooks/multiStepForm';
import SlideAnimation from '@/components/animations/SlideAnimation';
import Footer from './Footer';
import Header from './Header';
import { StyledContent, StyledMultiStepForm } from './MultiStepForm.styles';

function FormContent() {
  const { state, methodsRhf, currentFields, CurrentStepComponent } =
    useMultiStepForm();

  return (
    <StyledMultiStepForm
      onSubmit={methodsRhf.handleSubmit((data) => {
        console.log(data);
      })}
    >
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
