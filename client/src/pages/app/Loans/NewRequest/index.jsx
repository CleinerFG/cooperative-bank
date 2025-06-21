import { useUpdatePageLayout } from '@/hooks/pageLayout';
import NewRequestForm from './NewRequestForm';
import { useState } from 'react';
import ConfirmOperationModal from '@/components/modals/ConfirmOperationModal';
import { formatCpf, numberToCurrency } from '@/utils/formatters';

function NewRequest() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ values: null, formatted: null });

  useUpdatePageLayout('newRequest');

  const handleSubmitForm = (data) => {
    setFormData({
      values: data,
      formatted: {
        creditor: formatCpf(data.creditor),
        requestedAmount: numberToCurrency(data.requestedAmount),
        installments: data.installments,
        modality: data.modality,
      },
    });
    console.log(data);
    setIsModalOpen(true);
  };

  return (
    <>
      <NewRequestForm onSubmit={handleSubmitForm} />
      {formData.values && (
        <ConfirmOperationModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          data={formData.formatted}
        />
      )}
    </>
  );
}

export default NewRequest;
