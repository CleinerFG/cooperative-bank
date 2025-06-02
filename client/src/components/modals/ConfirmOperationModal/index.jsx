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

function ConfirmOperationModal({ isOpen, onClose, data }) {
  const { t } = useTranslation();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <StyledHeader>
        <StyledIconContainer>
          <TriangleAlert />
        </StyledIconContainer>
        <StyledTitle>{t('confirmOperation')}</StyledTitle>
      </StyledHeader>
      <StyledContent>
        <DataDisplay items={data} />
        <Input label="operationPass" />
      </StyledContent>
      <StyledFooter>
        <Button variant="secondary" handleClick={onClose}>
          {t('back')}
        </Button>
        <Button>{t('confirm')}</Button>
      </StyledFooter>
    </Modal>
  );
}

export default ConfirmOperationModal;
