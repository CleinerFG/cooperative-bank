import { useEffect, useRef } from 'react';

function useCloseOnClickOutside(isActive, onClose) {
  const triggerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (!isActive) return;

    const handleClick = (event) => {
      if (
        !triggerRef.current?.contains(event.target) &&
        !contentRef.current?.contains(event.target)
      ) {
        onClose();
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [isActive, onClose]);

  return { triggerRef, contentRef };
}

export default useCloseOnClickOutside;
