import * as yup from 'yup';
import {
  hasLowercaseTestRule,
  hasNumberTestRule,
  hasSpecialCharTestRule,
  hasUppercaseTestRule,
  repetitionTestRule,
  sequenceTestRule,
} from './yupTests';

export const loginPasswordRules = yup
  .string()
  .required('requiredField')
  .test(repetitionTestRule)
  .test(sequenceTestRule)
  .test(hasNumberTestRule)
  .test(hasUppercaseTestRule)
  .test(hasLowercaseTestRule)
  .test(hasSpecialCharTestRule)
  .min(8, { key: 'minPasswordLen', interpolations: { length: 8 } })
  .max(16, { key: 'maxPasswordLen', interpolations: { length: 16 } });
