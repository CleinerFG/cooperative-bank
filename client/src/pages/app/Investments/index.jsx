import FeatureUnderDev from '@/components/FeatureUnderDev';
import { useUpdatePageLayout } from '@/hooks/pageLayout';

function Investments() {
  useUpdatePageLayout('investments');
  return <FeatureUnderDev />;
}

export default Investments;
