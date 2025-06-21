import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import BaseCard from '@/components/cards/BaseCard';
import validationSchema from './validationSchema';
import PasswordInput from '@/components/formElements/PasswordInput';
import {
  StyledFieldsContainer,
  StyledForm,
} from '@/components/formElements/StyledForm';
import { UserLock } from 'lucide-react';
import FormActions from '../../../components/FormActions';

function LoginPassConfig() {
  const { control, handleSubmit, formState, reset } = useForm({
    defaultValues: {
      newPassword: '',
      currentPassword: '',
    },
    mode: 'onTouched',
    resolver: yupResolver(validationSchema),
  });

  return (
    <BaseCard title="changeLoginPass" Icon={UserLock} iconColored="secondary">
      <StyledForm onSubmit={handleSubmit((data) => console.log(data))}>
        <StyledFieldsContainer>
          <PasswordInput
            control={control}
            name="newPassword"
            label="newPassword"
          />

          <PasswordInput
            control={control}
            name="currentPassword"
            label="currentPassword"
          />
        </StyledFieldsContainer>
        <FormActions formState={formState} formReset={reset} />
      </StyledForm>
    </BaseCard>
  );
}

export default LoginPassConfig;
