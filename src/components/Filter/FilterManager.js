import { useGlobalContext } from "containers/App/context";

const FilterManager = () => {
  const {
    data: { isLoading, getFilterableData, shouldShowFilterError },
    actions: { handleClearFilters },
  } = useGlobalContext();

  return {
    data: { isLoading, getFilterableData, shouldShowFilterError },
    actions: { handleClearFilters },
  };
};

export default FilterManager;
