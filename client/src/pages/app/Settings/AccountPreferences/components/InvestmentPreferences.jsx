import { useForm } from 'react-hook-form';
import BaseCard from '@/components/cards/BaseCard';
import RangeSlider from '@/components/formElements/RangeSlider';
import { ChartSpline } from 'lucide-react';
import {
  StyledFieldsContainer,
  StyledForm,
} from '@/components/formElements/StyledForm';
import FormActions from '../../components/FormActions';

function InvestmentPreferences() {
  const { control, handleSubmit, formState, reset } = useForm({
    defaultValues: {
      monthlyGoal: 500,
    },
  });

  return (
    <BaseCard title="investments" Icon={ChartSpline}>
      <StyledForm onSubmit={handleSubmit((data) => console.log(data))}>
        <StyledFieldsContainer>
          <RangeSlider
            control={control}
            name="monthlyGoal"
            label="monthlyGoal"
            min={0}
            max={20000}
            step={100}
            maskType="currency"
          />
        </StyledFieldsContainer>
        <FormActions formState={formState} formReset={reset} />
      </StyledForm>
    </BaseCard>
  );
}

export default InvestmentPreferences;
