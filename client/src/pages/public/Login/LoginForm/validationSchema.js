import * as yup from 'yup';

export default yup.object({
  email: yup.string().required('requiredField'),
  password: yup.string().required('requiredField'),
});
