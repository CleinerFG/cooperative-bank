import { useFormContext } from 'react-hook-form';
import Input from '@/components/formElements/Input';
import BaseStep from './BaseStep';
import { IdCard } from 'lucide-react';

function Step2() {
  const { control } = useFormContext();
  return (
    <BaseStep title="Dados Pessoais" Icon={IdCard}>
      <Input control={control} name="fullName" label="fullName" />
      <Input
        control={control}
        name="birthDate"
        label="birthDate"
        inputType="date"
      />
    </BaseStep>
  );
}

export default Step2;
