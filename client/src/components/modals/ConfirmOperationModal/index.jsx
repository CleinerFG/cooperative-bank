import { useTranslation } from 'react-i18next';
import DataDisplay from '@/components/DataDisplay';
import Button from '@/components/formElements/Button';
import Modal from '../Modal';
import { TriangleAlert } from 'lucide-react';
import {
  StyledHeader,
  StyledIconContainer,
  StyledTitle,
  StyledContent,
  StyledFooter,
} from '../baseStyles';
import Input from '@/components/formElements/Input';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import validationSchema from './validationSchema';

function ConfirmOperationModal({ isOpen, onClose, data }) {
  const { t } = useTranslation();
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onTouched',
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <StyledHeader>
          <StyledIconContainer>
            <TriangleAlert />
          </StyledIconContainer>
          <StyledTitle>{t('confirmOperation')}</StyledTitle>
        </StyledHeader>
        <StyledContent>
          <DataDisplay items={data} />
          <Input
            control={control}
            name="operationPass"
            maskType="numericString"
            label="operationPass"
          />
        </StyledContent>
        <StyledFooter>
          <Button variant="secondary" handleClick={onClose}>
            {t('back')}
          </Button>
          <Button type="submit">{t('confirm')}</Button>
        </StyledFooter>
      </form>
    </Modal>
  );
}

export default ConfirmOperationModal;
