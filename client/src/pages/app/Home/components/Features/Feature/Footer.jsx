import Tag from '@/components/Tag';
import { StyledCardFooter } from '@/components/cards/StyledBaseCard';

function Footer({ tags }) {
  return (
    <StyledCardFooter>
      {tags.map((tag) => (
        <Tag {...tag} key={tag.label} />
      ))}
    </StyledCardFooter>
  );
}

export default Footer;
