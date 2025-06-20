import * as yup from 'yup';
import { cpfTestRule } from '@/utils/validation/yupTests';

export default yup.object({
  creditor: yup.string().required('requiredField').test(cpfTestRule),

  requestedAmount: yup
    .number()
    .required('requiredField')
    .min(10, { key: 'minValue', interpolations: { value: 'R$ 10,00' } }),

  installments: yup.string().required('requiredField'),

  modality: yup.string().required('requiredField'),
});
