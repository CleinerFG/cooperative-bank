import { Outlet } from 'react-router-dom';
import { StyledContainer } from './PublicFormPageLayout.styles';

function PublicFormPageLayout() {
  return (
    <StyledContainer>
      <Outlet />
    </StyledContainer>
  );
}

export default PublicFormPageLayout;
