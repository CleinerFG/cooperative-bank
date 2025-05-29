import { useState } from 'react';
import UpdateLayout from '@/components/layouts/PageLayout/components/UpdateLayout';
import DataInput from '@/components/formElements/DataInput';
import { User, Calendar } from 'lucide-react';
import BaseCard from '@/components/cards/BaseCard';

const initialData = [
  { desc: 'name', value: 'Sheldon Retriever', isEditable: false },
  { desc: 'username', value: 'sheldon_the_dog', isEditable: true },
  { desc: 'email', value: 'sheldon_retriever@gmail.com', isEditable: true },
];

const importantDates = [
  { desc: 'birth', value: '10/03/2004', isEditable: false },
  { desc: 'registrationData', value: '15/03/2025', isEditable: false },
];

function PersonalDetails() {
  // eslint-disable-next-line no-unused-vars
  const [personalInfo, setPersonalInfo] = useState(initialData);

  return (
    <>
      <UpdateLayout title="personalDetails" />
      <BaseCard title="personalData" iconColored Icon={User}>
        {personalInfo.map((info) => (
          <DataInput
            key={info.desc}
            label={info.desc}
            isEditable={info.isEditable}
            value={info.value}
          />
        ))}
      </BaseCard>
      <BaseCard title="importantDates" iconColored Icon={Calendar}>
        {importantDates.map((info) => (
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

export default PersonalDetails;
