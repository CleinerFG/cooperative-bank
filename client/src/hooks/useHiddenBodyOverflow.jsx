import { useEffect } from 'react';

function useHiddenBodyOverFlow(isHidden) {
  useEffect(() => {
    document.body.style.overflow = isHidden ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isHidden]);
}

export default useHiddenBodyOverFlow;
