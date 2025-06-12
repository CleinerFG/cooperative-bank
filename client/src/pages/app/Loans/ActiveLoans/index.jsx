import ItemCategories from '@/components/ItemCategories';
import { useUpdatePageLayout } from '@/hooks/pageLayout';
import LoanCard from '@/components/cards/LoanCard';
import { receivableLoansData, payableLoansData } from './mockData';

function ActiveLoans() {
  useUpdatePageLayout('activeLoans');
  return (
    <>
      <ItemCategories
        dataType="active"
        DataCard={LoanCard}
        categories={[
          {
            name: 'receivable',
            title: 'receivableLoans',
            data: receivableLoansData,
          },
          {
            name: 'payable',
            title: 'payableLoans',
            data: payableLoansData,
          },
        ]}
      />
    </>
  );
}

export default ActiveLoans;
