import PageLayout from '@/components/layouts/PageLayout';
import Loans from '@/pages/app/Loans';
import NewRequest from '@/pages/app/Loans/NewRequest';
import PendingRequests from '@/pages/app/Loans/PendingRequests';
import PendingRequestDetails from '@/pages/app/Loans/PendingRequests/DetailsPage';
import ActiveLoans from '@/pages/app/Loans/ActiveLoans';
import ActiveLoanDetails from '@/pages/app/Loans/ActiveLoans/DetailsPage';
import LoanInstallments from '@/pages/app/Loans/ActiveLoans/InstallmentsPage';
import LoansHistory from '@/pages/app/Loans/LoansHistory';
import LoanHistoryDetails from '@/pages/app/Loans/LoansHistory/DetailsPage';

export default {
  path: 'loans',
  element: <PageLayout />,
  children: [
    { index: true, element: <Loans /> },
    { path: 'new', element: <NewRequest /> },
    {
      path: 'pending',
      children: [
        { index: true, element: <PendingRequests /> },
        { path: 'details/:loanId', element: <PendingRequestDetails /> },
      ],
    },
    {
      path: 'active',
      children: [
        { index: true, element: <ActiveLoans /> },
        { path: 'details/:loanId', element: <ActiveLoanDetails /> },
        { path: 'details/:loanId/installments', element: <LoanInstallments /> },
      ],
    },
    {
      path: 'history',
      children: [
        { index: true, element: <LoansHistory /> },
        { path: 'details/:loanId', element: <LoanHistoryDetails /> },
      ],
    },
  ],
};
