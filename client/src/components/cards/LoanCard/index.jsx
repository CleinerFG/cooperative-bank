import { useTranslation } from 'react-i18next';
import { numberToCurrency } from '@/utils/formatters';
import { StyledContainer } from '../BaseCard/BaseCard.styles';
import InfoItem from './InfoItem';
import {
  StyledImgContainer,
  StyledHeader,
  StyledHeaderContent,
  StyledName,
  StyledMain,
  StyledDate,
  StyledFooter,
} from './LoanCard.styles';
import SeeDetailsLink from './SeeDetailsLink';
import { Calendar, DollarSign, User, BanknoteArrowUp } from 'lucide-react';

function LoanCard({ creditor, debtor, value, amountPaid, term, date, status }) {
  const { t } = useTranslation();
  const formattedValue = numberToCurrency(value);
  const formattedAmountPaid = amountPaid && numberToCurrency(amountPaid);
  const formattedTerm = term && t('months', { value: term });
  return (
    <StyledContainer>
      <StyledHeader>
        <StyledImgContainer>
          <User />
        </StyledImgContainer>
        <StyledHeaderContent>
          <StyledName>{creditor || debtor}</StyledName>
          {status && <span>{status}</span>}
        </StyledHeaderContent>
      </StyledHeader>
      <StyledMain>
        <InfoItem label="value" value={formattedValue} Icon={DollarSign} />
        {term && (
          <InfoItem label="term" value={formattedTerm} Icon={Calendar} />
        )}
        {amountPaid && (
          <InfoItem
            label="amountPaid"
            value={formattedAmountPaid}
            Icon={BanknoteArrowUp}
          />
        )}
      </StyledMain>
      <StyledFooter>
        <StyledDate>
          {t('date')}: {date}
        </StyledDate>
        <SeeDetailsLink />
      </StyledFooter>
    </StyledContainer>
  );
}

export default LoanCard;
