import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { useDelayedUnmount } from '@/hooks/useDelayedUnmount';
import SlideAnimation from '@/components/animations/SlideAnimation';
import {
  StyledLinkList,
  StyledNav,
  StyledContainer,
  StyledLine,
} from './DropMenu.styles';
import Actions from './Actions';

function DropMenu({ isOpen, containerRef }) {
  const { t } = useTranslation();
  const { shouldRender, handleAnimationComplete } = useDelayedUnmount(isOpen);
  return (
    shouldRender && (
      <SlideAnimation
        isVisible={isOpen}
        onAnimationComplete={handleAnimationComplete}
        initialPosition={{ x: 200, y: -50 }}
        endPosition={{ x: 0, y: -50 }}
      >
        <StyledContainer ref={containerRef}>
          <StyledNav>
            <StyledLinkList>
              <NavLink to="login">{t('login')}</NavLink>
              <NavLink to="register">{t('register')}</NavLink>
            </StyledLinkList>
          </StyledNav>
          <StyledLine />
          <Actions />
        </StyledContainer>
      </SlideAnimation>
    )
  );
}

export default DropMenu;
