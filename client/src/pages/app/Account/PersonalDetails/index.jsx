import UpdateLayout from '@/components/layouts/PageLayout/components/UpdateLayout';
import Button from '@/components/ui/Button';
import DataInput from '@/components/ui/inputs/DataInput';

import { useState } from 'react';
import { StyledPersonalInfo } from '../Account.styles';

const initialData = [
  { desc: 'name', value: 'Sheldon Retriever', isEditable: false },
  { desc: 'username', value: 'sheldon_the_dog', isEditable: true },
  { desc: 'email', value: 'sheldon_retriever@gmail.com', isEditable: true },
  { desc: 'birth', value: '10/03/2004', isEditable: false },
  { desc: 'registrationData', value: '15/03/2025', isEditable: false },
];

function PersonalDetails() {
  // eslint-disable-next-line no-unused-vars
  const [personalInfo, setPersonalInfo] = useState(initialData);

  return (
    <>
      <UpdateLayout title="personalDetails" />
      <StyledPersonalInfo>
        {personalInfo.map((info) => (
          <DataInput
            key={info.desc}
            label={info.desc}
            isEditable={info.isEditable}
            value={info.value}
          />
        ))}
      </StyledPersonalInfo>
    </>
  );
}

export default PersonalDetails;
