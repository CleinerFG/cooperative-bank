import UpdateLayout from '@/components/layouts/PageLayout/components/UpdateLayout';
import NewRequestForm from './NewRequestForm';
import { useState } from 'react';
import Button from '@/components/formElements/Button';
import { Check } from 'lucide-react';
import ConfirmOperationModal from '@/components/modals/ConfirmOperationModal';

const confirmData = [
  { label: 'creditor', value: 'Sheldon Retriver' },
  { label: 'requestedAmount', value: '12/05/2025' },
  { label: 'installments', value: 'R$ 244,90' },
  { label: 'modality', value: 'Pessoal' },
];

function NewRequest() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <UpdateLayout title="newRequest" />
      <NewRequestForm />
      <Button handleClick={() => setIsModalOpen(!isModalOpen)}>
        Test Open Modal
      </Button>
      <ConfirmOperationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        data={confirmData}
      />
    </>
  );
}

export default NewRequest;
