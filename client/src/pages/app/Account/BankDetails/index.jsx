import UpdateLayout from '@/components/layouts/PageLayout/components/UpdateLayout';
import DataInput from '@/components/ui/inputs/DataInput';
import { Landmark } from 'lucide-react';

import { useState } from 'react';
import SectionCard from '../components/SectionCard';
import Status from './Status';

const initialData = [
  { desc: 'agency', value: '1234', isEditable: false },
  { desc: 'accountNum', value: '1082-8345-0843', isEditable: false },
  { desc: 'accountType', value: 'Personal Account', isEditable: false },
];

function PersonalDetails() {
  // eslint-disable-next-line no-unused-vars
  const [personalInfo, setPersonalInfo] = useState(initialData);

  return (
    <>
      <UpdateLayout title="bankDetails" />
      <Status />
      <SectionCard title="accountData" Icon={<Landmark />}>
        {personalInfo.map((info) => (
          <DataInput
            key={info.desc}
            label={info.desc}
            isEditable={info.isEditable}
            value={info.value}
          />
        ))}
      </SectionCard>
    </>
  );
}

export default PersonalDetails;
