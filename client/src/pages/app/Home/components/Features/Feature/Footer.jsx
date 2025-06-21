import Tag from '@/components/ui/Tag';
import { StyledFooter } from '@/components/cards/BaseCard/BaseCard.styles';

function Footer({ tags }) {
  return (
    <StyledFooter>
      {tags.map((tag) => (
        <Tag {...tag} key={tag.label} />
      ))}
    </StyledFooter>
  );
}

export default Footer;
