import { useTranslation } from 'react-i18next';
import { StyledHeader, StyledTitle } from './Header.styles';
import StepProgress from './StepProgress';

function Header({ title, currentStep, maxSteps }) {
  const { t } = useTranslation();
  return (
    <StyledHeader>
      <StyledTitle>{t(title)}</StyledTitle>
      <StepProgress current={currentStep + 1} max={maxSteps} />
    </StyledHeader>
  );
}

export default Header;
