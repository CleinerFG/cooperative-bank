import { Outlet } from 'react-router-dom';
import Menu from './Menu';
import {
  StyledBrandLink,
  StyledContainer,
  StyledHeader,
  StyledMain,
} from './PublicLayout.styles';
import Footer from './Footer';

function PublicLayout() {
  return (
    <StyledContainer>
      <StyledHeader>
        <StyledBrandLink to="/">Cooperative Bank</StyledBrandLink>
        <Menu />
      </StyledHeader>
      <StyledMain>
        <Outlet />
      </StyledMain>
      <Footer />
    </StyledContainer>
  );
}

export default PublicLayout;
