import { useEffect } from 'react';
import { useLayout } from '../../contexts/layout';

function UpdateLayout({ title, Icon }) {
  const { setLayoutProps } = useLayout();
  useEffect(() => {
    setLayoutProps({ title, Icon });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
}

export default UpdateLayout;
