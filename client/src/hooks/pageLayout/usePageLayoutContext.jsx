import { useContext } from 'react';
import { PageLayoutContext } from '@/contexts/PageLayoutContext';

function usePageLayoutContext() {
  return useContext(PageLayoutContext);
}

export default usePageLayoutContext;
