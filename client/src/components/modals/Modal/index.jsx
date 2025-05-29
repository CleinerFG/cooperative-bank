import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import EnterAndExitAnimation from '@/components/animations/EnterAndExitAnimation';
import { useDelayedUnmount } from '@/hooks/useDelayedUnmount';
import CloseButton from './CloseButton';
import {
  StyledBackdropStyle,
  StyledContainer,
} from './Modal.styles';

function Modal({ isOpen, onClose, children }) {
  const { shouldRender, handleAnimationComplete } = useDelayedUnmount(isOpen);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

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
