import { useUpdatePageLayout } from '@/hooks/pageLayout';
import ThemeRadioGroup from './ThemeRadioGroup';

function Appearance() {
  useUpdatePageLayout('appearance');
  return <ThemeRadioGroup />;
}

export default Appearance;
