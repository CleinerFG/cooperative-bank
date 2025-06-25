import { createPortal } from 'react-dom';
import { useNotifications } from '@/hooks/notifications';
import { useDelayedUnmount } from '@/hooks/useDelayedUnmount';
import useHiddenBodyOverFlow from '@/hooks/useHiddenBodyOverflow';
import SlideAnimation from '@/components/animations/SlideAnimation';
import { StyledBackdrop, StyledContainer } from './Panel.styles';
import Content from './Content';
import Header from './Header';

function Panel() {
  const { panelIsOpen, setPanelIsOpen } = useNotifications();
  const { shouldRender, handleAnimationComplete } =
    useDelayedUnmount(panelIsOpen);
  useHiddenBodyOverFlow(panelIsOpen);

  const handleCloseOnClickOutside = (ev) => {
    // Close only when the click is directly on the backdrop
    if (ev.target === ev.currentTarget) {
      setPanelIsOpen(false);
    }
  };

  return createPortal(
    shouldRender && (
      <StyledBackdrop onClick={handleCloseOnClickOutside}>
        <SlideAnimation
          isVisible={panelIsOpen}
          onAnimationComplete={handleAnimationComplete}
          initialPosition={{ y: -200 }}
        >
          <StyledContainer>
            <Header />
            <Content />
          </StyledContainer>
        </SlideAnimation>
      </StyledBackdrop>
    ),
    document.body
  );
}

export default Panel;
