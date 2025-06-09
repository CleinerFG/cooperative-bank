import { useState } from 'react';
import { Outlet, useMatch, useMatches } from 'react-router-dom';
import { PageLayoutContext } from '@/contexts/PageLayoutContext';
import Title from './components/Title';
import PrevButton from './components/PrevButton';
import {
  StyledContainer,
  StyledMain,
  StyledTitleContainer,
} from './PageLayout.styles';

function PageLayout() {
  const [title, setTitle] = useState('');
  const matches = useMatches();
  const isRootRoute = useMatch({ path: matches[1].pathname, end: true });
  return (
    <PageLayoutContext.Provider value={{ title, setTitle }}>
      <StyledContainer>
        <StyledTitleContainer>
          <PrevButton />
          <Title text={title} strong={isRootRoute} />
        </StyledTitleContainer>
        <StyledMain>
          <Outlet />
        </StyledMain>
      </StyledContainer>
    </PageLayoutContext.Provider>
  );
}

export default PageLayout;
