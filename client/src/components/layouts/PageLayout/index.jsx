import { Outlet } from 'react-router-dom';
import { PageLayoutProvider } from '@/contexts/PageLayoutContext';
import Title from './components/Title';
import {
  StyledContainer,
  StyledMain,
} from './PageLayout.styles';

function PageLayout() {
  return (
    <PageLayoutProvider>
      <StyledContainer>
        <Title />
        <StyledMain>
          <Outlet />
        </StyledMain>
      </StyledContainer>
    </PageLayoutProvider>
  );
}

export default PageLayout;
