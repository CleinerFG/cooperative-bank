import { useState, useEffect, useCallback } from 'react';

export function useDelayedUnmount(isMounted) {
  const [shouldRender, setShouldRender] = useState(isMounted);

  useEffect(() => {
    if (isMounted) {
      setShouldRender(true);
    }
  }, [isMounted]);

  const handleAnimationComplete = useCallback(() => {
    if (!isMounted) {
      setShouldRender(false);
    }
  }, [isMounted]);

  return { shouldRender, handleAnimationComplete };
}
