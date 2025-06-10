import { useEffect } from 'react';
import usePageLayoutContext from './usePageLayoutContext';

function useUpdatePageLayout(title) {
  const { setLayoutState } = usePageLayoutContext();
  useEffect(() => {
    setLayoutState((prev) => ({ ...prev, title }));
  }, [title, setLayoutState]);
}

export default useUpdatePageLayout;
