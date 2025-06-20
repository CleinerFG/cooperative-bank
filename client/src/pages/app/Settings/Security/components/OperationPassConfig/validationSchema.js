import {
  onlyNumbersTestRule,
  repetitionTestRule,
  sequenceTestRule,
} from '@/utils/validation/yupTests';
import * as yup from 'yup';

export default yup.object({
  newPassword: yup
    .string()
    .required('requiredField')
    .test(onlyNumbersTestRule)
    .test(repetitionTestRule)
    .test(sequenceTestRule)
    .min(4, { key: 'minPasswordLen', interpolations: { length: 4 } })
    .max(8, { key: 'maxPasswordLen', interpolations: { length: 8 } }),
  currentPassword: yup.string().required('requiredField'),
});
