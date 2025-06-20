import * as yup from 'yup';

export default yup.object({
  operationPass: yup.string().required('requiredField'),
});
