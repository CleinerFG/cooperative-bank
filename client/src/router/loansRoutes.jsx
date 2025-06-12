import PageLayout from '@/components/layouts/PageLayout';
import Loans from '@/pages/app/Loans';
import NewRequest from '@/pages/app/Loans/NewRequest';
import PendingRequests from '@/pages/app/Loans/PendingRequests';
import ActiveLoans from '@/pages/app/Loans/ActiveLoans';
import LoansHistory from '@/pages/app/Loans/LoansHistory';

export default {
  path: 'loans',
  element: <PageLayout />,
  children: [
    { index: true, element: <Loans /> },
    { path: 'new', element: <NewRequest /> },
    { path: 'pending', element: <PendingRequests /> },
    { path: 'active', element: <ActiveLoans /> },
    { path: 'history', element: <LoansHistory /> },
  ],
};
