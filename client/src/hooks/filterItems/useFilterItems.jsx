import useFilterItemsContext from './useFilterItemsContext';

function useFilterItems() {
  const { state, dispatch } = useFilterItemsContext();
  const setFilter = (filterType) => {
    dispatch({
      type: 'SET_ACTIVE_FILTER',
      payload: {
        type: filterType,
      },
    });
  };

  return {
    activeFilter: state.activeFilter,
    filteredData: state.filteredDataByType[state.activeFilter],
    setFilter,
  };
}

export default useFilterItems;
