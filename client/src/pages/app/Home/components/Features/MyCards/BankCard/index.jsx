import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import {
  StyledContainer,
  StyledDetails,
  StyledCardNumber,
  StyledSpan,
  StyledType,
} from './BankCard.styles';

function BankCard({ type, number, holderName, validity }) {
  const { t } = useTranslation();
  return (
    <StyledContainer>
      <StyledType>
        <span>{`${t('cardOf')} ${t(type)}`}</span>
        <Globe />
      </StyledType>
      <StyledCardNumber>•••• •••• •••• {number}</StyledCardNumber>
      <StyledDetails>
        <div>
          <StyledSpan>{t('holder')}</StyledSpan>
          <StyledSpan>{holderName}</StyledSpan>
        </div>
        <div>
          <StyledSpan>{t('validity')}</StyledSpan>
          <StyledSpan>{validity}</StyledSpan>
        </div>
      </StyledDetails>
    </StyledContainer>
  );
}

export default BankCard;
