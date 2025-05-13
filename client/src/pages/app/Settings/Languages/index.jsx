import UpdateLayout from '../components/Layout/UpdateLayout';
import LanguagesRadioGroup from './LanguagesRadioGroup';

import { Languages } from 'lucide-react';

function LanguagesPage() {
  return (
    <>
      <UpdateLayout title="languages" Icon={Languages} />
      <LanguagesRadioGroup />
    </>
  );
}

export default LanguagesPage;
