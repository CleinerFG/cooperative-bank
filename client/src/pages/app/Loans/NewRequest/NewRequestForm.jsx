import Form from '@/components/formElements/Form';
import Input from '@/components/formElements/Input';
import Select from '@/components/formElements/Select';
import TagRadioGroup from '@/components/formElements/TagRadioGroup';
import { Building2, CarFront, DollarSign, UserRoundCheck } from 'lucide-react';

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

function NewRequestForm() {
  return (
    <Form buttonText="requestLoan" buttonIcon={DollarSign}>
      <Input label="creditor" />
      <Input label="requestedAmount" />
      <Select label="installments" options={installmentOptions} />
      <TagRadioGroup
        title="modality"
        options={modalityOptions}
        defaultSelected={modalityOptions[0].value}
        onSelected={() => null}
      />
    </Form>
  );
}

export default NewRequestForm;
