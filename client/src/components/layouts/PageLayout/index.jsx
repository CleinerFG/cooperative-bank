import { Outlet } from 'react-router-dom';
import { PageLayoutProvider } from '@/contexts/PageLayoutContext';
import Title from './components/Title';
import PrevButton from './components/PrevButton';
import {
  StyledContainer,
  StyledMain,
  StyledTitleContainer,
} from './PageLayout.styles';

function PageLayout() {
  return (
    <PageLayoutProvider>
      <StyledContainer>
        <StyledTitleContainer>
          <PrevButton />
          <Title />
        </StyledTitleContainer>
        <StyledMain>
          <Outlet />
        </StyledMain>
      </StyledContainer>
    </PageLayoutProvider>
  );
}

export default PageLayout;
