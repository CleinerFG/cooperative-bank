import { useFormContext } from 'react-hook-form';
import PasswordInput from '@/components/formElements/PasswordInput';
import BaseStep from './BaseStep';
import { Lock } from 'lucide-react';

function Step3() {
  const { control } = useFormContext();
  return (
    <BaseStep title="security" Icon={Lock}>
      <PasswordInput control={control} name="password" label="password" />
      <PasswordInput
        control={control}
        name="confirmPassword"
        label="confirmPassword"
      />
    </BaseStep>
  );
}

export default Step3;
