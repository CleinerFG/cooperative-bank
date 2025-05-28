import { useTranslation } from 'react-i18next';
import { SeeMoreButton } from '@/components/cards/ExpandableCard';
import {
  StyledContainer,
  StyledContent,
  StyledIconContainer,
  StyledColumnContainer,
} from './Header.styles';
import NextPageButton from './NextPageButton';
import { StyledTitle } from '@/components/cards/BaseCard/BaseCard.styles';

function Header({ title, navigateTo, Icon }) {
  const { t } = useTranslation();

  return (
    <StyledContainer>
      <StyledContent>
        <StyledIconContainer>{Icon}</StyledIconContainer>
        <StyledColumnContainer>
          <StyledTitle>{t(title)}</StyledTitle>
          <SeeMoreButton />
        </StyledColumnContainer>
      </StyledContent>
      <NextPageButton navigateTo={navigateTo} />
    </StyledContainer>
  );
}

export default Header;
