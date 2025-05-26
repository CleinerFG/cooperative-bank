import { useTranslation } from 'react-i18next';
import { StyledType, StyledTypeLabel } from './CardFooter.styles';

function TypeItem({ label, Icon }) {
  const { t } = useTranslation();
  return (
    <StyledType>
      {Icon} <StyledTypeLabel>{t(label)}</StyledTypeLabel>
    </StyledType>
  );
}

export default TypeItem;
