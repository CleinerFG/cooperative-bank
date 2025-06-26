import { useLocation } from 'react-router-dom';
import { StyledContainer } from './Footer.styles';
import RegisterContent from './RegisterContent';
import LoginContent from './LoginContent';

function Footer() {
  const location = useLocation();
  return (
    <StyledContainer>
      {location.pathname === '/register' ? (
        <RegisterContent />
      ) : location.pathname === '/login' ? (
        <LoginContent />
      ) : null}
    </StyledContainer>
  );
}

export default Footer;
