import { createPortal } from 'react-dom';
import { useNotifications } from '@/hooks/notifications';
import { useDelayedUnmount } from '@/hooks/useDelayedUnmount';
import useHiddenBodyOverFlow from '@/hooks/useHiddenBodyOverflow';
import SlideDownAnimation from '@/components/animations/SlideDownAnimation';
import { StyledBackdrop, StyledContainer } from './Panel.styles';
import Content from './Content';
import Header from './Header';

function Panel() {
  const { panelIsOpen } = useNotifications();
  const { shouldRender, handleAnimationComplete } =
    useDelayedUnmount(panelIsOpen);
  useHiddenBodyOverFlow(panelIsOpen);

  return createPortal(
    shouldRender && (
      <StyledBackdrop>
        <SlideDownAnimation
          isVisible={panelIsOpen}
          onAnimationComplete={handleAnimationComplete}
        >
          <StyledContainer>
            <Header />
            <Content />
          </StyledContainer>
        </SlideDownAnimation>
      </StyledBackdrop>
    ),
    document.body
  );
}

export default Panel;
