import SettingsLayout from '../components/Layout';
import ThemeRadioGroup from './ThemeRadioGroup';

import { Eclipse } from 'lucide-react';

function Appearance() {
  return (
    <>
      <SettingsLayout title="appearance" Icon={Eclipse}>
        <ThemeRadioGroup />
      </SettingsLayout>
    </>
  );
}

export default Appearance;
