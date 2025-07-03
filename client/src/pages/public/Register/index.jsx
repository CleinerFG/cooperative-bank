import MultiStepForm from '@/components/formElements/MultiStepForm';
import { useCreateUser } from '@/hooks/api/useUsers';
import { Step1, Step2, Step3 } from './formSteps';
import validationSchema from './validationSchema';

function Register() {
  const { mutate } = useCreateUser();

  const handleCreateUser = (data) => {
    console.log(data);
    mutate(data);
  };

  return (
    <MultiStepForm
      fieldsValues={{
        cpf: '',
        email: '',
        fullName: '',
        birthDate: '',
        password: '',
        confirmPassword: '',
      }}
      steps={[
        { Component: Step1, fields: ['cpf', 'email'] },
        { Component: Step2, fields: ['fullName', 'birthDate'] },
        { Component: Step3, fields: ['password', 'confirmPassword'] },
      ]}
      validationSchema={validationSchema}
      onSubmitData={handleCreateUser}
    />
  );
}

export default Register;
