import UpdateLayout from '../components/Layout/UpdateLayout';
import ThemeRadioGroup from './ThemeRadioGroup';

import { Eclipse } from 'lucide-react';

function Appearance() {
  return (
    <>
      <UpdateLayout title="Appearance" Icon={Eclipse} />
      <ThemeRadioGroup />
    </>
  );
}

export default Appearance;
