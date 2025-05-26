import { Outlet } from 'react-router-dom';

import Header from './Header';
import NavBar from './NavBar';
import MotionWrapper from './MotionWrapper';
import useRouteTransitonDirection from '@/hooks/useRouteTransitionDirection';
import { StyledContainer, StyledPageContent } from './AppLayout.styles';
import ProtectValueProvider from '@/contexts/ProtectValueContext';

export default function AppLayout() {
  const { motionKey, direction } = useRouteTransitonDirection();

  return (
    <StyledContainer>
      <ProtectValueProvider>
        <Header />
        <MotionWrapper motionKey={motionKey} direction={direction}>
          <StyledPageContent>
            <Outlet />
          </StyledPageContent>
        </MotionWrapper>
        <NavBar />
      </ProtectValueProvider>
    </StyledContainer>
  );
}
