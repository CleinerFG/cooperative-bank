import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import validationSchema from './validationSchema';
import Input from '@/components/formElements/Input';
import Select from '@/components/formElements/Select';
import Button from '@/components/formElements/Button';
import {
  StyledForm,
  StyledFieldsContainer,
} from '@/components/formElements/StyledForm';
import TagRadioGroup from '@/components/formElements/TagRadioGroup';
import { DollarSign } from 'lucide-react';
import { installmentOptions, modalityOptions } from './elementsConfig';

function NewRequestForm({ onSubmit }) {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onTouched',
  });

  const { t } = useTranslation();

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledFieldsContainer>
        <Input
          control={control}
          label="creditor"
          name="creditor"
          maskType="cpf"
        />
        <Input
          control={control}
          label="requestedAmount"
          name="requestedAmount"
          maskType="currency"
        />
        <Select label="installments" options={installmentOptions} />
        <TagRadioGroup
          title="modality"
          name="modality"
          options={modalityOptions}
          defaultSelected={modalityOptions[0].value}
          onSelected={() => null}
        />
      </StyledFieldsContainer>
      <Button type="submit" Icon={DollarSign}>
        {t('requestLoan')}
      </Button>
    </StyledForm>
  );
}

export default NewRequestForm;
