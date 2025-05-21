import SettingsLayout from '../components/Layout';
import LanguagesRadioGroup from './LanguagesRadioGroup';
import { Languages } from 'lucide-react';

function LanguagesPage() {
  return (
    <SettingsLayout title="languages" Icon={<Languages />}>
      <LanguagesRadioGroup />
    </SettingsLayout>
  );
}

export default LanguagesPage;
