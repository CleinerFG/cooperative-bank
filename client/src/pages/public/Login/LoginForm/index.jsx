import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';
import Input from '@/components/formElements/Input';
import PasswordInput from '@/components/formElements/PasswordInput';
import { StyledFieldsContainer } from '@/components/formElements/StyledForm';
import validationSchema from './validationSchema';
import {
  StyledContent,
  StyledFooter,
  StyledHeader,
  StyledLoginForm,
} from './LoginForm.styles';
import Button from '@/components/formElements/Button';

function LoginForm() {
  const { t } = useTranslation();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onBlur',
    resolver: yupResolver(validationSchema),
  });

  return (
    <StyledLoginForm onSubmit={handleSubmit((data) => console.log(data))}>
      <StyledHeader>
        <h1>{t('loginAccount')}</h1>
        <img src="/login.svg" alt="Login Img" />
      </StyledHeader>
      <StyledContent>
        <StyledFieldsContainer>
          <Input control={control} name="email" label="email" />
          <PasswordInput control={control} name="password" label="password" />
        </StyledFieldsContainer>
        <StyledFooter>
          <Button type="submit">{t('login')}</Button>
        </StyledFooter>
      </StyledContent>
    </StyledLoginForm>
  );
}

export default LoginForm;
