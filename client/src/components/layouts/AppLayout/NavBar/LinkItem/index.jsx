import { useTranslation } from 'react-i18next';
import { useMatch } from 'react-router-dom';
import ActiveIndicator from './ActiveIndicator';
import { StyledLink } from './LinkItem.styles';

function LinkItem({ label, navigateTo, Icon, strictMatch = false }) {
  const { t } = useTranslation();
  const isActiveMatch = useMatch({ path: navigateTo, end: strictMatch });

  return (
    <li>
      <StyledLink to={navigateTo} end active={isActiveMatch}>
        {isActiveMatch && <ActiveIndicator />}
        {Icon && <Icon />}
        <span>{t(label)}</span>
      </StyledLink>
    </li>
  );
}

export default LinkItem;
