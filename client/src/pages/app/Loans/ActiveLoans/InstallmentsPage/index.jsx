import { useParams } from 'react-router-dom';
import { useUpdatePageLayout } from '@/hooks/pageLayout';
import { FilterItemsProvider } from '@/contexts/FilterItemsContext';
import FilteredData from '@/components/FilteredData';
import InstallmentCard from '@/components/cards/InstallmentCard';
import DetailItem from '@/components/DetailItem';
import mockData from './mockData';
import loanMockData from '../mockData';
import { Fingerprint } from 'lucide-react';

function InstallmentsPage() {
  useUpdatePageLayout('loanInstallments');

  const { loanId } = useParams();
  const loan = loanMockData.find((item) => item.id === loanId);
  const installmentsData = mockData.map((item) => ({
    ...item,
    value: loan.installmentValue,
  }));

  return (
    <FilterItemsProvider
      config={{
        filterTypes: ['all', 'paid', 'pending', 'overdue'],
        initialFilter: 'all',
        filterByProp: 'status',
      }}
      data={installmentsData}
    >
      <DetailItem label="ID" value={loanId} Icon={Fingerprint} />
      <FilteredData
        DataCard={InstallmentCard}
        configDataCard={{ isPayable: true }}
      />
    </FilterItemsProvider>
  );
}

export default InstallmentsPage;
