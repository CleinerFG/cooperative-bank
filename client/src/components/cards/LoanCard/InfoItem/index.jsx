import { useTranslation } from 'react-i18next';
import {
  StyledContainer,
  StyledLabelContainer,
  StyledLabel,
  StyledValue,
} from './InfoItem.styles';
import ProtectValue from '@/components/ProtectValue';

function InfoItem({ label, value, Icon }) {
  const { t } = useTranslation();
  return (
    <StyledContainer>
      <StyledLabelContainer>
        {Icon && <Icon />}
        <StyledLabel>{t(label)}</StyledLabel>
      </StyledLabelContainer>
      <ProtectValue fontSize="xl" dotQty={4}>
        <StyledValue>{value}</StyledValue>
      </ProtectValue>
    </StyledContainer>
  );
}

export default InfoItem;
