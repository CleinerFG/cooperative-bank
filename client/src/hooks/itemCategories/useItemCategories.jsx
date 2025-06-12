import useItemCategoriesContext from './useItemCategoriesContext';

function useItemCategories() {
  const { state, dispatch } = useItemCategoriesContext();

  const updateActiveIndex = (index) => {
    dispatch({
      type: 'UPDATE_ACTIVE_IDX',
      payload: { index },
    });
  };

  return {
    activeIndex: state.activeIndex,
    activeCategory: state.categories[state.activeIndex],
    categories: state.categories,
    updateActiveIndex,
  };
}

export default useItemCategories;
