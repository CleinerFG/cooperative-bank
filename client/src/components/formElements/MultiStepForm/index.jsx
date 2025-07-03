import { MultiStepFormProvider } from '@/contexts/MultiStepFormContext';
import FormContent from './FormContent';

function MultiStepForm({
  fieldsValues,
  validationSchema,
  steps = [],
  onSubmitData,
}) {
  return (
    <MultiStepFormProvider
      fieldsValues={fieldsValues}
      validationSchema={validationSchema}
      steps={steps}
      onSubmitData={onSubmitData}
    >
      <FormContent />
    </MultiStepFormProvider>
  );
}

export default MultiStepForm;
