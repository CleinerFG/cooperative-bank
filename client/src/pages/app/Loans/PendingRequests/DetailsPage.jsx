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

function DetailsPage() {
  const params = useParams();
  const { t } = useTranslation();
  useUpdatePageLayout('requestDetails');
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
      </StyledItemsContainer>
      <StyledButtonsContainer>
        <Button variant="secondary">{t('disapprove')}</Button>
        <Button>{t('approve')}</Button>
      </StyledButtonsContainer>
    </>
  );
}

export default DetailsPage;
