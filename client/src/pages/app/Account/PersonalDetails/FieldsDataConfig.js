import * as yup from 'yup';

export const personalData = [
  { label: 'name', initialValue: 'Sheldon Retriever', isEditable: false },
  {
    label: 'username',
    initialValue: 'sheldon_the_dog',
    isEditable: true,
    validationSchema: yup.object({
      username: yup.string().required('upCantBeEmpty'),
    }),
  },
  {
    label: 'email',
    initialValue: 'sheldon_retriever@gmail.com',
    isEditable: true,
    validationSchema: yup.object({
      email: yup.string().required('upCantBeEmpty').email('invalidEmail'),
    }),
  },
];

export const importantDates = [
  { label: 'birth', initialValue: '10/03/2004', isEditable: false },
  { label: 'registrationData', initialValue: '15/03/2025', isEditable: false },
];
