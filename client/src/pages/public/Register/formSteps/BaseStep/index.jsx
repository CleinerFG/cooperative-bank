import { useTranslation } from 'react-i18next';
import {
  StyledIconContainer,
  StyledInfoContainer,
  StyledTitle,
} from './BaseStep.styles';

function BaseStep({ title, Icon, children }) {
  const { t } = useTranslation();
  return (
    <>
      <StyledInfoContainer>
        <StyledIconContainer>{Icon && <Icon />}</StyledIconContainer>
        <StyledTitle>{t(title)}</StyledTitle>
      </StyledInfoContainer>
      {children}
    </>
  );
}

export default BaseStep;
