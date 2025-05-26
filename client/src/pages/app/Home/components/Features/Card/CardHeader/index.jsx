import { useTranslation } from 'react-i18next';
import {
  StyledContainer,
  StyledTitle,
  StyledTitleContainer,
  StyledIconContainer,
} from './CardHeader.styles';
import NextPageButton from './NextPageButton';

function CardHeader({ title, navigateTo, Icon }) {
  const { t } = useTranslation();

  return (
    <StyledContainer>
      <StyledTitleContainer>
        <StyledIconContainer>{Icon}</StyledIconContainer>
        <StyledTitle>{t(title)}</StyledTitle>
      </StyledTitleContainer>
      <NextPageButton navigateTo={navigateTo} />
    </StyledContainer>
  );
}

export default CardHeader;
