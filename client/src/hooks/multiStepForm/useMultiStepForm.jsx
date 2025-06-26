import useMultiStepFormContext from './useMultiStepFormContext';

function useMultiStepForm() {
  const { state, setState, steps, methodsRhf } = useMultiStepFormContext();

  const currentFields = steps[state.currentStep].fields;
  const CurrentStepComponent = steps[state.currentStep].Component;

  const handleNext = async () => {
    const valid = await methodsRhf.trigger(currentFields);
    if (valid) {
      setState({
        ...state,
        currentStep: state.currentStep + 1,
        animationDirection: 'next',
      });
    }
  };

  const handlePrev = () => {
    setState({
      ...state,
      currentStep: state.currentStep - 1,
      animationDirection: 'prev',
    });
  };

  return {
    state,
    handleNext,
    handlePrev,
    methodsRhf,
    currentFields,
    CurrentStepComponent,
  };
}

export default useMultiStepForm;
