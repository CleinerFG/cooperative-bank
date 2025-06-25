import { useTranslation } from 'react-i18next';
import { StyledButton, StyledLabel } from './Actions.styles';

function SwitchAction({ onClick, Icon, label }) {
  const { t } = useTranslation();
  return (
    <StyledButton onClick={onClick}>
      {Icon && <Icon />}
      <StyledLabel>{t(label)}</StyledLabel>
    </StyledButton>
  );
}

export default SwitchAction;
