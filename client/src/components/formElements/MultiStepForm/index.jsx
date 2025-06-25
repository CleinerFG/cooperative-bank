import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { StyledContent, StyledMultiStepForm } from './MultiStepForm.styles';

import Header from './Header';
import Footer from './Footer';

function MultiStepForm({ fieldsValues, validationSchema, steps = [] }) {
  const [step, setStep] = useState(0);
  const methods = useForm({
    defaultValues: fieldsValues,
    mode: 'onBlur',
    resolver: yupResolver(validationSchema),
  });
  const CurrentStep = steps[step].Component;

  const handleNext = async () => {
    const currentFields = steps[step].fields;
    const valid = await methods.trigger(currentFields);
    if (valid) setStep(step + 1);
  };

  const handlePrev = () => setStep(step - 1);

  return (
    <FormProvider {...methods}>
      <StyledMultiStepForm
        onSubmit={methods.handleSubmit((data) => {
          console.log(data);
        })}
      >
        <Header title="register" currentStep={step} maxSteps={steps.length} />
        <StyledContent>
          <CurrentStep />
        </StyledContent>
        <Footer
          currentStep={step}
          maxSteps={steps.length}
          onPrevStep={handlePrev}
          onNextStep={handleNext}
        />
      </StyledMultiStepForm>
    </FormProvider>
  );
}

export default MultiStepForm;
