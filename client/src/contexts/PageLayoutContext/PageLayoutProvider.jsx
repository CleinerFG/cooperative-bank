import { useState } from 'react';
import PageLayoutContext from './PageLayoutContext';
import { useMatch, useMatches } from 'react-router-dom';

function PageLayoutProvider({ children }) {
  const [state, setState] = useState({ title: '' });
  const matches = useMatches();
  const isRootRoute = useMatch({ path: matches[1].pathname, end: true });
  return (
    <PageLayoutContext.Provider
      value={{
        layoutState: { ...state, isRootRoute },
        setLayoutState: setState,
      }}
    >
      {children}
    </PageLayoutContext.Provider>
  );
}

export default PageLayoutProvider;
