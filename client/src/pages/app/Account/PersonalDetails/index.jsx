import { useUpdatePageLayout } from '@/hooks/pageLayout';
import FieldData from '@/components/formElements/FieldData';
import { User, Calendar } from 'lucide-react';
import BaseCard from '@/components/cards/BaseCard';
import { personalData, importantDates } from './FieldsDataConfig';

function PersonalDetails() {
  useUpdatePageLayout('personalDetails');
  return (
    <>
      <BaseCard title="personalData" iconColored Icon={User}>
        {personalData.map((item) => (
          <FieldData key={item.label} {...item} />
        ))}
      </BaseCard>
      <BaseCard title="importantDates" iconColored Icon={Calendar}>
        {importantDates.map((item) => (
          <FieldData key={item.label} {...item} />
        ))}
      </BaseCard>
    </>
  );
}

export default PersonalDetails;
