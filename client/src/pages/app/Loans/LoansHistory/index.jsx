import { useUpdatePageLayout } from '@/hooks/pageLayout';
import LoanCard from '@/components/cards/LoanCard';
import mockData from './mockData';
import { FilterItemsProvider } from '@/contexts/FilterItemsContext';
import FilteredData from '@/components/FilteredData';

function LoansHistory() {
  useUpdatePageLayout('loansHistory');
  return (
    <FilterItemsProvider
      data={mockData}
      config={{
        filterTypes: ['receivable', 'payable'],
        initialFilter: 'receivable',
        filterByProp: 'category',
      }}
    >
      <FilteredData
        DataCard={LoanCard}
        configDataCard={{ loanType: 'history' }}
      />
    </FilterItemsProvider>
  );
}

export default LoansHistory;
