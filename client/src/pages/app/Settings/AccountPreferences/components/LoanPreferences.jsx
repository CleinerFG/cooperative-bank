import { useForm } from 'react-hook-form';
import BaseCard from '@/components/cards/BaseCard';
import RangeSlider from '@/components/formElements/RangeSlider';
import Switch from '@/components/formElements/Switch';
import {
  StyledFieldsContainer,
  StyledForm,
} from '@/components/formElements/StyledForm';
import { HandCoins } from 'lucide-react';
import FormActions from '../../components/FormActions';

function LoanPreferences() {
  const { control, handleSubmit, watch, formState, reset } = useForm({
    defaultValues: {
      receiveRequests: true,
      interestRate: 5.0,
    },
  });

  const receiveRequests = watch('receiveRequests');
  return (
    <BaseCard title="loans" Icon={HandCoins}>
      <StyledForm onSubmit={handleSubmit}>
        <StyledFieldsContainer>
          <Switch
            control={control}
            name="receiveRequests"
            label="receiveRequests"
          />
          {receiveRequests && (
            <RangeSlider
              control={control}
              name="interestRate"
              label="interestRate"
              min={0}
              max={14}
              step={0.05}
              maskType="percent"
            />
          )}
        </StyledFieldsContainer>
        <FormActions formState={formState} formReset={reset} />
      </StyledForm>
    </BaseCard>
  );
}

export default LoanPreferences;
