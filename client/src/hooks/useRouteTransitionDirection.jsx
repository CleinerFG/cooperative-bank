import { useLayoutEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

function getDepth(path) {
  // filter(Boolen) -> remove falsy; remove ("") empty strings from array
  return path.split('/').filter(Boolean).length;
}

export default function useRouteTransitionDirection() {
  const location = useLocation();
  const prevPathRef = useRef(location.pathname);
  const [transitionState, setTransitionState] = useState({
    motionKey: location.pathname,
    direction: 'forward',
  });

  useLayoutEffect(() => {
    const prevPath = prevPathRef.current;
    const prevDepth = getDepth(prevPath);
    const currDepth = getDepth(location.pathname);

    const isForward = currDepth >= prevDepth;
    const direction = isForward ? 'forward' : 'backward';

    setTransitionState({
      motionKey: location.pathname,
      direction,
    });
    prevPathRef.current = location.pathname;

    // Debug
    // console.table({
    //   from: prevPath,
    //   to: location.pathname,
    //   direction,
    // });
  }, [location.pathname]);

  return transitionState;
}
