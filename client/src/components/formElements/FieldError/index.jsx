import { useTranslation } from 'react-i18next';
import { StyledContainer, StyledItem } from './FieldError.styles';
import FadeInAnimation from '@/components/animations/FadeInAnimation';

function FieldError({ error }) {
  const { t } = useTranslation();
  return (
    error && (
      <StyledContainer>
        <FadeInAnimation>
          <StyledItem>
            {typeof error.message === 'object'
              ? t(error.message.key, error.message.interpolations)
              : t(error.message)}
          </StyledItem>
        </FadeInAnimation>
      </StyledContainer>
    )
  );
}

export default FieldError;
