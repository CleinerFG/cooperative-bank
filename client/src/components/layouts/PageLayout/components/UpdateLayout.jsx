import { usePageLayoutContext } from '@/contexts/PageLayoutContext';
import { useEffect } from 'react';

function UpdateLayout(props) {
  const { setTitle } = usePageLayoutContext();
  useEffect(() => {
    setTitle(props.title);
  }, [props, setTitle]);
}

export default UpdateLayout;
