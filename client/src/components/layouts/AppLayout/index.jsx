import { Outlet, useRouteError } from 'react-router-dom';

import Header from './Header';
import NavBar from './NavBar';
import MotionWrapper from './MotionWrapper';
import useRouteTransitonDirection from '@/hooks/useRouteTransitionDirection';
import { StyledContainer, StyledPageContent } from './AppLayout.styles';
import ProtectValueProvider from '@/contexts/ProtectValueContext';
import ErrorPage from '@/pages/app/Error';

export default function AppLayout() {
  const { motionKey, direction } = useRouteTransitonDirection();
  const error = useRouteError();

  return (
    <StyledContainer>
      <ProtectValueProvider>
        <Header />
        <MotionWrapper motionKey={motionKey} direction={direction}>
          <StyledPageContent>
            {error ? <ErrorPage error={error} /> : <Outlet />}
          </StyledPageContent>
        </MotionWrapper>
        <NavBar />
      </ProtectValueProvider>
    </StyledContainer>
  );
}
