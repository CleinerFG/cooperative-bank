import { useParams } from 'react-router-dom';
import { useUpdatePageLayout } from '@/hooks/pageLayout';
import DetailItem from '@/components/DetailItem';
import {
  Calendar,
  CircleDollarSign,
  Clock,
  DollarSign,
  Fingerprint,
  Percent,
  User,
} from 'lucide-react';
import { StyledItemsContainer } from '../components/DetailsPage.styles';
import ProgressBar from '@/components/ui/ProgressBar';
import ButtonLink from '@/components/ui/ButtonLink';
import mockData from './mockData';

function DetailsPage() {
  useUpdatePageLayout('activeLoanDetails');

  const { loanId } = useParams();
  const loan = mockData.find((item) => item.id === loanId);
  return (
    <>
      <StyledItemsContainer>
        <DetailItem label="ID" value={loanId} Icon={Fingerprint} />
        <DetailItem
          label={loan.creditor ? 'creditor' : 'debtor'}
          value={loan.creditor || loan.debtor}
          Icon={User}
        />
        <DetailItem
          label="requestedAmount"
          value={loan.value}
          format="currency"
          Icon={DollarSign}
        />
        <DetailItem
          label="installmentValue"
          value={loan.installmentValue}
          format="currency"
          Icon={CircleDollarSign}
        />
        <DetailItem label="term" value={12} format="months" Icon={Clock} />
        <DetailItem
          label="requestDate"
          value={loan.date}
          format="date"
          Icon={Calendar}
        />
        <DetailItem
          label="interestRate"
          value={loan.interestRate}
          format="percent"
          Icon={Percent}
        />
        <ProgressBar
          label="paymentProgress"
          current={loan.amountPaid}
          total={loan.value}
          formatCurrency
        />
      </StyledItemsContainer>
      <ButtonLink label="seeInstallments" navigateTo="installments" />
    </>
  );
}

export default DetailsPage;
