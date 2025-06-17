export function filterData(data, filterType, filterByProp) {
  return filterType === 'all'
    ? data
    : data.filter((item) => item[filterByProp] === filterType);
}

export function getFilteredDataByType(data, filterTypes, filterByProp) {
  return filterTypes.reduce((acc, type) => {
    acc[type] = filterData(data, type, filterByProp);
    return acc;
  }, {});
}
