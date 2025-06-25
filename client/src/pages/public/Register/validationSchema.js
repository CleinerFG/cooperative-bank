import * as yup from 'yup';
import { cpfTestRule, has18YearsTestRule } from '@/utils/validation/yupTests';
import { loginPasswordRules } from '@/utils/validation/yupFieldRules';

const onlyLettersTestRule = {
  name: 'only-letters',
  message: 'fieldOnlyLetters',
  test: (value) => /^[A-Za-zÀ-ÿ]+(?: [A-Za-zÀ-ÿ]+)*$/.test(value),
};

export default yup.object({
  cpf: yup.string().required('requiredField').test(cpfTestRule),
  email: yup.string().required('requiredField').email('invalidEmail'),
  fullName: yup
    .string()
    .required('requiredField')
    .test(onlyLettersTestRule)
    .trim(),
  birthDate: yup.string().required('requiredField').test(has18YearsTestRule),
  password: loginPasswordRules,
  confirmPassword: yup
    .string()
    .required('requiredField')
    .oneOf([yup.ref('password')], 'passMustBeSame'),
});
