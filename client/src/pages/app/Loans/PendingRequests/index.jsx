import ItemCategories from '@/components/ItemCategories';
import { useUpdatePageLayout } from '@/hooks/pageLayout';
import LoanCard from '@/components/cards/LoanCard';
import { receivedRequestsData, submittedRequestsData } from './mockData';

function PendingRequests() {
  useUpdatePageLayout('pendingRequests');
  return (
    <>
      <ItemCategories
        dataType="request"
        DataCard={LoanCard}
        categories={[
          {
            name: 'received',
            title: 'receivedRequests',
            data: receivedRequestsData,
          },
          {
            name: 'submitted',
            title: 'submittedRequests',
            data: submittedRequestsData,
          },
        ]}
      />
    </>
  );
}

export default PendingRequests;
