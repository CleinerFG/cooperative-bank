import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
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
import Button from '@/components/formElements/Button';
import {
  StyledButtonsContainer,
  StyledItemsContainer,
} from '../components/DetailsPage.styles';
import mockData from './mockData';

function DetailsPage() {
  useUpdatePageLayout('requestDetails');
  const { t } = useTranslation();

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
        <DetailItem
          label="term"
          value={loan.term}
          format="months"
          Icon={Clock}
        />
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
      </StyledItemsContainer>
      <StyledButtonsContainer>
        <Button variant="secondary">{t('disapprove')}</Button>
        <Button>{t('approve')}</Button>
      </StyledButtonsContainer>
    </>
  );
}

export default DetailsPage;
