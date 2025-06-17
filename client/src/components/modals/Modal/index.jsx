import { createPortal } from 'react-dom';
import EnterAndExitAnimation from '@/components/animations/EnterAndExitAnimation';
import useHiddenBodyOverFlow from '@/hooks/useHiddenBodyOverflow';
import { useDelayedUnmount } from '@/hooks/useDelayedUnmount';
import CloseButton from './CloseButton';
import { StyledBackdropStyle, StyledContainer } from './Modal.styles';

function Modal({ isOpen, onClose, children }) {
  const { shouldRender, handleAnimationComplete } = useDelayedUnmount(isOpen);
  useHiddenBodyOverFlow(isOpen);

  return createPortal(
    shouldRender && (
      <StyledBackdropStyle>
        <EnterAndExitAnimation
          isVisible={isOpen}
          onAnimationComplete={handleAnimationComplete}
        >
          <StyledContainer>
            <CloseButton onClose={onClose} />
            {children}
          </StyledContainer>
        </EnterAndExitAnimation>
      </StyledBackdropStyle>
    ),
    document.body
  );
}

export default Modal;
