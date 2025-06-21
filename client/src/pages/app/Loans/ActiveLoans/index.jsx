import { useUpdatePageLayout } from '@/hooks/pageLayout';
import LoanCard from '@/components/cards/LoanCard';
import mockData from './mockData';
import FilteredData from '@/components/FilteredData';
import { FilterItemsProvider } from '@/contexts/FilterItemsContext';

function ActiveLoans() {
  useUpdatePageLayout('activeLoans');
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
        configDataCard={{ loanType: 'active' }}
      />
    </FilterItemsProvider>
  );
}

export default ActiveLoans;
