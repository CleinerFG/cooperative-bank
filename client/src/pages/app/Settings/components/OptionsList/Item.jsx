import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronRight } from 'lucide-react';
import StyledOptionRow from '@/components/containers/StyledOptionRow';
import { StyledLabelContainer } from './OptionsList.styles';

function Item({ label, navigateTo, Icon }) {
  const { t } = useTranslation();
  return (
    <li>
      <Link to={navigateTo}>
        <StyledOptionRow>
          <StyledLabelContainer>
            {Icon}
            <span>{t(label)}</span>
          </StyledLabelContainer>
          <ChevronRight />
        </StyledOptionRow>
      </Link>
    </li>
  );
}

export default Item;
