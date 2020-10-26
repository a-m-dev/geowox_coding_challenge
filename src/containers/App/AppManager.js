import { useState, useEffect, useCallback, useMemo } from "react";
import { getProperties } from "api";
import { MAP_CONSTANTS } from "constants/MapConstants";
import { getUniqArr } from "utils/getUniqArr";
import { findById } from "utils/findById";

const AppManager = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [properties, setProperties] = useState([]);
  const [mapCenter, setMapCenter] = useState(MAP_CONSTANTS.CENTER);
  const [mapZoomLevel, setMapZoomLevel] = useState(MAP_CONSTANTS.ZOOM_LEVEL);

  const [activeFilters, setActiveFilter] = useState({
    propertyTypes: null,
    bathrooms: null,
    bedrooms: null,
  });

  useEffect(() => {
    getPropertiesData();
  }, []);

  useEffect(() => {
    getFilterQuery({ activeFilters, getFilterableData });
  }, [activeFilters]);

  const handleUpdateFilters = useCallback(
    ({ filterCategory, id }) => {
      setActiveFilter((state) => ({ ...state, [filterCategory]: id }));
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

    return { propertyTypes, bedrooms, bathrooms };
  }, [properties]);

  const getFilterQuery = useCallback(({ activeFilters, getFilterableData }) => {
    const { propertyTypes, bathrooms, bedrooms } = activeFilters;

    const pt = findById({
      dataset: getFilterableData.propertyTypes,
      targetId: propertyTypes,
    });
    const bd = findById({
      dataset: getFilterableData.bedrooms,
      targetId: bedrooms,
    });
    const bth = findById({
      dataset: getFilterableData.bathrooms,
      targetId: bathrooms,
    });

    getPropertiesData({ pt, bd, bth });
  }, []);

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
