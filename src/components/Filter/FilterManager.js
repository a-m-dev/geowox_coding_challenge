import { useGlobalContext } from "containers/App/context";

const FilterManager = () => {
  const {
    data: { isLoading, getFilterableData },
  } = useGlobalContext();

  return {
    data: { isLoading, getFilterableData },
  };
};

export default FilterManager;
