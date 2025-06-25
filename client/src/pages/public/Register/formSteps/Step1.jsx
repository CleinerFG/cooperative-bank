import { useFormContext } from 'react-hook-form';
import Input from '@/components/formElements/Input';
import { User } from 'lucide-react';
import BaseStep from './BaseStep';

function Step1() {
  const { control } = useFormContext();
  return (
    <BaseStep title="Informações Básicas" Icon={User}>
      <Input control={control} name="cpf" label="CPF" maskType="cpf" />
      <Input control={control} name="email" label="email" inputType="email" />
    </BaseStep>
  );
}

export default Step1;
