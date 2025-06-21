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
    defaultValues: {
      creditor: null,
      requestedAmount: null,
      installments: '6',
      modality: modalityOptions[0].value,
    },
  });

  const { t } = useTranslation();

  return (
    <StyledForm
      onSubmit={handleSubmit((data) => {
        const formattedData = {
          ...data,
          installments: Number(data.installments),
        };
        onSubmit(formattedData);
      })}
    >
      <StyledFieldsContainer>
        <Input
          control={control}
          name="creditor"
          label="creditor"
          maskType="cpf"
        />
        <Input
          control={control}
          name="requestedAmount"
          label="requestedAmount"
          maskType="currency"
        />
        <Select
          control={control}
          name="installments"
          label="installments"
          options={installmentOptions}
        />
        <TagRadioGroup
          control={control}
          name="modality"
          title="modality"
          options={modalityOptions}
        />
      </StyledFieldsContainer>
      <Button type="submit" Icon={DollarSign}>
        {t('requestLoan')}
      </Button>
    </StyledForm>
  );
}

export default NewRequestForm;
