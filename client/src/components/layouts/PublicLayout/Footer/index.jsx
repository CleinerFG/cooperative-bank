import { useLocation } from 'react-router-dom';
import { StyledContainer } from './Footer.styles';
import RegisterContent from './RegisterContent';

function Footer() {
  const location = useLocation();
  return (
    <StyledContainer>
      {location.pathname === '/register' ? <RegisterContent /> : null}
    </StyledContainer>
  );
}

export default Footer;
