import React, { useMemo } from "react";
import { useGlobalContext } from "containers/App/context";

const PieChartManager = () => {
  const {
    data: { properties },
  } = useGlobalContext();

  const getChartData = useMemo(() => {
    let result = {};

    for (let i = 0; i < properties.length; i++) {
      if (result[properties[i].propertyType])
        result[properties[i].propertyType] += 1;
      else result[properties[i].propertyType] = 1;
    }

    result = Object.entries(result).map(([key, value]) => ({
      name: key,
      value,
    }));

    return result || [];
  }, [properties]);

  return {
    data: { getChartData },
  };
};

export default PieChartManager;
