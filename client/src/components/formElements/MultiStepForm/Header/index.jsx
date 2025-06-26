import { useTranslation } from 'react-i18next';
import { StyledHeader, StyledTitle } from './Header.styles';
import StepProgress from './StepProgress';

function Header({ title}) {
  const { t } = useTranslation();
  return (
    <StyledHeader>
      <StyledTitle>{t(title)}</StyledTitle>
      <StepProgress />
    </StyledHeader>
  );
}

export default Header;
