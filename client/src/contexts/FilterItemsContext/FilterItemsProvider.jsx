import { useReducer } from 'react';
import InstallmentsContext from './FilterItemsContext';
import reducer from './reducer';
import { getFilteredDataByType } from './utils';

function FilterItemsProvider({ config, data, children }) {
  const [state, dispatch] = useReducer(reducer, {
    config: {
      initialFilter: config.initialFilter,
      filterTypes: config.filterTypes,
      filterByProp: config.filterByProp,
    },
    activeFilter: config.initialFilter,
    data: data,
    filteredDataByType: getFilteredDataByType(
      data,
      config.filterTypes,
      config.filterByProp
    ),
  });

  return (
    <InstallmentsContext.Provider value={{ state, dispatch }}>
      {children}
    </InstallmentsContext.Provider>
  );
}

export default FilterItemsProvider;
