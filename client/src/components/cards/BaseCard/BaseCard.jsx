import { useTranslation } from 'react-i18next';
import {
  StyledCardContainer,
  StyledCardFooter,
  StyledIconContainer,
  StyledCardTitle,
  StyledCardHeader,
  StyledCardMain,
} from './BaseCard.styles';

function BaseCard({ title, Icon, FooterContent, children }) {
  const { t } = useTranslation();
  return (
    <StyledCardContainer>
      <StyledCardHeader>
        <StyledCardTitle>{t(title)}</StyledCardTitle>
        {Icon ? (
          <StyledIconContainer>
            <Icon />
          </StyledIconContainer>
        ) : null}
      </StyledCardHeader>

      <StyledCardMain>{children}</StyledCardMain>

      {FooterContent ? (
        <StyledCardFooter>
          <FooterContent />
        </StyledCardFooter>
      ) : null}
    </StyledCardContainer>
  );
}

export default BaseCard;
