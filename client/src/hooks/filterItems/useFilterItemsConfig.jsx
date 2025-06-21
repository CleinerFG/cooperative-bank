import useFilterItemsContext from './useFilterItemsContext';

function useFilterItemsConfig() {
  const { state } = useFilterItemsContext();

  return {
    filterTypes: state.config.filterTypes,
    filterByProp: state.config.filterByProp,
  };
}

export default useFilterItemsConfig;
