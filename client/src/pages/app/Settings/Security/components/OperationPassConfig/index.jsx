import { useForm } from 'react-hook-form';
import BaseCard from '@/components/cards/BaseCard';
import PasswordInput from '@/components/formElements/PasswordInput';
import {
  StyledFieldsContainer,
  StyledForm,
} from '@/components/formElements/StyledForm';
import { KeyRound } from 'lucide-react';
import FormActions from '../../../components/FormActions';
import { yupResolver } from '@hookform/resolvers/yup';
import validationSchema from './validationSchema';

// Info from server
const USER_CONFIG = {
  haveOperationPass: true,
};

const title = USER_CONFIG.haveOperationPass
  ? 'changeNumOpPass'
  : 'setNumOpPass';

function OperationPassConfig() {
  const { control, handleSubmit, formState, reset } = useForm({
    defaultValues: {
      newPassword: '',
      currentPassword: '',
    },
    mode: 'onTouched',
    resolver: yupResolver(validationSchema),
  });

  return (
    <BaseCard title={title} Icon={KeyRound} iconColored="secondary">
      <StyledForm onSubmit={handleSubmit((data) => console.log(data))}>
        <StyledFieldsContainer>
          <PasswordInput
            control={control}
            name="newPassword"
            label="newPassword"
            isNumeric
          />

          {USER_CONFIG.haveOperationPass && (
            <PasswordInput
              control={control}
              name="currentPassword"
              label="currentPassword"
              isNumeric
            />
          )}
        </StyledFieldsContainer>
        <FormActions formState={formState} formReset={reset} />
      </StyledForm>
    </BaseCard>
  );
}

export default OperationPassConfig;
