import { useTranslation } from 'react-i18next';
import { StyledContainer, StyledItem } from './InputError.styles';

function InputError({ error }) {
  const { t } = useTranslation();
  return (
    error && (
      <StyledContainer>
        <StyledItem>{t(error.message)}</StyledItem>
      </StyledContainer>
    )
  );
}

export default InputError;
