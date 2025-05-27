import { useTranslation } from 'react-i18next';
import { StyledTitle } from '../../../Card.styles';
import {
  StyledContainer,
  StyledTitleContainer,
  StyledIconContainer,
  StyledTextContainer,
} from './CardHeader.styles';
import NextPageButton from './NextPageButton';
import SeeMoreButton from './SeeMoreButton';

function CardHeader({ title, navigateTo, isExpanded, Icon }) {
  const { t } = useTranslation();

  return (
    <StyledContainer>
      <StyledTitleContainer>
        <StyledIconContainer>{Icon}</StyledIconContainer>
        <StyledTextContainer>
          <StyledTitle>{t(title)}</StyledTitle>
          <SeeMoreButton isExpanded={isExpanded} />
        </StyledTextContainer>
      </StyledTitleContainer>
      <NextPageButton navigateTo={navigateTo} />
    </StyledContainer>
  );
}

export default CardHeader;
