import { Outlet } from 'react-router-dom';

import Header from './Header';
import NavBar from './NavBar';
import MotionWrapper from './MotionWrapper';
import useRouteTransitonDirection from '@/hooks/useRouteTransitionDirection';
import { StyledContainer, StyledPageContent } from './AppLayout.styles';

export default function AppLayout() {
  const { motionKey, direction } = useRouteTransitonDirection();

  return (
    <StyledContainer>
      <Header />
      <MotionWrapper motionKey={motionKey} direction={direction}>
        <StyledPageContent>
          <Outlet />
        </StyledPageContent>
      </MotionWrapper>
      <NavBar />
    </StyledContainer>
  );
}
