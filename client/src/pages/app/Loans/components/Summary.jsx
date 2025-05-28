import BaseCard from '@/components/cards/BaseCard';
import ProgressBar from '@/components/ui/ProgressBar';
import { FileChartColumnIncreasing } from 'lucide-react';

function Summary() {
  return (
    <BaseCard title="summary" Icon={FileChartColumnIncreasing}>
      <ProgressBar
        label="payable"
        current={67450}
        total={78690}
        formatCurrency
      />
      <ProgressBar
        label="receivable"
        current={450}
        total={2300}
        formatCurrency
      />
    </BaseCard>
  );
}

export default Summary;
