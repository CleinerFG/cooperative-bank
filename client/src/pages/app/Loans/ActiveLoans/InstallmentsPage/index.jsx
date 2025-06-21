import { useParams } from 'react-router-dom';
import { useUpdatePageLayout } from '@/hooks/pageLayout';
import { FilterItemsProvider } from '@/contexts/FilterItemsContext';
import FilteredData from '@/components/FilteredData';
import InstallmentCard from '@/components/cards/InstallmentCard';
import DetailItem from '@/components/DetailItem';
import mockData from './mockData';
import { Fingerprint } from 'lucide-react';

function InstallmentsPage() {
  useUpdatePageLayout('loanInstallments');
  const params = useParams();

  return (
    <FilterItemsProvider
      config={{
        filterTypes: ['all', 'paid', 'pending', 'overdue'],
        initialFilter: 'all',
        filterByProp: 'status',
      }}
      data={mockData}
    >
      <DetailItem label="ID" value={params.loanId} Icon={Fingerprint} />
      <FilteredData
        DataCard={InstallmentCard}
        configDataCard={{ isPayable: true }}
      />
    </FilterItemsProvider>
  );
}

export default InstallmentsPage;
