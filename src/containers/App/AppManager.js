import { useState, useEffect, useCallback, useMemo } from "react";
import { getProperties } from "api";
import { MAP_CONSTANTS } from "constants/MapConstants";
import { getUniqArr } from "utils/getUniqArr";

const AppManager = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [properties, setProperties] = useState([]);
  const [mapCenter, setMapCenter] = useState(MAP_CONSTANTS.CENTER);
  const [mapZoomLevel, setMapZoomLevel] = useState(MAP_CONSTANTS.ZOOM_LEVEL);

  const [activeFilters, setActiveFilter] = useState({
    propertyType: null,
    bathrooms: null,
    bedrooms: null,
  });

  useEffect(() => {
    getPropertiesData();
  }, []);

  const handleUpdateFilters = useCallback(
    (args) => {
      console.log(">>>>", args);
    },
    [activeFilters, setActiveFilter]
  );

  /** get properties and set to state */
  const getPropertiesData = useCallback(async () => {
    setIsLoading(true);

    const data = await getProperties();
    setProperties(data);

    setIsLoading(false);
  }, [setIsLoading, setProperties]);

  const getFilterableData = useMemo(() => {
    const propertyTypes = getUniqArr({
      dataset: properties,
      key: "propertyType",
    });
    const bathrooms = getUniqArr({ dataset: properties, key: "baths" });
    const bedrooms = getUniqArr({ dataset: properties, key: "beds" });

    return { propertyTypes, bathrooms, bedrooms };
  }, [properties]);

  return {
    data: {
      isLoading,

      properties,
      mapCenter,
      mapZoomLevel,
      getFilterableData,

      activeFilters,
    },
    actions: {
      setMapCenter,
      setMapZoomLevel,

      handleUpdateFilters,
    },
  };
};

export default AppManager;
