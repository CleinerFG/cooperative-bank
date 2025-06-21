import { useUpdatePageLayout } from '@/hooks/pageLayout';
import LoanPreferences from './components/LoanPreferences';
import InvestmentPreferences from './components/InvestmentPreferences';

function AccountPreferences() {
  useUpdatePageLayout('accountPreferences');

  return (
    <>
      <LoanPreferences />
      <InvestmentPreferences />
    </>
  );
}

export default AccountPreferences;
