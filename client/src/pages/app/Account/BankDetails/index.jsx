import BaseCard from '@/components/cards/BaseCard';
import FieldData from '@/components/formElements/FieldData';
import { Landmark } from 'lucide-react';
import Status from './Status';
import { useUpdatePageLayout } from '@/hooks/pageLayout';

const accountData = [
  { label: 'agency', initialValue: '1234', isEditable: false },
  { label: 'accountNum', initialValue: '1082-8345-0843', isEditable: false },
  { label: 'accountType', initialValue: 'Personal Account', isEditable: false },
];

function BankDetails() {
  useUpdatePageLayout('bankDetails');
  return (
    <>
      <Status />
      <BaseCard title="accountData" iconColored Icon={Landmark}>
        {accountData.map((item) => (
          <FieldData key={item.label} {...item} />
        ))}
      </BaseCard>
    </>
  );
}

export default BankDetails;
