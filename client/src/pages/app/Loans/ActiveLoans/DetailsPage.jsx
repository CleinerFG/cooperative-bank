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

function DetailsPage() {
  const params = useParams();
  useUpdatePageLayout('activeLoanDetails');
  return (
    <>
      <StyledItemsContainer>
        <DetailItem label="ID" value={params.loanId} Icon={Fingerprint} />
        <DetailItem label="creditor" value="Claudia Silva" Icon={User} />
        <DetailItem
          label="requestedAmount"
          value={1000}
          format="currency"
          Icon={DollarSign}
        />
        <DetailItem
          label="installmentValue"
          value={250}
          format="currency"
          Icon={CircleDollarSign}
        />
        <DetailItem label="term" value={12} format="months" Icon={Clock} />
        <DetailItem
          label="requestDate"
          value="10/05/2025"
          format="date"
          Icon={Calendar}
        />
        <DetailItem
          label="interestRate"
          value={2.5}
          format="percent"
          Icon={Percent}
        />
        <ProgressBar
          label="paymentProgress"
          current={1000}
          total={3000}
          formatCurrency
        />
      </StyledItemsContainer>
      <ButtonLink label="seeInstallments" navigateTo="installments" />
    </>
  );
}

export default DetailsPage;
