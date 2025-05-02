import { useEffect, useRef, useState } from 'react';
import MenuButton from './MenuButton';
import Nav from './Nav';

export default function Menu() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    if (!isNavOpen) return;

    const handleClickOutside = (ev) => {
      if (
        !navRef.current?.contains(ev.target) &&
        !btnRef.current?.contains(ev.target)
      ) {
        setIsNavOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isNavOpen]);

  return (
    <>
      <MenuButton ref={btnRef} onToggleNav={setIsNavOpen} />
      {isNavOpen && <Nav ref={navRef} />}
    </>
  );
}
