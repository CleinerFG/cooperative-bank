import { useTranslation } from 'react-i18next';
import ActionLink from '@/components/ui/ActionLink';
import StyledSection from '@/components/containers/StyledSection';
import { StyledLinksContainer } from './Feature.styles';

function Feature({ name, links }) {
  const { t } = useTranslation();
  return (
    <StyledSection>
      <h2>{t(name)}</h2>
      <StyledLinksContainer>
        {links.map((link) => (
          <ActionLink {...link} rounded key={link.navigateTo} />
        ))}
      </StyledLinksContainer>
    </StyledSection>
  );
}

export default Feature;
