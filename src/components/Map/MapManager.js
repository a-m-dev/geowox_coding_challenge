import { useMemo, useCallback } from "react";
import { useGlobalContext } from "containers/App/context";

const MapManager = () => {
  const {
    data: { isLoading, properties, searchResult, mapCenter, mapZoomLevel },
    actions: { setMapCenter, setMapZoomLevel },
  } = useGlobalContext();

  const propertyMarkersLocation = useMemo(() => {
    if (searchResult.length)
      return searchResult.map(({ lat, lon }) => [lon, lat]);
    return properties.map(({ lat, lon }) => [lon, lat]);
  }, [properties, searchResult]);

  const handleActiveMarker = useCallback(
    (args) => {
      setMapCenter(args);
      setMapZoomLevel([18]);
    },
    [setMapCenter, setMapZoomLevel]
  );

  return {
    data: {
      isLoading,

      properties,
      mapCenter,
      mapZoomLevel,
      propertyMarkersLocation,
    },
    actions: { handleActiveMarker },
  };
};

export default MapManager;
