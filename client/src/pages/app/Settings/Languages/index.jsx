import { useUpdatePageLayout } from '@/hooks/pageLayout';
import LanguagesRadioGroup from './LanguagesRadioGroup';

function LanguagesPage() {
  useUpdatePageLayout('languages');
  return <LanguagesRadioGroup />;
}

export default LanguagesPage;
