import usePageLayoutContext from './usePageLayoutContext';

function usePageLayoutState() {
  const { layoutState, setLayoutState } = usePageLayoutContext();
  return {
    title: layoutState.title,
    isRootRoute: layoutState.isRootRoute,
    updateTitle: (title) => setLayoutState((prev) => ({ ...prev, title })),
  };
}

export default usePageLayoutState;
