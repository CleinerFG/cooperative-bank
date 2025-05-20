import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { EyeClosed, Eye, Asterisk } from 'lucide-react';
import {
  StyledContainer,
  StyledLabel,
  StyledValueContainer,
  StyledBalanceValue,
} from './AccountBalance.styles';

function genAsterisk() {
  const asterisks = new Array(5).fill(null).map((_, i) => <Asterisk key={i} />);
  return <>R$ {asterisks}</>;
}

function getBalance() {
  return <>R$ 7.482,59</>;
}

function AccountBalance() {
  const { t } = useTranslation();
  const [isHidden, setIsHidden] = useState(true);
  return (
    <StyledContainer>
      <StyledLabel>{t('balance')}</StyledLabel>
      <StyledValueContainer>
        <StyledBalanceValue>
          {isHidden ? genAsterisk() : getBalance()}
        </StyledBalanceValue>
        <button onClick={() => setIsHidden((prev) => !prev)}>
          {isHidden ? <EyeClosed /> : <Eye />}
        </button>
      </StyledValueContainer>
    </StyledContainer>
  );
}

export default AccountBalance;
