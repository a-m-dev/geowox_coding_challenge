import { useMemo } from "react";
import { useGlobalContext } from "containers/App/context";

const PropertyListManager = () => {
  const {
    data: { properties, searchResult },
  } = useGlobalContext();

  const getPropertiesData = useMemo(() => {
    if (searchResult.length) return searchResult;
    return properties;
  }, [properties, searchResult]);

  const getHeading = useMemo(() => {
    if (getPropertiesData.length === 0) return "";
    else if (getPropertiesData.length === 1)
      return `${getPropertiesData.length} Result`;
    else return `${getPropertiesData.length} Results`;
  }, [getPropertiesData]);

  return {
    data: { getHeading, getPropertiesData },
  };
};

export default PropertyListManager;
