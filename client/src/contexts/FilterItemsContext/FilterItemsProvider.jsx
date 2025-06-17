import { useReducer } from 'react';
import InstallmentsContext from './FilterItemsContext';
import reducer from './reducer';
import filterData from './filterData';

function FilterItemsProvider({ config, data, children }) {
  const [state, dispatch] = useReducer(reducer, {
    config: {
      initialFilter: config.initialFilter,
      filterTypes: config.filterTypes,
      filterByProp: config.filterByProp,
    },
    activeFilter: config.initialFilter,
    data: data,
    filteredDataByType: config.filterTypes.reduce((acc, filterT) => {
      acc[filterT] = filterData(filterT, data);
      return acc;
    }, {}),
  });

  return (
    <InstallmentsContext.Provider value={{ state, dispatch }}>
      {children}
    </InstallmentsContext.Provider>
  );
}

export default FilterItemsProvider;
