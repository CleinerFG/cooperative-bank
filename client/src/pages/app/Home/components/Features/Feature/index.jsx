import { useTranslation } from 'react-i18next';
import ActionLink from '@/components/ui/ActionLink';
import { StyledCardContainer } from '@/components/ui/StyledCardContainer';
import { StyledLinksContainer } from './Feature.styles';

function Feature({ name, links }) {
  const { t } = useTranslation();
  return (
    <section>
      <StyledCardContainer>
        <h2>{t(name)}</h2>

        <StyledLinksContainer>
          {links.map((link) => (
            <ActionLink {...link} rounded key={link.navigateTo} />
          ))}
        </StyledLinksContainer>
      </StyledCardContainer>
    </section>
  );
}

export default Feature;
