import { useDelayedUnmount } from './useDelayedUnmount';
import { useEffect, useState } from 'react';

function useDelayedRemoval(onRemoveItem) {
  const [isVisible, setIsVisible] = useState(true);
  const { shouldRender, handleAnimationComplete } =
    useDelayedUnmount(isVisible);

  useEffect(() => {
    if (!shouldRender) {
      onRemoveItem();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldRender]);

  const unmountComponent = () => setIsVisible(false);

  return { isVisible, unmountComponent, handleAnimationComplete };
}

export default useDelayedRemoval;
