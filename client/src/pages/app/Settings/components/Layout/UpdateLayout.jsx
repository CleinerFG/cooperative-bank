import { useEffect } from 'react';
import { useLayout } from '../../contexts/layout';

function UpdateLayout({title}) {
  const { setTitle } = useLayout();
  useEffect(() => {
    setTitle(title);
  });
  return null;
}

export default UpdateLayout;
