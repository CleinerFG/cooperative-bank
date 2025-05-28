import UpdateLayout from '@/components/layouts/PageLayout/components/UpdateLayout';
import BaseCard from '@/components/cards/BaseCard';
import DataInput from '@/components/ui/inputs/DataInput';
import { Landmark } from 'lucide-react';
import Status from './Status';

const initialData = [
  { desc: 'agency', value: '1234', isEditable: false },
  { desc: 'accountNum', value: '1082-8345-0843', isEditable: false },
  { desc: 'accountType', value: 'Personal Account', isEditable: false },
];

function BankDetails() {
  return (
    <>
      <UpdateLayout title="bankDetails" />
      <Status />
      <BaseCard title="accountData" iconColored Icon={Landmark}>
        {initialData.map((info) => (
          <DataInput
            key={info.desc}
            label={info.desc}
            isEditable={info.isEditable}
            value={info.value}
          />
        ))}
      </BaseCard>
    </>
  );
}

export default BankDetails;
