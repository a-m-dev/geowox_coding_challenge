import { useState, useEffect, useCallback, useMemo } from "react";
import { getProperties, findProperties } from "api";
import { MAP_CONSTANTS } from "constants/MapConstants";
import { getUniqArr } from "utils/getUniqArr";
import { findById } from "utils/findById";

const AppManager = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [properties, setProperties] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [mapCenter, setMapCenter] = useState(MAP_CONSTANTS.CENTER);
  const [mapZoomLevel, setMapZoomLevel] = useState(MAP_CONSTANTS.ZOOM_LEVEL);
  const [shouldShowFilterError, setShouldShowFilterError] = useState(false);

  const [activeFilters, setActiveFilters] = useState({
    propertyTypes: null,
    bathrooms: null,
    bedrooms: null,
  });

  useEffect(() => {
    getPropertiesData();
  }, []);

  useEffect(() => {
    if (Object.values(activeFilters).some((x) => Boolean(x))) {
      searchProperties({ activeFilters, getFilterableData });
    }
  }, [activeFilters]);

  const handleUpdateFilters = useCallback(
    ({ filterCategory, id }) => {
      setActiveFilters((state) => ({ ...state, [filterCategory]: id }));
    },
    [activeFilters, setActiveFilters]
  );

  const handleClearFilters = useCallback(() => {
    setSearchResult([]);
    setShouldShowFilterError(false);
    setActiveFilters({
      propertyTypes: null,
      bathrooms: null,
      bedrooms: null,
    });
  }, []);

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

  /** search properties and set to state */
  const searchProperties = useCallback(
    async ({ activeFilters, getFilterableData }) => {
      setIsLoading(true);

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

      try {
        const data = await findProperties({ pt, bd, bth });
        console.log(">>>>> RESULT", data);
        setShouldShowFilterError(false);
        setSearchResult(data);
      } catch (error) {
        const { message, code } = error;
        console.log("Error", error);
        setShouldShowFilterError(message);
        setSearchResult([]);
      } finally {
        setIsLoading(false);
      }
    },
    [setIsLoading, setSearchResult, setShouldShowFilterError]
  );

  return {
    data: {
      isLoading,

      properties,
      mapCenter,
      mapZoomLevel,
      getFilterableData,

      activeFilters,
      searchResult,
      shouldShowFilterError,
    },
    actions: {
      setMapCenter,
      setMapZoomLevel,

      handleUpdateFilters,
      handleClearFilters,
    },
  };
};

export default AppManager;
