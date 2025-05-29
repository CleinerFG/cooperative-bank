import { StyledButton, StyledLabel } from './TagRadio.styles';
import { useTranslation } from 'react-i18next';

function TagRadio({ label, Icon, selected, onSelect }) {
  const { t } = useTranslation();
  return (
    <StyledButton
      $selected={selected}
      role="radio"
      aria-checked={selected}
      onClick={onSelect}
    >
      {Icon && <Icon />}
      <StyledLabel $selected={selected}>{t(label)}</StyledLabel>
    </StyledButton>
  );
}

export default TagRadio;
