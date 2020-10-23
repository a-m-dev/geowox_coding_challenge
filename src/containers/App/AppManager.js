import { useState, useEffect, useCallback } from "react";
import { getProperties } from "api";
import { MAP_CONSTANTS } from "constants/MapConstants";

const AppManager = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [properties, setProperties] = useState([]);
  const [mapCenter, setMapCenter] = useState(MAP_CONSTANTS.CENTER);
  const [mapZoomLevel, setMapZoomLevel] = useState(MAP_CONSTANTS.ZOOM_LEVEL);

  useEffect(() => {
    getPropertiesData();
  }, []);

  /** get properties and set to state */
  const getPropertiesData = useCallback(async () => {
    setIsLoading(true);

    const data = await getProperties();
    setProperties(data);

    setIsLoading(false);
  }, [setIsLoading, setProperties]);

  return {
    data: {
      isLoading,

      properties,
      mapCenter,
      mapZoomLevel,
    },
    actions: {
      setMapCenter,
      setMapZoomLevel,
    },
  };
};

export default AppManager;
