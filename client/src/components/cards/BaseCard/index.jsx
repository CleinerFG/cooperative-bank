import { useTranslation } from 'react-i18next';
import {
  StyledContainer,
  StyledFooter,
  StyledIconContainer,
  StyledTitle,
  StyledHeader,
  StyledMain,
} from './BaseCard.styles';

function BaseCard({ title, Icon, FooterContent, iconColored, children }) {
  const { t } = useTranslation();
  return (
    <StyledContainer>
      <StyledHeader>
        <StyledTitle>{t(title)}</StyledTitle>
        {Icon ? (
          <StyledIconContainer $isColored={iconColored}>
            <Icon />
          </StyledIconContainer>
        ) : null}
      </StyledHeader>

      <StyledMain>{children}</StyledMain>

      {FooterContent ? (
        <StyledFooter>
          <FooterContent />
        </StyledFooter>
      ) : null}
    </StyledContainer>
  );
}

export default BaseCard;
