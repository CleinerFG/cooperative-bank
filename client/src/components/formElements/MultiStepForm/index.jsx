// import { useState } from 'react';
// import { FormProvider, useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import SlideAnimation from '@/components/animations/SlideAnimation';
// import { StyledContent, StyledMultiStepForm } from './MultiStepForm.styles';

// import Header from './Header';
// import Footer from './Footer';

// function MultiStepForm({ fieldsValues, validationSchema, steps = [] }) {
//   const [step, setStep] = useState(0);
//   const [animationDirection, setAnimationDirection] = useState('next');

//   const methods = useForm({
//     defaultValues: fieldsValues,
//     mode: 'onBlur',
//     resolver: yupResolver(validationSchema),
//   });
//   const CurrentStep = steps[step].Component;
//   const currentFields = steps[step].fields;

//   const handleNext = async () => {
//     setAnimationDirection('next');
//     const valid = await methods.trigger(currentFields);
//     if (valid) setStep(step + 1);
//   };

//   const handlePrev = () => {
//     setAnimationDirection('prev');
//     setStep(step - 1);
//   };

//   return (
//     <FormProvider {...methods}>
//       <StyledMultiStepForm
//         onSubmit={methods.handleSubmit((data) => {
//           console.log(data);
//         })}
//       >
//         <Header title="register" currentStep={step} maxSteps={steps.length} />
//         <StyledContent>
//           <SlideAnimation
//             key={currentFields}
//             initialPosition={{ x: animationDirection === 'next' ? 400 : -400 }}
//             isVisible={true}
//           >
//             <CurrentStep />
//           </SlideAnimation>
//         </StyledContent>
//         <Footer
//           currentStep={step}
//           maxSteps={steps.length}
//           onPrevStep={handlePrev}
//           onNextStep={handleNext}
//         />
//       </StyledMultiStepForm>
//     </FormProvider>
//   );
// }

// export default MultiStepForm;

import { MultiStepFormProvider } from '@/contexts/MultiStepFormContext';
import FormContent from './FormContent';

function MultiStepForm({ fieldsValues, validationSchema, steps = [] }) {
  return (
    <MultiStepFormProvider
      fieldsValues={fieldsValues}
      validationSchema={validationSchema}
      steps={steps}
    >
      <FormContent />
    </MultiStepFormProvider>
  );
}

export default MultiStepForm;
