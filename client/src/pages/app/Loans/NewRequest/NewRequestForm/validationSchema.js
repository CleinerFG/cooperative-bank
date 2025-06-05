import * as yup from 'yup';
import { cpfValidator } from '@/utils/validators';

export default yup.object({
  creditor: yup
    .string()
    .required('requiredCpf')
    .test('is-valid-cpf', 'invalidCpf', cpfValidator),

  requestedAmount: yup
    .number()
    .required('requiredValue')
    .min(10, { key: 'minValue', interpolations: { value: 'R$ 10,00' } }),

  installments: yup.string().required('requiredInstallments'),

  modality: yup.string().required('requiredModality'),
});
