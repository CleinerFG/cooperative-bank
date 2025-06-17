function filterData(filterType, data) {
  return filterType === 'all'
    ? data
    : data.filter((item) => item.status === filterType);
}

export default filterData;
