import FeatureUnderDev from '@/components/FeatureUnderDev';
import { useUpdatePageLayout } from '@/hooks/pageLayout';

function Transactions() {
  useUpdatePageLayout('transactions');
  return <FeatureUnderDev />;
}

export default Transactions;
