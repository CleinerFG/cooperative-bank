import { useUpdatePageLayout } from '@/hooks/pageLayout';
import LoanCard from '@/components/cards/LoanCard';
import mockData from './mockData';
import { FilterItemsProvider } from '@/contexts/FilterItemsContext';
import FilteredData from '@/components/FilteredData';

function PendingRequests() {
  useUpdatePageLayout('pendingRequests');
  return (
    <FilterItemsProvider
      data={mockData}
      config={{
        filterTypes: ['received', 'submitted'],
        initialFilter: 'received',
        filterByProp: 'category',
      }}
    >
      <FilteredData
        DataCard={LoanCard}
        configDataCard={{ loanType: 'request' }}
      />
    </FilterItemsProvider>
  );
}

export default PendingRequests;
