import UpdateLayout from '@/components/layouts/PageLayout/components/UpdateLayout';
import NavigationCards from '@/components/containers/NavigationCards';
import Summary from './components/Summary';
import PendingRequests from './components/PendingRequests';
import { FilePlus, FileClock, Banknote, History } from 'lucide-react';

const BASE_ROUTE = '/app/loans';
const loansOptions = [
  {
    label: 'newRequest',
    navigateTo: BASE_ROUTE + '/new',
    Icon: FilePlus,
  },
  {
    label: 'pendingRequests',
    navigateTo: BASE_ROUTE + '/pending',
    Icon: FileClock,
  },
  {
    label: 'activeLoans',
    navigateTo: BASE_ROUTE + '/active',
    Icon: Banknote,
  },
  {
    label: 'history',
    navigateTo: BASE_ROUTE + '/history',
    Icon: History,
  },
];

function Loans() {
  return (
    <>
      <UpdateLayout title="loans" />
      <Summary />
      <PendingRequests />
      <NavigationCards options={loansOptions} />
    </>
  );
}

export default Loans;
