import * as yup from 'yup';
import { loginPasswordRules } from '@/utils/validation/yupFieldRules';

export default yup.object({
  newPassword: loginPasswordRules,
  currentPassword: yup.string().required('requiredCurrentPass'),
});
