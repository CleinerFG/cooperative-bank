import { MenuIcon } from 'lucide-react';
import { StyledButton, StyledContainer } from './Menu.styles';
import { useState } from 'react';
import DropMenu from './DropMenu';
import useCloseOnClickOutside from '@/hooks/useCloseOnClickOutside';

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const { triggerRef, contentRef } = useCloseOnClickOutside(isOpen, () =>
    setIsOpen(false)
  );

  return (
    <StyledContainer>
      <StyledButton
        $active={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        ref={triggerRef}
      >
        <MenuIcon />
      </StyledButton>
      <DropMenu isOpen={isOpen} containerRef={contentRef} />
    </StyledContainer>
  );
}

export default Menu;
