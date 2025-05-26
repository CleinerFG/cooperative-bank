import { useTranslation } from 'react-i18next';
import {
  StyledSection,
  StyledHeader,
  StyledContent,
  StyledTitle,
} from './SectionCard.styles';

function SectionCard({ title, Icon, children }) {
  const { t } = useTranslation();
  return (
    <StyledSection>
      <StyledHeader>
        {Icon}
        <StyledTitle>{t(title)}</StyledTitle>
      </StyledHeader>
      <StyledContent>{children}</StyledContent>
    </StyledSection>
  );
}

export default SectionCard;
