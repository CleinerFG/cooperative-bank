import { useTranslation } from 'react-i18next';
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
import { User } from 'lucide-react';
import configByType from './configByType';
import { formatDate } from '@/utils/formatters';

function LoanCard({ loanType, ...data }) {
  const { t } = useTranslation();
  const config = configByType[loanType](t, data);

  return (
    <StyledContainer>
      <StyledHeader>
        <StyledImgContainer>
          <User />
        </StyledImgContainer>
        <StyledHeaderContent>
          <StyledName>{data.creditor || data.debtor}</StyledName>
          {config.headerContent}
        </StyledHeaderContent>
      </StyledHeader>
      <StyledMain>
        {config.mainItems.map((item, index) => (
          <InfoItem
            key={index}
            label={item.label}
            value={item.value}
            Icon={item.Icon}
          />
        ))}
      </StyledMain>
      <StyledFooter>
        <StyledDate>
          {t('date')}: {formatDate(data.date)}
        </StyledDate>
        <SeeDetailsLink dataId={data.id} />
      </StyledFooter>
    </StyledContainer>
  );
}

export default LoanCard;
