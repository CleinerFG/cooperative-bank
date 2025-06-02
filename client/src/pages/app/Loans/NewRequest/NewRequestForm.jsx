import Form from '@/components/formElements/Form';
import Input from '@/components/formElements/Input';
import Select from '@/components/formElements/Select';
import TagRadioGroup from '@/components/formElements/TagRadioGroup';
import useForm from '@/hooks/useForm';
import { Building2, CarFront, DollarSign, UserRoundCheck } from 'lucide-react';
import { useEffect } from 'react';

const modalityOptions = [
  { label: 'personal', value: 'personal', Icon: UserRoundCheck },
  { label: 'automotive', value: 'automotive', Icon: CarFront },
  { label: 'realState', value: 'realState', Icon: Building2 },
];

const installmentOptions = [
  { value: 6, text: '6x' },
  { value: 12, text: '12x' },
  { value: 18, text: '18x' },
  { value: 24, text: '24x' },
];

// add onFormDataValid
function NewRequestForm() {
  const { formData, handleElementValidValue } = useForm([
    {
      name: 'creditor',
      value: '',
      isValid: false,
    },
    {
      name: 'requestedAmount',
      value: '',
      isValid: false,
    },
    {
      name: 'installments',
      value: '6',
      isValid: true,
    },
    {
      name: 'modality',
      value: 'personal',
      isValid: true,
    },
  ]);

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <Form buttonText="requestLoan" buttonIcon={DollarSign}>
      <Input
        label="creditor"
        formatType="cpf"
        onValidValue={(value) => handleElementValidValue('creditor', value)}
      />
      <Input
        label="requestedAmount"
        formatType="currency"
        onValidValue={(value) =>
          handleElementValidValue('requestedAmount', value)
        }
      />
      <Select label="installments" options={installmentOptions} />
      <TagRadioGroup
        title="modality"
        name="modality"
        options={modalityOptions}
        defaultSelected={modalityOptions[0].value}
        onSelected={() => null}
      />
    </Form>
  );
}

export default NewRequestForm;
