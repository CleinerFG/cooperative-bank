import * as yup from 'yup';
import { cpfValidator } from '@/utils/validators';

export default yup.object({
  creditor: yup
    .string()
    .required('requiredField')
    .test('is-valid-cpf', 'invalidCpf', cpfValidator),

  requestedAmount: yup
    .number()
    .required('requiredField')
    .min(10, { key: 'minValue', interpolations: { value: 'R$ 10,00' } }),

  installments: yup.string().required('requiredField'),

  modality: yup.string().required('requiredField'),
});
