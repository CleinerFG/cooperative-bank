import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import MultiStepFormContext from './MultiStepFormContext';
import { useState } from 'react';

function MultiStepFormProvider({
  fieldsValues,
  validationSchema,
  steps,
  children,
}) {
  const [state, setState] = useState({
    currentStep: 0,
    maxSteps: steps.length,
    animationDirection: 'next',
  });

  const methods = useForm({
    defaultValues: fieldsValues,
    mode: 'onBlur',
    resolver: yupResolver(validationSchema),
  });

  return (
    <FormProvider {...methods}>
      <MultiStepFormContext.Provider
        value={{ state, setState, steps, methodsRhf: methods }}
      >
        {children}
      </MultiStepFormContext.Provider>
    </FormProvider>
  );
}

export default MultiStepFormProvider;
