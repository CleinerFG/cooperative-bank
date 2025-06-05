import { useTranslation } from 'react-i18next';
import { StyledContainer, StyledItem } from './InputError.styles';

function InputError({ error }) {
  const { t } = useTranslation();
  return (
    error && (
      <StyledContainer>
        <StyledItem>
          {typeof error.message === 'object'
            ? t(error.message.key, error.message.interpolations)
            : t(error.message)}
        </StyledItem>
      </StyledContainer>
    )
  );
}

export default InputError;
