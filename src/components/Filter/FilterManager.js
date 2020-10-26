import { useState, useCallback } from "react";

import { useGlobalContext } from "containers/App/context";

const FilterManager = () => {
  const {
    data: { getFilterableData },
  } = useGlobalContext();

  return {
    data: { getFilterableData },
  };
};

export default FilterManager;
